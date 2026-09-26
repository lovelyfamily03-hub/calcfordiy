# CalcForDIY — Master Development Roadmap & Agent Instructions

**Attention All AI Agents:** Read this entire document to understand the context, architecture, rules, and roadmap for the `calcfordiy.com` project before making any changes.

*Goal: Stable traffic, 100 calculators, and monetization within 2 months.*
*Last updated: September 19, 2026*

---

## 🛑 STRICT RULES FOR ALL AGENTS
1. **ZERO CONFIRMATION BIAS & FACT-BASED RESEARCH:** Never offer confirmation bias, shallow shortcuts, over-confident promises, or urban myths. Every plan of action, technical analysis, or SEO proposal MUST be grounded in primary authoritative documentation (Google Search Quality Evaluator Guidelines, Search Central docs, official AdSense policies, and building codes like IRC/NEC/TCNA). CalcForDIY is a respectable engineering site — everything built must be above reproach.
2. **New Calculators:** Whenever you create a new calculator page in `src/pages/calculators/`, you MUST ALWAYS add a link to it in BOTH of the following directory arrays:
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

## CURRENT STATUS & 100-CALCULATOR GOAL
- **Live site:** calcfordiy.com
- **Stack:** Astro + Tailwind, Cloudflare Pages, GitHub
- **Total Pages Live:** 167 pages (338 static route outputs built)
- **Calculators live:** 111 calculators live (Target of 100 Calculators ACHIEVED & SURPASSED ✅)
- **SEO Guides live:** 21 guides (`src/pages/guides/`)
- **Project Workflow Hubs live:** 15 hubs (`src/pages/projects/`)
- **Field Journal Case Studies live:** 9 in-depth case studies (`src/pages/journal/`)
- **AdSense Status:** All 4 phases of Hardened E-E-A-T Quality Plan deployed. 0 broken links verified across all 167 HTML pages. AdSense crawl buffer elapsed. Site is 100% READY for dashboard resubmission ("Request Review").
- **robots.txt:** Cloudflare Managed robots.txt is OFF. Origin `public/robots.txt` handles all crawl rules — allows search engines, blocks AI training bots (GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, Amazonbot, meta-externalagent).
- **GSC Status:** 167 pages indexed/crawlable, zero manual actions. Ranking in Top 10–20 for competitive long-tail terms (`how many boxes of laminate flooring do i need calculator` - Pos 9.0, `postcrete calculator` - Pos 20.0).

---

## 🏆 COMPETITIVE MOATS & DIFFERENTIATORS

- `[x]` **Status**: Wave 4 Expansion Complete (111 Live Interactive Calculators + 15 Project Workflow Hubs + 21 SEO Guides + 9 Journal Case Studies).
- `[x]` **Moat 1: Dynamic SVG Visual Cut & Layout Diagrams** — 15 live interactive vector diagrams (Stair Stringers, Miter Saw Protractor, Retaining Wall, Paver Layers, Rebar Grid, Framing Studs).
- `[x]` **Moat 2: One-Click `📋 Copy Shopping List` Button** — Global clipboard handler auto-injecting formatted material takeoffs into results cards.
- `[x]` **Moat 3: Dual "DIY Material Cost" vs "Contractor Installed Cost" Toggle** — Light cost estimator benchmarking DIY material prices against turnkey contractor quotes with regional multipliers (COMPLETE ✅).
- `[x]` **Moat 4: Project Workflow Hubs** — Interactive multi-step project flows under `/projects/` guiding users through 4–5 sequential calculators per project (COMPLETE ✅ 15 of 15 Live).
- `[x]` **Moat 5: Embeddable Calculator Widget Engine** — Auto-injected `< / > Embed` button across all tools for do-follow backlink generation.
- `[x]` **E-E-A-T & Trust Signal Hardening** — Auto-injected verification badges, IRC/TCNA methodology links (`/methodology`), privacy DART policy (`/privacy`), contact email, and Content-Signal policy (COMPLETE ✅).

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

## PHASE 5 — PATH TO 100 CALCULATORS & GSC INSIGHTS

Target: **78 Live Tools → 100 Flagship Calculators** (+22 New Tools)

