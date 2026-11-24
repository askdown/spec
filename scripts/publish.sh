#!/usr/bin/env sh
# Publish this package to npm and the vlt registry.
#   sh scripts/publish.sh            publish
#   sh scripts/publish.sh --dry-run  show what would be published
set -eu
cd "$(dirname "$0")/.."
dry=""
[ "${1:-}" = "--dry-run" ] && dry="--dry-run"
echo "== npm"
# Explicit, because a user config may map the @askdown scope to the vlt registry.
npm publish --access public --@askdown:registry=https://registry.npmjs.org/ $dry
echo "== vlt"
vlt registry main publish --access public $dry
