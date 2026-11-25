# CalcForDIY Engineering & SEO Changelog

Permanent change log tracking technical SEO, UX, E-E-A-T trust hardening, Field Journal publications, and monetization-readiness updates on `calcfordiy.com`.

---

## [2026-11-24] — E-E-A-T Trust Hardening, UX Upgrades & Monetization Architecture

### 1. E-E-A-T & Zero-Deception Audit
- **`src/components/AuthorReviewer.astro`**: Replaced fictional personal credential boxes (`David Miller, PE`, `Elena Rostova, CBO`, `Marcus Vance`, `Viktor Taturevych`, `Antigravity Engineering Board`) across `258` pages with `CalcForDIY Engineering Reference` (`Standards Verified`) linking to `/methodology/`.
- **AI/Synthetic Props Cleaned (`14` Calculators)**: Cleaned `<AuthorReviewer />` props on `ice-water-shield`, `cascadia-clip`, `egress-window`, `self-leveling-underlayment`, `attic-insulation`, `countertop-sqft`, `dricore-subfloor`, `landscape-lighting-wire`, `osb-sheathing`, `pergola-lumber`, `extension-cord-drop`, `bathroom-floor-tile`, `kitchen-backsplash-tile`, `moisture-vapor-barrier`, plus `countersink-depth`. Zero calculator titles, H1s, inputs, or formulas were modified.
- **`src/components/FieldNote.astro`**: Supported both `note` and `content` props (fixing `28` previously empty boxes across guides/hubs) and replaced personal/CBO defaults with institutional `Trade Engineering Note` callouts.
- **`src/components/CommunityReviews.astro`**: Converted synthetic `★★★★★` / `98% Permit Accuracy` / savings testimonials across `150` pages into factual `Reference Application Benchmarks` (`Common Project Scenarios & Critical Takeaways`). Added domain-specific `keyTakeaway` engineering checks to the `7` project hubs that lacked them (`exterior-continuous-insulation-rainscreen`, `heat-pump-furnace-replacement`, `knockdown-texture-wall-painting`, `smart-recessed-lighting-retrofit`, `wall-to-wall-carpet-installation`, `wallpaper-accent-wall-installation`, `wood-fence-restoration-staining`).
- **`src/components/HelpfulFeedback.astro` & `src/pages/contact.astro`**: Removed hardcoded fake vote counters (`{initialYesCount}`) across `157` pages; added per-path `localStorage` vote state + real GA4 `page_helpful` event + dynamic `/contact/?page=...` formula/code issue prefill (`?sent=true` confirmation banner).
- **`src/pages/about.astro`**: Replaced the 3-person fictional advisory board with a 3-pillar `Standards & Verification Governance` breakdown (`Structural & Framing`, `Electrical & Mechanical`, `Finish & Envelope`).
- **JSON-LD & Journal Author Attribution**: Switched `90` `Person` structured-data blocks across `src/pages/guides/` (`71`) and `src/pages/journal/` (`19`) to Google Search Central-compliant `Organization` (`CalcForDIY Editorial Team`, `https://calcfordiy.com/about/`). Reattributed Journal dispatches (`index.astro`, `journal/index.astro`, and all `19` articles) to trade editorial desks and scrubbed prose persona mentions (including `anatomy-of-deck-stair-stringer-rejection-irc-r311`, `tearing-down-80-year-old-plaster-ceiling-level-5-drywall`, `the-100-amp-reality-check-ev-charger-heat-pump-subpanel`, `the-4800-dollar-sump-pump-mistake-hydrostatic-pressure`).

### 2. Above-the-Fold Homepage Finder (`src/pages/index.astro`)
- Added `#heroCalcFinder` (`#heroCalcSearch`) directly beneath the homepage masthead and above the Lead Field Dispatch, with instant client-side dropdown filtering over all `115` tools, `Enter`-to-`/calculators/?q=...` handoff, and `8` quick-launch tool chips.

