# CalcForDIY — Master Development Roadmap & Agent Instructions

**Attention All AI Agents:** Read this entire document to understand the context, architecture, rules, and roadmap for the `calcfordiy.com` project before making any changes.

*Goal: Stable traffic and monetization within 2 months.*
*Last updated: July 28, 2026*

---

## 🛑 STRICT RULES FOR ALL AGENTS
1. **New Calculators:** Whenever you create a new calculator page in `src/pages/calculators/`, you MUST ALWAYS add a link to it in BOTH of the following directory arrays:
   - `src/pages/index.astro` (The main homepage)
   - `src/pages/calculators/index.astro` (The calculators directory page)
   *Failure to update both files will result in the calculator being hidden from the user.*
2. **Calculator Content Architecture:** Every calculator page MUST follow the high-converting pillar structure:
   `H1 → 2-sentence intro → Calculator Form (keep near top for mobile UX) → Result Card → How to Use (<ol>) → Trade Best Practices & Building Codes → Behind the Math → FAQ (JSON-LD FAQPage) → Related Calculators → Safety Disclaimer Banner → Footer`
3. **Design System:** All calculators must strictly follow the UI, UX, and Schema architecture detailed in the `calculator_design_system.md` artifact.
4. **Development Server:** When starting the dev server, use background mode: `astro dev --background`. Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
5. **Disclaimer:** A universal safety disclaimer ("Measure seven times, cut once.") is globally injected into every calculator page via `Layout.astro`. Do NOT add individual disclaimers per page.
6. **GA4 Events:** `calculate_button_click` and `calculator_used` events are globally fired from `Layout.astro`. Do NOT add per-page GA event code.
7. **Contact Email:** All contact forms, mailto links, and privacy policy references must use `invictusetfortis@gmail.com`.

---

## CURRENT STATUS
- **Live site:** calcfordiy.com
- **Stack:** Astro + Tailwind, Cloudflare Pages, GitHub
- **Calculators live:** 63 calculators
- **SEO Guides live:** 9 guides (`src/pages/guides/`)
- **Project Workflow Hubs live:** 5 hubs (`src/pages/projects/`)
- **AdSense:** existing approved account, not yet added to this site
- **robots.txt:** Cloudflare Managed robots.txt is OFF. Origin `public/robots.txt` handles all crawl rules — allows search engines, blocks AI training bots (GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, Amazonbot, meta-externalagent).
- **GSC Status (Jul 28, 2026):** 73 pages indexed, no manual actions. Zero organic impressions — site is indexed but not yet ranking. Currently recovering from a brief Cloudflare robots.txt de-indexing event.

---

## 🏆 COMPETITIVE MOATS & DIFFERENTIATORS

- `[x]` **Status**: Phase 4B & Wave 1 Forum Expansion Complete (63 Live Interactive Calculators + 5 Project Workflow Hubs).
**Latest Milestone Achieved**: Built 6 Wave 1 Forum Calculators (NEC Conduit Fill, Blown Attic Insulation, Sod Pallets, Compound Miter Angles, Construction Fractions, Septic Tank Sizing). Moat 1 (15 Dynamic SVG Diagrams), Moat 2 (Copy Shopping List), and Moat 4 (5 Workflow Hubs) are 100% complete!
- `[x]` **Moat 3: Dual "DIY Material Cost" vs "Contractor Installed Cost" Toggle** — Light cost estimator benchmarking DIY material prices against turnkey contractor quotes with regional multipliers (COMPLETE ✅).
- `[x]` **Moat 4: Project Workflow Hubs** — Interactive multi-step project flows under `/projects/` guiding users through 4–5 sequential calculators per project (COMPLETE ✅).

---

