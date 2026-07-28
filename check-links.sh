#!/usr/bin/env bash
# check-links.sh — validates all RESOURCE_CONFIG URLs across pages/*.html
# Exits 0 if all links return HTTP 2xx/3xx; exits 1 and lists failures otherwise.
# Run manually:  bash check-links.sh
# Installed as:  .git/hooks/pre-commit (auto-runs on every commit)

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"
HTML_FILES=("$REPO_ROOT"/pages/*.html "$REPO_ROOT"/index.html)

failures=()
checked=0

check_url() {
  local url="$1" file="$2"
  local http_code curl_exit
  http_code=$(curl -o /dev/null -s -w "%{http_code}" --max-time 25 --location "$url") || curl_exit=$?
  if [[ -n "${curl_exit:-}" ]]; then
    failures+=("  curl error $curl_exit  $url  ($file)")
  elif [[ "$http_code" -lt 200 || "$http_code" -ge 400 ]]; then
    failures+=("  HTTP $http_code  $url  ($file)")
  fi
  (( checked++ )) || true
}

echo "Checking RESOURCE_CONFIG links..."

for file in "${HTML_FILES[@]}"; do
  [[ -f "$file" ]] || continue
  filename="${file##*/}"

  # Extract values for docs/guide/blog keys (skip null and true/false)
  while IFS= read -r line; do
    url=$(echo "$line" | grep -oE "https?://[^'\"]+")
    [[ -n "$url" ]] && check_url "$url" "$filename"
  done < <(grep -E "^\s*(docs|guide|blog)\s*:" "$file" | grep -v "null")
done

echo "Checked $checked URL(s)."

if [[ ${#failures[@]} -gt 0 ]]; then
  echo ""
  echo "FAILED — broken links found:"
  for msg in "${failures[@]}"; do
    echo "$msg"
  done
  echo ""
  echo "Fix the links above before committing."
  exit 1
fi

echo "All links OK."
