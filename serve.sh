#!/bin/bash
# Serves the Interactive TDD locally at http://localhost:8080
# Run this if icons or styles don't load when opening index.html directly.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT=8080

echo "Starting server at http://localhost:$PORT"
echo "Press Ctrl+C to stop."

python3 -m http.server "$PORT" --directory "$SCRIPT_DIR" &
SERVER_PID=$!
sleep 0.5
open "http://localhost:$PORT"

wait "$SERVER_PID"
