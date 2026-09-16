// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://calcfordiy.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        if (url === 'https://calcfordiy.com/' || url === 'https://calcfordiy.com') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (url.endsWith('/journal/') || url.endsWith('/journal')) {
          item.changefreq = 'daily';
          item.priority = 0.95;
        } else if (url.endsWith('/calculators/') || url.endsWith('/projects/') || url.endsWith('/guides/')) {
          item.changefreq = 'daily';
          item.priority = 0.9;
        } else if (url.includes('/journal/')) {
          item.changefreq = 'weekly';
          item.priority = 0.85;
        } else if (url.includes('/calculators/') || url.includes('/projects/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (url.includes('/guides/')) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        return item;
      }
    })
  ]
});