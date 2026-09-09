#!/bin/bash
# deploy-demo.sh — Deploy Interactive TDD to demo account SPCS
set -e

REGISTRY="sfsenorthamerica-pmat-aws1.registry.snowflakecomputing.com"
IMAGE="$REGISTRY/demo/public/images/interactive-tdd"
SNOW="/Users/pmatson/.local/bin/snow"
CONNECTION="Demo_Account"
SERVICE="DEMO.PUBLIC.INTERACTIVE_TDD"
POOL="TDD_POOL"

echo "=== Demo Account Deploy ==="
echo "Registry: $REGISTRY"
echo "Image:    $IMAGE:latest"
echo "Service:  $SERVICE"
echo "Pool:     $POOL"
echo ""

# Verify we're hitting the right account
ACCT=$($SNOW sql -q "SELECT CURRENT_ACCOUNT_NAME()" --connection $CONNECTION --format JSON 2>/dev/null | python3 -c "import sys,json; print(json.load(sys.stdin)[0]['CURRENT_ACCOUNT_NAME()'])")
if [[ "$ACCT" != "PMAT_AWS1" ]]; then
  echo "ERROR: Connection $CONNECTION resolved to account '$ACCT', expected 'PMAT_AWS1'."
  echo "Re-authenticate: $SNOW connection test --connection $CONNECTION"
  exit 1
fi
echo "Account verified: $ACCT"
echo ""

echo "[1/4] Logging in to demo image registry..."
$SNOW spcs image-registry login --connection $CONNECTION

echo "[2/4] Building image (linux/amd64, no manifest list)..."
docker build --platform linux/amd64 --provenance=false --sbom=false \
  -t "$IMAGE:latest" .

echo "[3/4] Pushing image..."
docker push "$IMAGE:latest"

echo "[4/4] Creating/updating service..."
SPEC=$(cat spec-demo.yml)

# Check if service exists
EXISTS=$($SNOW sql -q "SHOW SERVICES LIKE 'INTERACTIVE_TDD' IN SCHEMA DEMO.PUBLIC" --connection $CONNECTION --role ACCOUNTADMIN --format JSON 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d))")

if [[ "$EXISTS" == "0" ]]; then
  echo "  Creating new service..."
  $SNOW sql -q "CREATE SERVICE $SERVICE IN COMPUTE POOL $POOL FROM SPECIFICATION \$\$${SPEC}\$\$ MIN_INSTANCES=1 MAX_INSTANCES=1" --connection $CONNECTION --role ACCOUNTADMIN
else
  echo "  Updating existing service..."
  $SNOW sql -q "ALTER SERVICE $SERVICE FROM SPECIFICATION \$\$${SPEC}\$\$" --connection $CONNECTION --role ACCOUNTADMIN
fi

echo ""
echo "Waiting 20s for service to start..."
sleep 20
$SNOW sql -q "SELECT SYSTEM\$GET_SERVICE_STATUS('$SERVICE')" --connection $CONNECTION --role ACCOUNTADMIN

echo ""
echo "Service URL:"
$SNOW sql -q "SHOW SERVICES LIKE 'INTERACTIVE_TDD' IN SCHEMA DEMO.PUBLIC" --connection $CONNECTION --role ACCOUNTADMIN --format JSON 2>/dev/null | python3 -c "import sys,json; rows=json.load(sys.stdin); print(rows[0].get('url','(not ready yet)') if rows else '(not found)')"

echo ""
echo "=== Deploy complete ==="
