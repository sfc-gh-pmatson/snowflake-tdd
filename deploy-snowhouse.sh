#!/bin/bash
# deploy-snowhouse.sh — Manual deploy to Snowhouse SPCS
# Run only with Peter's explicit confirmation (end of day or after major changes).
set -e

REGISTRY="sfcogsops-snowhouse-aws-us-west-2.registry.snowflakecomputing.com"
IMAGE="$REGISTRY/temp/pmatson/images/interactive-tdd"
SNOW="/Users/pmatson/.local/bin/snow"
SERVICE="TEMP.PMATSON.INTERACTIVE_TDD"

echo "=== Snowhouse Deploy ==="
echo "Registry: $REGISTRY"
echo "Image:    $IMAGE:latest"
echo "Service:  $SERVICE"
echo ""

echo "[1/4] Logging in to Snowhouse image registry..."
$SNOW spcs image-registry login --connection Snowhouse

echo "[2/4] Building image (linux/amd64, no manifest list)..."
docker build --platform linux/amd64 --provenance=false --sbom=false \
  -t "$IMAGE:latest" .

echo "[3/4] Pushing image..."
docker push "$IMAGE:latest"

echo "[4/4] Restarting service..."
$SNOW sql -q "ALTER SERVICE $SERVICE SUSPEND" --connection Snowhouse || true
sleep 15
$SNOW sql -q "ALTER SERVICE $SERVICE RESUME" --connection Snowhouse

echo ""
echo "Waiting 20s for service to start..."
sleep 20
$SNOW sql -q "SELECT SYSTEM\$GET_SERVICE_STATUS('$SERVICE')" --connection Snowhouse

echo ""
echo "=== Deploy complete ==="
