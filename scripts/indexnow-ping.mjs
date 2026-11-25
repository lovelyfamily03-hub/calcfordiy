import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const HOST = 'calcfordiy.com';
const PUBLIC_DIR = 'public';
const SITEMAP_PATH = 'dist/sitemap-0.xml';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function findKeyFile() {
  const entries = fs.readdirSync(PUBLIC_DIR);
  const keyFile = entries.find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
  if (!keyFile) {
    throw new Error('No 32-char hex IndexNow key file found in public/');
  }
  const key = fs.readFileSync(path.join(PUBLIC_DIR, keyFile), 'utf8').trim();
  return { key, keyLocation: `https://${HOST}/${keyFile}` };
}

function readAllSitemapUrls() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Missing ${SITEMAP_PATH}. Run npm run build first.`);
  }
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function resolveChangedUrls() {
  try {
    const out = execSync('git diff --name-only HEAD~1 -- src/pages', { encoding: 'utf8' });
    const urls = [];
    for (const rel of out.split('\n').map((s) => s.trim()).filter(Boolean)) {
      if (!rel.endsWith('.astro') || rel.endsWith('404.astro')) continue;
      if (!fs.existsSync(rel)) continue;
      const slug = rel
        .replace(/^src\/pages\//, '')
        .replace(/\/index\.astro$/, '')
        .replace(/\.astro$/, '');
      const url = slug === 'index' ? `https://${HOST}/` : `https://${HOST}/${slug}/`;
      urls.push(url);
    }
    if (urls.length > 0) return [...new Set(urls)];
  } catch {
    // Fall back cleanly if shallow history or no diff
  }
  return readAllSitemapUrls();
}

async function submitBatch(key, keyLocation, urlList) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation,
      urlList,
    }),
  });
  const body = await res.text();
  return { status: res.status, body };
}

async function main() {
  const args = process.argv.slice(2);
  const { key, keyLocation } = findKeyFile();
  let urls = [];

  if (args.includes('--all')) {
    urls = readAllSitemapUrls();
  } else {
    const urlsFlag = args.find((a) => a.startsWith('--urls='));
    if (urlsFlag) {
      urls = urlsFlag.slice('--urls='.length).split(',').map((u) => u.trim()).filter(Boolean);
    } else {
      urls = resolveChangedUrls();
    }
  }

  if (urls.length === 0) {
    console.log('No URLs to submit to IndexNow.');
    return;
  }

  for (let i = 0; i < urls.length; i += 10000) {
    const batch = urls.slice(i, i + 10000);
    const { status, body } = await submitBatch(key, keyLocation, batch);
    console.log(`IndexNow batch ${i / 10000 + 1}: HTTP ${status} (${batch.length} URLs)${body ? ' -> ' + body : ''}`);
    if (status >= 400) process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('IndexNow submission failed:', err.message);
  process.exit(1);
});