## PHASE 1 — IMMEDIATE (COMPLETE ✅)
- `[x]` Fix /calculators/thinset broken link (Built full Thinset calculator)
- `[x]` Verify canonical URL shows calcfordiy.com not localhost
- `[x]` Verify sitemap-0.xml shows calcfordiy.com URLs
- `[x]` Confirm Google Analytics is firing (GA4 Realtime confirmed working)
- `[x]` Add Google Search Console property — verified
- `[x]` Submit sitemap in GSC — submitted
- `[x]` Check GSC Coverage report — 73 pages indexed, no errors
- `[x]` Fix Cloudflare Managed robots.txt conflict (was blocking Googlebot — resolved Jul 27, 2026)
- `[x]` Add GA4 engagement event tracking to fix 100% bounce rate

---

## PHASE 2 — CALCULATOR EXPANSION (COMPLETE ✅)

**Garden Cluster**
- `[x]` Mulch calculator
- `[x]` Raised bed soil calculator
- `[x]` Topsoil calculator
- `[x]` Fertilizer calculator
- `[x]` Seed spacing calculator

**Concrete & Hardscaping Cluster**
- `[x]` Concrete for fence posts
- `[x]` Concrete slab calculator
- `[x]` Quikrete bags calculator
- `[x]` Rebar calculator for slab
- `[x]` French Drain Calculator
- `[x]` Retaining Wall Block & Geogrid Calculator
- `[x]` Paver Base Gravel & Sand Calculator (Phase 4A)

**Floor Cluster**
- `[x]` Subfloor
- `[x]` Hardwood Flooring
- `[x]` Laminate Flooring
- `[x]` Carpet
- `[x]` Underlayment

**Paint Cluster**
- `[x]` Paint calculator for a room
- `[x]` Paint calculator for textured walls
- `[x]` Exterior paint calculator

**Lighting Cluster**
- `[x]` Recessed lighting for living room
- `[x]` Recessed lighting for hallway
- `[x]` Recessed lighting for kitchen
- `[x]` Recessed lighting for bedroom
- `[x]` Recessed lighting for garage
- `[x]` Outdoor String lights
- `[x]` Outdoor Flood lights
- `[x]` Lumens & Lux Calculator
- `[x]` LED bulb savings calculator

**Wall & Drywall Cluster**
- `[x]` Wall framing stud calculator
- `[x]` Trim and molding calculator
- `[x]` Shiplap / tongue and groove
- `[x]` Wallpaper calculator
- `[x]` Drywall estimator

**Millwork & Trim Cluster (Blue Ocean 1A)**
- `[x]` Board and Batten Spacing Calculator
- `[x]` Wainscoting / Picture Frame Molding Layout
- `[x]` Coffered Ceiling Calculator
- `[x]` Stair Stringer Cut Calculator (with live SVG diagram) (Phase 4A)

**Utilities & HVAC Cluster (High CPC)**
- `[x]` Water heater operating cost calculator
- `[x]` AC operating cost calculator
- `[x]` Furnace heating cost calculator
- `[x]` Generator size calculator
- `[x]` Mini-Split Sizing Calculator (Blue Ocean 1C)
- `[x]` Tankless Water Heater Sizing Calculator (Blue Ocean 1C)
- `[x]` EV Charger Circuit & Wire Gauge Calculator (Phase 4A) — NEC 80% rule, AWG sizing, voltage drop

**Structural, Roofing & Fencing (Phase 4B)**
- `[x]` Deck boards calculator
- `[x]` Asphalt Shingle Roofing Estimator (`/calculators/asphalt-shingles`) (Phase 4B)
- `[x]` Roof Pitch & Rafter Cut Calculator (`/calculators/roof-pitch-rafter`) (Phase 4B)
- `[x]` Fence Picket & Board Calculator (`/calculators/fence-pickets`) (Phase 4B)
- `[x]` Deck Joist Span & Beam Sizing Calculator (`/calculators/deck-joist-span`) (Phase 4B)

**Seasonal Cluster**
- `[x]` Christmas tree lights calculator
- `[x]` House exterior Christmas lights calculator
- `[x]` Christmas & Halloween lights/decor outlet load calculator

