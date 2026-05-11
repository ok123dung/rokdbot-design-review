#!/usr/bin/env bash
# safe-deploy.sh — Idempotent prod deploy for rokdbot.com with all known gotchas pre-checked.
#
# Why this script exists:
#   - Vercel project "dist" has framework: null → git push triggers CANCELED deploys, must use CLI prebuilt.
#   - `vercel pull` + `vercel build` create .vercel/.env.production.local with EMPTY strings for
#     Encrypted secrets (Vercel CLI can't decrypt them locally). Vite precedence is
#     .env.production.local > .env.production, so the empty file silently overrides correct values
#     → bundle has undefined Supabase URL → "supabaseUrl is required" throw at boot → blank page.
#
# Usage: bash scripts/safe-deploy.sh
#
# This script hard-fails (exit 1) if ANY of these conditions are wrong:
#   1. .env.production missing or empty for VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY
#   2. .vercel/.env.production.local exists (would silently override correct values)
#   3. Built bundle doesn't contain the Supabase URL substring or publishable key prefix
#   4. Deployed bundle (after upload) doesn't contain the env strings either

set -euo pipefail

SUPABASE_URL_FRAGMENT="inondhimzqiguvdhyjng"
SUPABASE_KEY_PREFIX="sb_publishable_"

echo "==> [1/8] Verify .env.production has required vars"
if [[ ! -f .env.production ]]; then
  echo "FAIL: .env.production not found at repo root. Create it with:"
  echo "  VITE_SUPABASE_URL=https://inondhimzqiguvdhyjng.supabase.co"
  echo "  VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_..."
  exit 1
fi
if ! grep -q "^VITE_SUPABASE_URL=https://${SUPABASE_URL_FRAGMENT}" .env.production; then
  echo "FAIL: .env.production missing or wrong VITE_SUPABASE_URL"
  exit 1
fi
if ! grep -q "^VITE_SUPABASE_PUBLISHABLE_KEY=${SUPABASE_KEY_PREFIX}" .env.production; then
  echo "FAIL: .env.production missing or wrong VITE_SUPABASE_PUBLISHABLE_KEY"
  exit 1
fi
echo "    OK"

echo "==> [2/8] Remove .vercel/.env.production.local (Vite override gotcha)"
# This file is created by `vercel pull` and `vercel build`. It contains EMPTY strings
# for Encrypted secrets, which Vite then prioritizes over .env.production.
rm -f .vercel/.env.production.local
if [[ -f .vercel/.env.production.local ]]; then
  echo "FAIL: .vercel/.env.production.local still exists after rm"
  exit 1
fi
echo "    OK"

echo "==> [3/8] Clean dist/ and .vercel/output/"
rm -rf dist .vercel/output
echo "    OK"

echo "==> [4/8] npm run build (NOT vercel build — avoids re-creating bad .local file)"
npm run build > /tmp/build.log 2>&1 || {
  echo "FAIL: build error. Last 20 lines:"
  tail -20 /tmp/build.log
  exit 1
}
echo "    OK"

echo "==> [5/8] Verify env baked into local bundle"
BUNDLE=$(ls dist/assets/index-*.js | head -1)
if [[ -z "$BUNDLE" ]] || [[ ! -f "$BUNDLE" ]]; then
  echo "FAIL: bundle file not found in dist/assets/"
  exit 1
fi
if ! grep -q "$SUPABASE_URL_FRAGMENT" "$BUNDLE"; then
  echo "FAIL: bundle $BUNDLE missing Supabase URL fragment '$SUPABASE_URL_FRAGMENT'"
  echo "       → blank page guaranteed if deployed. Aborting."
  exit 1
fi
if ! grep -q "$SUPABASE_KEY_PREFIX" "$BUNDLE"; then
  echo "FAIL: bundle $BUNDLE missing publishable key prefix '$SUPABASE_KEY_PREFIX'"
  exit 1
fi
echo "    OK ($BUNDLE has env baked)"

echo "==> [6/8] Stage dist/ to .vercel/output/static/"
mkdir -p .vercel/output/static
cp -r dist/. .vercel/output/static/
cat > .vercel/output/config.json <<'JSON'
{"version":3,"routes":[{"handle":"filesystem"},{"src":"/(.*)","dest":"/index.html"}]}
JSON
SITEMAP_URLS=$(grep -c '<url>' .vercel/output/static/sitemap.xml || echo 0)
echo "    OK ($SITEMAP_URLS URLs staged in sitemap.xml)"

echo "==> [7/8] vercel deploy --prebuilt --prod"
DEPLOY_OUTPUT=$(vercel deploy --prebuilt --prod --yes 2>&1)
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://dist-[a-z0-9]+-ok123dung1s-projects\.vercel\.app' | head -1)
if [[ -z "$DEPLOY_URL" ]]; then
  echo "FAIL: could not extract deployment URL from vercel deploy output:"
  echo "$DEPLOY_OUTPUT"
  exit 1
fi
echo "    OK: $DEPLOY_URL"

echo "==> [8/8] Verify deployed bundle has env baked + alias swung to new deploy"
sleep 5  # wait for CDN propagation
DEPLOYED_BUNDLE=$(curl -s "$DEPLOY_URL/" | grep -oE '/assets/index-[A-Za-z0-9_-]+\.js' | head -1)
if [[ -z "$DEPLOYED_BUNDLE" ]]; then
  echo "FAIL: could not fetch bundle filename from $DEPLOY_URL/"
  exit 1
fi
DEPLOYED_BUNDLE_CONTENT=$(curl -s "$DEPLOY_URL$DEPLOYED_BUNDLE")
if ! echo "$DEPLOYED_BUNDLE_CONTENT" | grep -q "$SUPABASE_URL_FRAGMENT"; then
  echo "FAIL: deployed bundle $DEPLOY_URL$DEPLOYED_BUNDLE missing Supabase URL"
  echo "       → site will be blank. DO NOT proceed with alias swap."
  exit 1
fi
if ! echo "$DEPLOYED_BUNDLE_CONTENT" | grep -q "$SUPABASE_KEY_PREFIX"; then
  echo "FAIL: deployed bundle $DEPLOY_URL$DEPLOYED_BUNDLE missing publishable key"
  exit 1
fi
echo "    OK (deployed bundle has env baked)"

echo ""
echo "==> rokdbot.com production verify (alias auto-swung):"
sleep 5
PROD_BUNDLE=$(curl -s "https://rokdbot.com/" | grep -oE '/assets/index-[A-Za-z0-9_-]+\.js' | head -1)
PROD_HAS_URL=$(curl -s "https://rokdbot.com$PROD_BUNDLE" | grep -c "$SUPABASE_URL_FRAGMENT" || echo 0)
PROD_SITEMAP_URLS=$(curl -s "https://rokdbot.com/sitemap.xml" | grep -c '<url>' || echo 0)
echo "    Bundle: $PROD_BUNDLE"
echo "    Has Supabase URL baked: $([ "$PROD_HAS_URL" -gt 0 ] && echo YES || echo NO)"
echo "    Sitemap URLs: $PROD_SITEMAP_URLS"

if [[ "$PROD_HAS_URL" -gt 0 ]]; then
  echo ""
  echo "==> SUCCESS: rokdbot.com deployed safely"
  exit 0
else
  echo ""
  echo "==> WARN: alias may not have swung yet. Wait 30s and recheck:"
  echo "    curl -s https://rokdbot.com/ | grep -oE '/assets/index-[A-Za-z0-9_-]+\\.js'"
  exit 0
fi