### 📊 Google Search Console Insights & Validations
- **Ranking in Top 10-20**: `how many boxes of laminate flooring do i need calculator` (Pos 9.0), `how much thinset mortar do i need` (Pos 14.0), `concrete slab rebar calculator` (Pos 16.0), `square yard calculator carpet` (Pos 16.0), `postcrete calculator` (Pos 20.0), `how many garage lights do i need for a 20x20 space?` (Pos 18.0).
- **High-Intent GSC Enhancements Deployed (COMPLETE ✅)**:
  - `laminate-flooring`: Added Instant Sq Ft to Box Count Converter, brand carton presets (Pergo, LifeProof, Mohawk, TrafficMaster), attic stock calculation, and reference table.
  - `carpet`: Added bidirectional Sq Ft ⇄ Sq Yd converter, 12-ft/15-ft broadloom roll cut math, $/sq yd ⇄ $/sq ft pricing calculator, and lookup table.
  - `recessed-lights-garage`: Added quick presets (`20x20 Garage`, `24x24 Workshop`, `32x24 3-Car`), calibrated IES LP-2 standard foot-candles (20–75 FC), 20x20 layout guide, and symmetrical grid visualizer.
- **Draft Tools Validated by Real Search Traffic**: GSC logged explicit searches for `tyvek house wrap calculator` (Pos 80.0) and `trestlewood calculator` (Pos 80.0).

---

### 🚀 100-Calculator Expansion Queue

#### Immediate Draft Batch (#79 – #81 - COMPLETE ✅)
- `[x]` **#79 — Countersink Depth & Screw Pilot Hole Calculator** (`/calculators/countersink-depth`) — ASME B18.6.1 & ISO 10642 82°/90°/100° chamfer plunge depth, shank clearance, plug counterbores.
- `[x]` **#80 — Tyvek® & House Wrap Material Takeoff Calculator** (`/calculators/tyvek-house-wrap`) — IRC R703.2 WRB roll coverage, 6" shingle-lap overlap, acrylic seam tape, plastic cap fasteners.
- `[x]` **#81 — Trestlewood & Reclaimed Siding Calculator** (`/calculators/trestlewood-siding-lumber`) — Linear feet to board feet (BDFT) conversions for wedgelap, shiplap, and barnwood siding with 15%–25% waste.

#### GSC-Discovered Niche Calculators (#82 – #86 - COMPLETE ✅)
- `[x]` **#82 — Cascadia Rainscreen & Wall Clip Calculator** (`/calculators/cascadia-clip`) — GSC Query: `cascadia clip calculator`. Fiberglass thermal isolation clips, dead load/wind load shear capacity.
- `[x]` **#83 — Self-Leveling Underlayment (SLU) & Deck Mud Calculator** (`/calculators/self-leveling-underlayment`) — GSC Queries: `self leveling calculator`, `deck mud calculator square feet`. 50 lb bags for 1/8"–1" pours & 4:1 mud beds.
- `[x]` **#84 — DRIcore® Subfloor & Tile Leveling Clip Calculator** (`/calculators/dricore-subfloor`) — GSC Query: `dricore subfloor calculator`. 2x2 / 2x4 OSB basement panels & tile clip leveling spacing.
- `[x]` **#85 — Epoxy Moisture Vapor Barrier (MVB) Calculator** (`/calculators/moisture-vapor-barrier`) — GSC Query: `moisture vapor barrier calculator`. MVT emissions → 2-part epoxy coverage sq ft/gal.
- `[x]` **#86 — Ice & Water Shield Roofing Roll Calculator** (`/calculators/ice-water-shield`) — GSC Query: `ice and water shield calculator`. Eave line 24" warm wall overlap + valley rolls.

#### Carpentry & Building Envelope (#87 – #89 - COMPLETE ✅)
- `[x]` **#87 — Pergola & Gazebo Lumber Estimator** (`/calculators/pergola-lumber`) — Post size (4x4 vs 6x6), double beam plies, rafter spacing, shade purlins, Simpson Strong-Tie hardware.
- `[x]` **#88 — OSB & Plywood Sheathing Calculator** (`/calculators/osb-sheathing`) — 4x8 panel count, 1/8" expansion gaps, IRC R602.3 8d nail schedule.
- `[x]` **#89 — IRC Egress Window Rough Opening Calculator** (`/calculators/egress-window`) — IRC Section R310 (5.7 sq ft net opening, 44" max sill height, well sq ft).

