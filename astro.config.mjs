// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** Build a deterministic map of repo-relative file path -> last commit ISO timestamp */
function getGitLastModMap() {
  const map = new Map();
  try {
    const out = execSync('git log --format=__C__%cI --name-only -- src/pages', {
      encoding: 'utf8',
      maxBuffer: 16 * 1024 * 1024,
    });
    let currentDate = null;
    for (const line of out.split('\n')) {
      if (line.startsWith('__C__')) {
        currentDate = line.slice(5).trim();
      } else if (line && currentDate && !map.has(line)) {
        map.set(line, currentDate);
      }
    }
  } catch {
    // Fallback cleanly if git history is unavailable
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