---

## PHASE 3 — SEO CONTENT GUIDES (COMPLETE ✅)
Path: `src/pages/guides/`
Format: `H1 → intro → calculator CTA → step-by-step → FAQ → related calculators`
All guides include JSON-LD schema: `Article`, `FAQPage`, `BreadcrumbList`.

- `[x]` "How Much Mulch Do I Need for Garden Beds?"
- `[x]` "How Much Soil to Fill a 4x8 Raised Bed?"
- `[x]` "How Much Concrete for Fence Posts?"
- `[x]` "How Many Bags of Grout for a Tile Shower?"
- `[x]` "What Waste Factor Should I Use for Laminate Flooring?"
- `[x]` "How Many Recessed Lights for a 2-Car Garage?" (staggered date: Jul 12, 2026)
- `[x]` "How Much Tile Do I Need for a Shower?" (staggered date: Jul 19, 2026)
- `[x]` "How Many Boxes of Hardwood Flooring Do I Need?" (staggered date: Jul 26, 2026)
- `[x]` "How Many Studs for a Wall?"

---

## PHASE 4 — MONETIZATION (In Progress)
**Google AdSense**
- `[ ]` Add calcfordiy.com to existing AdSense account (`invictusetfortis@gmail.com`)
- `[ ]` Paste AdSense auto-ads code into Layout.astro head
- `[ ]` Wait for site-level approval
- `[ ]` After approval: manually place ads (Unit 1: below results, Unit 2: mid-content, Unit 3: above related links)

**Future Monetization Options (Month 3+)**
- `[ ]` Amazon affiliate links — link to specific products in calculators
- `[ ]` Home Depot affiliate program
- `[ ]` Carbon Ads

---

## PHASE 5 — EXPANSION CALCULATORS (Next Wave)

### Phase 4A — COMPLETE ✅
- `[x]` EV Charger Circuit & Wire Gauge Calculator (`/calculators/ev-charger-wiring`)
- `[x]` Stair Stringer Cut Calculator with SVG diagram (`/calculators/stair-stringer`)
- `[x]` Paver Base Gravel & Sand Calculator (`/calculators/paver-base-sand`)

### Phase 4B — Roofing, Fencing & Outdoor Living (COMPLETE ✅)
- `[x]` Asphalt Shingle Roofing Estimator — squares, pitch multiplier, ridge caps, underlayment (CPC: $8–$20)
- `[x]` Roof Pitch & Rafter Cut Calculator — plumb cut angle, bird's mouth notch, rafter length (SVG diagram)
- `[x]` Fence Picket & Board Calculator — pickets, posts, rails, gate posts, spacing gaps
- `[x]` Deck Joist Span & Beam Sizing Calculator — IRC Table R507, 2x6–2x12 sizing
- `[ ]` Pergola & Gazebo Lumber Estimator — post sizes, beam spans, rafter spacing, hardware

### Phase 4C — Energy, Insulation & Smart Home
- `[ ]` Attic & Wall Insulation ROI Calculator — R-value upgrade, blown-in vs batt bags, payback period (CPC: $6–$14)
- `[ ]` Solar Panel Array Estimator — kWh usage → panel count → system size (CPC: $10–$25)
- `[ ]` Window Replacement Energy Savings Calculator — double vs triple pane, annual HVAC savings
- `[ ]` Electrical Subpanel Sizing Calculator — 60A–125A, NEC Article 220 demand loads
- `[ ]` Landscape Lighting Wire & Transformer Calculator

### Phase 4D — Kitchen, Bath & Interior
- `[ ]` Kitchen Backsplash Tile Calculator — different waste factors from shower, high intent buyers
- `[ ]` Bathroom Floor Tile Calculator — simpler than shower, high search volume
- `[ ]` Countertop Square Footage Calculator — L-shaped, peninsula, bar overhang support