#### Electrical, Energy & HVAC (#90 – #91 - COMPLETE ✅)
- `[x]` **#90 — Blown-In Attic Insulation Bag Estimator** (`/calculators/attic-insulation`) — R-30 to R-60 target upgrade, cellulose vs fiberglass bag tables.
- `[x]` **#91 — Extension Cord Wire Gauge & Voltage Drop Calculator** (`/calculators/extension-cord-drop`) — 14 AWG / 12 AWG / 10 AWG voltage drop over 25–100 ft runs for 15A/20A motor loads.
- `[ ]` **#92 — Low-Voltage Landscape Lighting Transformer & Wire Calculator** (`/calculators/landscape-lighting-wire`) — 12V/15V taps, wattage headroom, 12/2 vs 10/2 gauge drop.

#### Kitchen, Bath & Tile (#93 – #95)
- `[ ]` **#93 — Kitchen Backsplash Tile & Mosaic Takeoff** (`/calculators/kitchen-backsplash-tile`) — Outlet box subtractions, diagonal/herringbone waste, grout bags.
- `[ ]` **#94 — Bathroom Floor Tile & Underlayment Estimator** (`/calculators/bathroom-floor-tile`) — CBU backer board / DITRA uncoupling membrane rolls.
- `[ ]` **#95 — Countertop Square Footage & Overhang Support Calculator** (`/calculators/countertop-sqft`) — Granite/quartz slab area, corbel steel bracket spacing (>10" overhang).

#### Outdoor, Masonry & Landscaping (#96 – #100)
- `[ ]` **#96 — Sod Pallet & Lawn Roll Estimator** (`/calculators/sod-pallet`) — Pallets (450–500 sq ft), starter fertilizer bags, topsoil layer.
- `[ ]` **#97 — Drip Irrigation Emitter & Line Pressure Drop Calculator** (`/calculators/drip-irrigation`) — GPH emitter count per plant zone, 1/2" main tubing max run length.
- `[ ]` **#98 — Topsoil & Lawn Dressing Overseeding Calculator** (`/calculators/topsoil-lawn-dressing`) — Cubic yards for 1/4"–1/2" topdressing, seed lbs per 1,000 sq ft.
- `[ ]` **#99 — Split-Rail & Post-and-Rail Fence Estimator** (`/calculators/split-rail-fence`) — Line/corner/end posts, 2-rail vs 3-rail lumber, concrete footings.
- `[ ]` **#100 — Window Replacement Energy & HVAC Savings Calculator** (`/calculators/window-replacement-energy`) — Single pane U-1.0 → double pane Low-E U-0.28 × HDD → annual savings.

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

## SEO & INDEXING STATUS (Sep 25, 2026)
- **Crawl & Indexing Health**: 84 pages indexed in GSC, 252 pages in "Discovered - currently not indexed" crawl queue.
- **GSC Technical Audit & Fixes Deployed (COMPLETE ✅)**:
  - *Page with redirect (78 pages)*: Standardized 1,345 internal URLs, category anchors, and BreadcrumbList schema items across 298 files to strictly end with trailing slash (`/`), eliminating internal 308/301 redirects and crawl budget waste.
  - *Alternate page with proper canonical tag (65 pages)*: Apex domain `https://calcfordiy.com/` confirmed as canonical source; edge redirection rule configured in Cloudflare to permanently 301-redirect `www.calcfordiy.com/*` to apex.
  - *Legacy 404s (11 pages)*: 301 redirect mapping in `public/_redirects` active and validated by Googlebot.
- **Hardened AdSense Re-Submission Strategy**: Rather than mass-padding calculators with templated 500-word boilerplate (which risks Google's Scaled Content Abuse penalty), we are executing a 4-Phase Quality Plan:
  1. *Domain Trust (E-E-A-T - COMPLETE ✅)*: Explicit AdSense DART cookie privacy policy (`/privacy`), dedicated Calculation Methodology page (`/methodology`), and localized AHJ disclaimers.
  2. *Tiered Flagship Enhancement (COMPLETE ✅)*: Deepened top 10 core calculators (`concrete-slab`, `wall-framing`, `shower-tile`, `asphalt-shingles`, `ev-charger-wiring`, `retaining-wall`, `deck-joist-span`, `french-drain`, `stair-stringer`, `mini-split-sizing`) with explicit math equations, transparent default constants, and tool-specific job-site FAQs.
  3. *Homepage & Navigation (COMPLETE ✅)*: Focused 150-word intro, project paths, and site footer navigation.
  4. *Pre-Resubmission Verification (COMPLETE ✅)*: 338 static route outputs (111 calculators, 15 project hubs, 21 guides, 9 field journal case studies), clean mobile viewports, `ads.txt` verified.

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
