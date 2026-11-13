// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** Build a deterministic map of repo-relative file path -> last commit ISO timestamp */
function getGitLastModMap() {
  const map = new Map();
  // Seed from committed snapshot so CI shallow clones (--depth=1) preserve historical dates
  try {
    if (fs.existsSync('src/data/sitemap-lastmod.json')) {
      const saved = JSON.parse(fs.readFileSync('src/data/sitemap-lastmod.json', 'utf8'));
      for (const [k, v] of Object.entries(saved)) {
        if (typeof v === 'string') map.set(k, v);
      }
    }
  } catch {
    // Ignore malformed snapshot and rebuild from git if available
  }

  try {
    const revCount = Number(execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim());
    if (revCount > 1) {
      const out = execSync('git log --format=__C__%cI --name-only -- src/pages', {
        encoding: 'utf8',
        maxBuffer: 16 * 1024 * 1024,
      });
      const gitMap = new Map();
      let currentDate = null;
      for (const line of out.split('\n')) {
        if (line.startsWith('__C__')) {
          currentDate = line.slice(5).trim();
        } else if (line && currentDate && !gitMap.has(line)) {
          gitMap.set(line, currentDate);
        }
      }
      for (const [k, v] of gitMap.entries()) {
        map.set(k, v);
      }
    }
  } catch {
    // Fallback cleanly to saved map when git history is unavailable
  }
  return map;
}

const lastModMap = getGitLastModMap();

function resolveSourceFile(url) {
  const pathname = new URL(url).pathname.replace(/^\/+|\/+$/g, '');
  const candidates = pathname
    ? [`src/pages/${pathname}.astro`, `src/pages/${pathname}/index.astro`]
    : ['src/pages/index.astro'];
  for (const c of candidates) {
    if (lastModMap.has(c)) return c;
    if (fs.existsSync(c)) return c;
  }
  return null;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://calcfordiy.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      serialize(item) {
        const src = resolveSourceFile(item.url);
        const lastmod = src ? lastModMap.get(src) : null;
        if (lastmod) {
          item.lastmod = lastmod;
        }
        return item;
      }
    })
  ]
});