### Phase 4E — Landscaping & Irrigation
- `[ ]` Sod & Lawn Calculator — pallets (450–500 sq ft each), topsoil starter
- `[ ]` Drip Irrigation Emitter Calculator — emitter count, flow rate, pressure loss
- `[ ]` Fence Post Spacing Calculator — equal spacing math with gate openings

### Phase 4F — Quick Wins (Small effort, solid traffic)
- `[ ]` Extension Cord Gauge & Length Calculator — companion to outlet load calc (high CPC)
- `[ ]` Caulk & Sealant Coverage Calculator — linear feet per tube
- `[ ]` OSB / Sheathing Calculator — exterior wall & roof decking sq ft to panel count
- `[ ]` Split Rail Fence Calculator — very specific, near-zero modern competition
- `[ ]` Egress Window Rough Opening Calculator — IRC Section R310, well/cover sizing

---

## SITE FEATURES STATUS
- `[x]` Print/PDF button on results (global via `window.print()`)
- `[x]` Universal safety disclaimer banner on all calculator pages (Layout.astro)
- `[x]` Calculator search bar on homepage
- `[x]` "Compare two options" mode (AC and Furnace Cost calculators)
- `[x]` GA4 engagement event tracking (`calculator_used`, `calculate_button_click`)
- `[x]` Live SVG cut diagram (Stair Stringer Calculator)
- `[ ]` One-click `📋 Copy Shopping List` button on result cards
- `[ ]` Dual "DIY Material Cost" vs "Contractor Installed Cost" toggle
- `[ ]` Project Workflow Hubs ("Yard Drainage Hub", "Deck Building Hub", "Basement Finishing Hub")
- `[ ]` "Email my results"
- `[ ]` Dark mode toggle
- `[ ]` Unit switcher (metric/imperial)
- `[ ]` IndexNow protocol for faster Bing/Google re-crawl signals

---

## PHASE 3 (NEXT) — ADDITIONAL SEO GUIDES TO WRITE
Path: `src/pages/guides/` — Use staggered publish dates when committing.
- `[ ]` "How Many Fence Pickets Do I Need?"
- `[ ]` "How Many Roofing Squares Do I Need?"
- `[ ]` "How Much Blown-In Insulation Do I Need for My Attic?"
- `[ ]` "What Size Deck Joist Do I Need?"
- `[ ]` "How Much Sod Do I Need?"
- `[ ]` "How Much Backsplash Tile Do I Need for a Kitchen?"

---

## SEO & INDEXING STATUS (Jul 28, 2026)
- **Root cause of zero impressions:** Cloudflare "Managed robots.txt" was prepending `Content-Signal` lines and duplicate `User-agent: *` blocks to our origin robots.txt, which caused Google to de-index the site.
- **Fix applied Jul 27, 2026:** Disabled Cloudflare Managed robots.txt. Origin `public/robots.txt` now serves clean directives. Cloudflare cache purged.
- **Current state:** 69 pages indexed, no manual penalty, no noindex tags. Site is awaiting Google re-crawl cycle to restore rankings (typically 2–4 weeks post de-index).
- **Recovery actions taken:** Sitemap resubmitted, manual "Request Indexing" done for key pages, GA4 bounce rate fixed via engagement events.

---

## AGENT TASK DELEGATION GUIDE
- **Content Agent (local LLM):** Chunk 2 content, Supporting articles (`guides/`), FAQ sections, Meta descriptions.
- **Coding Agent (Antigravity):** New calculator pages (formulas + input list), Bug fixes, New site features.
- **Research Agent:** Keyword research, Competitor analysis, Finding primary sources for formulas.

**Always verify before publishing:**
- Calculator math against a known reference
- Canonical URL is calcfordiy.com not localhost
- `noindex` removed from completed pages
- Internal links point to live pages not stubs
- New calculator added to BOTH `src/pages/index.astro` AND `src/pages/calculators/index.astro`