### 3. Universal Calculator UX & Monetization Engine
- **`src/config/monetization.ts`**: Added typed `ADSENSE_CONFIG` (`ca-pub-6410565511961171` with empty pre-approval slot IDs) and disabled `AFFILIATE_CONFIG` placeholder (`enabled: false`).
- **`src/layouts/Layout.astro`**:
  - Fixed redundant `isCalculatorPage` check and updated verification strip date (`Last Verified: November 2026`).
  - Added header `🧰 Project List` drawer toggle (`#openProjectListBtn`) + slide-over `#projectListDrawer` backed by `localStorage['calcfordiy_project_list']` with combined checklist copy and isolated `@media print` checklist printing (`#projectPrintArea`).
  - Added collapsible `📏 Quick Metric ⇄ Imperial Converter` (`#metricHelper`) inside the top calculator banner (`m/cm/m²/m³/L ⇄ ft/in/sq ft/cu yd/gal`).
  - Mounted post-content `<AdSlot type="in-feed" ... />` below `<slot />` on calculator pages (renders zero DOM while `slotId` is empty pre-approval).
  - Upgraded global inline script: supports `#results`, `#resultCard`, and fallback metric containers; injects `.calc-utility-bar` (`Copy Shopping List`, `➕ Save to Project List`, `🔗 Share Estimate Link`, `Embed Tool`); hydrates `?c_*` query parameters and performs safe silent initial auto-calculation only when all required visible default values are populated; adds debounced (`220ms`) live updates; gates GA4 `calculate_button_click` (`e.isTrusted`) and `calculator_used` (`!window.__calcSilent`).

---

## [2026-11-24] — Field Journal Dispatch #19 (`3e6be09`)
- Published [`src/pages/journal/tankless-water-heater-gas-starvation-winter-groundwater-ifgc.astro`](file:///Users/minastirith/Documents/calcfordiy/src/pages/journal/tankless-water-heater-gas-starvation-winter-groundwater-ifgc.astro) (`IFGC Table 402.4(2)`, `42°F` winter groundwater ΔT physics, `IFGC 408.4` sediment traps, `IPC 803.1` condensate neutralization) with optimized hero image `public/images/journal/tankless-gas-pipe-starvation.jpg` (`1200×896`, `145,504` bytes).
- Wired reciprocal links across `index.astro`, `journal/index.astro`, `projects/tankless-water-heater-retrofit-gas.astro`, and `projects/tankless-water-heater-installation.astro`.
- Verified live `351/351` sitemap URLs returning `HTTP 200`.

---

## [2026-11-14] — Field Journal Dispatch #18 & Cloudflare `www` Single-Hop Fix (`050b4cc`)
- Published [`src/pages/journal/outdoor-christmas-lights-gfci-overload-nec-590.astro`](file:///Users/minastirith/Documents/calcfordiy/src/pages/journal/outdoor-christmas-lights-gfci-overload-nec-590.astro) (`NEC 590.3(B)`, `NEC 406.9(B)(1)`, `NEC Chapter 9 Table 8`, `UL 588` `210W` limits) with optimized image `public/images/journal/holiday-lights-gfci-overload.jpg` (`1200×896`, `211,935` bytes), connecting `exterior-christmas-lights`, `christmas-tree-lights`, `holiday-power-load`, `c9-vs-c7-commercial-christmas-lights-spacing`, and `exterior-holiday-lighting-safe-wiring`.
- Added Cloudflare Single Redirect rule (`Redirect www missing trailing slash` at Order `1`), collapsing both `http://www.` and `https://www.` non-slashed URLs to a single `301` hop to `https://calcfordiy.com/.../` while preserving query strings and skipping file extensions.

---

## [2026-11-13] — GSC Visibility, CWV & Crawl-Efficiency Sweep (`81ff632`, `45792cf`)
- Compressed all `48` JPEGs (`43.98 MB -> 7.96 MB`, `-81.9%`) with progressive `mozjpeg` (`q78`, keeping `>=1200px` widths) and added explicit `width`/`height` dimensions on all `<img>` tags (`0` missing).
- Added git-derived per-route ISO `<lastmod>` serialization in `astro.config.mjs` backed by committed `src/data/sitemap-lastmod.json` (preserving historical timestamps on Cloudflare shallow `--depth=1` CI clones) + `/sitemap.xml -> /sitemap-index.xml 301` in `public/_redirects`.
- Added `max-image-preview:large`, dynamic `og:image`/`ogType`, `BlogPosting` `"image"` schemas, fixed `BreadcrumbList` apex URLs (`https://calcfordiy.com/`) across `285` pages, fixed `SearchAction` `?q=` handling, removed duplicate homepage `<h1>` collision with `/journal/`, and fixed `/journal/` filter `data-group` mapping.
- Deepened all `16` thin flagship project hubs (`435–534` words each with trade/code checklists & cross-links), eliminating all `13` single-inbound pages (`0` zero-inbound / `0` single-inbound routes across the site).
