#!/bin/bash
# deploy-snowhouse.sh — Manual deploy to Snowhouse SPCS
# Run only with Peter's explicit confirmation (end of day or after major changes).
set -e

REGISTRY="sfcogsops-snowhouse-aws-us-west-2.registry.snowflakecomputing.com"
IMAGE="$REGISTRY/temp/pmatson/images/interactive-tdd"
SNOW="/Users/pmatson/.local/bin/snow"
SERVICE="TEMP.PMATSON.INTERACTIVE_TDD"

# Unique tag per deploy. Pinning the spec to :latest does NOT reliably deploy new
# code: the node keeps its cached copy of that tag, so the service restarts on the
# OLD digest and the deploy silently does nothing. Suspend/resume does not help
# either. A tag that has never been seen forces a real pull.
TAG=$(git rev-parse --short HEAD 2>/dev/null || date +%Y%m%d-%H%M%S)

echo "=== Snowhouse Deploy ==="
echo "Registry: $REGISTRY"
echo "Image:    $IMAGE:latest"
echo "Service:  $SERVICE"
echo ""

echo "[1/4] Logging in to Snowhouse image registry..."
$SNOW spcs image-registry login --connection Snowhouse

echo "[2/4] Building image (linux/amd64, no manifest list)..."
docker build --platform linux/amd64 --provenance=false --sbom=false \
  -t "$IMAGE:latest" -t "$IMAGE:$TAG" .

echo "[3/4] Pushing image ($TAG and latest)..."
docker push "$IMAGE:$TAG"
docker push "$IMAGE:latest"

echo "[4/4] Updating service spec (pinned to :$TAG, which forces a real pull)..."
SPEC=$(sed "s|:latest|:$TAG|" spec.yml)
$SNOW sql -q "ALTER SERVICE $SERVICE FROM SPECIFICATION \$\$${SPEC}\$\$" --connection Snowhouse

echo ""
echo "Waiting 20s for service to start..."
sleep 20
$SNOW sql -q "SELECT SYSTEM\$GET_SERVICE_STATUS('$SERVICE')" --connection Snowhouse

# Confirm the running container is actually on the image just pushed. Without this
# a no-op deploy looks like a successful one.
echo ""
echo "Running image (must show :$TAG):"
$SNOW sql -q "SHOW SERVICE CONTAINERS IN SERVICE $SERVICE" --connection Snowhouse --format JSON 2>/dev/null | python3 -c "import sys,json; r=json.load(sys.stdin); print('  ', r[0]['image_name'].split('/')[-1], r[0]['image_digest'][:23]) if r else print('  (none)')"

echo ""
echo "=== Deploy complete ==="
