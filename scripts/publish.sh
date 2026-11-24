#!/usr/bin/env sh
# Publish this package to npm and the vlt registry.
#   sh scripts/publish.sh            publish
#   sh scripts/publish.sh --dry-run  show what would be published
set -eu
cd "$(dirname "$0")/.."
dry=""
[ "${1:-}" = "--dry-run" ] && dry="--dry-run"
echo "== npm"
npm publish --access public $dry
echo "== vlt"
vlt registry main publish $dry
