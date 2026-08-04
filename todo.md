# CalcForDIY — Intermediate Active Task Checklist (`todo.md`)

*This file tracks all remaining tasks, features, calculators, and moats for CalcForDIY.com. Update this checklist as tasks are completed.*

---

## 1. 🏆 Competitive Moats & Differentiators

### 📐 Moat 1: Dynamic SVG Visual Cut & Layout Diagrams (COMPLETE ✅ 15 of 15 Live)
- [x] Stair Stringer Cut Diagram (`/calculators/stair-stringer`)
- [x] Board & Batten Elevation (`/calculators/board-and-batten`)
- [x] Wainscoting Picture Frame Layout (`/calculators/wainscoting-layout`)
- [x] Wall Framing Stud Elevation (`/calculators/wall-framing`)
- [x] Coffered Ceiling Grid Layout (`/calculators/coffered-ceiling`)
- [x] Rebar Mesh Grid (`/calculators/rebar`)
- [x] Roof Pitch & Rafter Bird's Mouth Notch (`/calculators/roof-pitch-rafter`)
- [x] French Drain Trench Cross-Section Diagram (`/calculators/french-drain`)
- [x] Retaining Wall Elevation & Geogrid Diagram (`/calculators/retaining-wall`)
- [x] Paver Sub-Base Cross-Section Diagram (`/calculators/paver-base-sand`)
- [x] Deck Joist Framing Plan Diagram (`/calculators/deck-joist-span`)
- [x] Fence Picket Elevation Diagram (`/calculators/fence-pickets`)
- [x] Subfloor Plywood Staggering Grid (`/calculators/subfloor`)
- [x] Recessed Lighting Ceiling Grid Diagram (`/calculators/recessed-lights-living-room`)
- [x] Shiplap Nickel-Gap Elevation Diagram (`/calculators/shiplap`)

### 📋 Moat 2: One-Click `📋 Copy Shopping List` Button (COMPLETE ✅)
- [x] Global clipboard handler in `Layout.astro` with auto-injection across all calculator result cards.

### 💰 Moat 3: Dual "DIY Material Cost" vs. "Contractor Installed Cost" Module (COMPLETE ✅)
- [x] Global RSMeans & Homewyse cost benchmarking module in `Layout.astro` auto-injected into results cards with location adjustment multipliers (-15% Rural, Base National Avg, +25% Metro) and cost distribution bar.

### 🗺️ Moat 4: Project Workflow Hubs (8 of 8 COMPLETE ✅)
- [x] Deck Construction Hub (`/projects/deck-building`)
- [x] Yard Drainage & Landscaping Hub (`/projects/yard-drainage`)
- [x] Basement & Room Finishing Hub (`/projects/basement-finishing`)
- [x] Bathroom & Shower Remodel Hub (`/projects/bathroom-remodel`)
- [x] Interior Accent Wall & Trim Hub (`/projects/room-accent-wall`)
- [x] Roofing & Exterior Siding Hub (`/projects/roofing-exterior`)
- [x] Outdoor Patio & Hardscaping Hub (`/projects/outdoor-patio`)
- [x] Garage Workshop & EV Electrical Hub (`/projects/garage-ev-workshop`)

### 🛡️ E-E-A-T & Google Sandbox Trust Signals (COMPLETE ✅)
- [x] Sitewide "Last Verified & Sourced from IRC, TCNA, NWFA & IES Standards" badge auto-injected on all calculator pages in `Layout.astro`.
- [x] Sitewide footer creator attribution & methodology links (`/about` and `/contact`).
- [x] Public contact email (`invictusetfortis@gmail.com`) and FormSubmit form live on `/contact`.
- [x] Content-Signal policy added to `public/robots.txt` (`ai-train=no, search=yes, ai-input=no`).

---

## 2. 🧮 Unbuilt High-Value Expansion Calculators

### 🚀 Wave 1: High-Search Forum Calculators (Reddit/Trade Audit - COMPLETE ✅ 63 Live Calculators)
- [x] NEC Electrical Conduit Fill & Wire Sizing Calculator (`/calculators/conduit-fill`)
- [x] Blown-In Attic Insulation Bag & R-Value Calculator (`/calculators/attic-insulation`)
- [x] Sod Pallet & Lawn Roll Calculator (`/calculators/sod-pallet`)
- [x] Compound Miter & Bevel Angle Calculator (`/calculators/compound-miter`)
- [x] Construction Tape Measure & Imperial Fraction Calculator (`/calculators/construction-fraction`)
- [x] Septic Tank & Leach Field Drain Calculator (`/calculators/septic-tank-sizing`)

### 🌊 Wave 2: Phase 4C–4F Masterplan Expansion Calculators (65 Live Calculators)
- [x] **Pergola & Gazebo Lumber Estimator** (`/calculators/pergola-lumber`) — Post size (4x4 vs 6x6), double beam plies, rafter spacing, shade purlins, concrete footings, Simpson Strong-Tie hardware schedule, and live SVG elevation diagram.
- [x] **Electrical Subpanel Sizing Calculator** (`/calculators/subpanel-sizing`) — Subpanel ampacity (60A to 125A), feeder cable gauge (Aluminum SER vs Copper THHN), NEC Article 220 demand loads, voltage drop, separate neutral/ground bar rules, and live SVG schematic.
- [ ] **Whole-House Fan Sizing Calculator** (`/calculators/whole-house-fan`) — CFM per sq ft, attic net free vent area (NFVA).
- [ ] **Radiant Floor Heating Loop Calculator** (`/calculators/radiant-floor-heating`) — PEX tubing feet, loop counts, manifold ports, heat output (BTU).
- [ ] **Solar Panel & Battery Storage Estimator** (`/calculators/solar-battery-sizing`) — Daily kWh consumption, panel count, battery Ah capacity.

---

## 3. 📝 SEO Content & Guide Expansion (`/guides/`)

- [x] `"How Many Squares of Shingles Do I Need for a 2,000 Sq Ft Roof?"` (`/guides/how-many-roofing-squares`)
- [x] `"How Many Fence Pickets Do I Need for 100 Feet?"` (`/guides/how-many-fence-pickets`)
- [ ] `"How Much Blown-In Insulation Do I Need for My Attic?"` (`/guides/how-much-attic-insulation`)
- [ ] `"What Size Conduit Do I Need for 3 Wires?"` (`/guides/conduit-size-for-3-wires`)
- [ ] `"How Far Can a 2x8 Deck Joist Span?"` (`/guides/how-far-can-2x8-deck-joist-span`)

---

## 4. 💵 Monetization & Hardened AdSense Re-Submission Plan

> **Strategic Explanation**: AdSense flagged the initial submission for *"Low Value Content"*. Rather than mass-padding calculators with 500 words of generic boilerplate (which risks Google's Scaled Content Abuse penalty), we are executing a **Hardened E-E-A-T Quality & Trust Plan** focusing on domain trust signals, explicit calculation formulas, transparent assumptions, and tool-specific job site guidance.

### Phase 1: Domain-Level Trust & Methodology (E-E-A-T Infrastructure - COMPLETE ✅)
- [x] **AdSense Privacy Policy Compliance**: Updated `/privacy` with explicit third-party vendor advertising, Google AdSense cookie collection, DART cookies, and opt-out mechanisms (`aboutads.info` & NAI).
- [x] **Calculation Methodology Page (`/methodology`)**: Built dedicated page detailing formula research, building code standards (IRC 2021/2024, TCNA, NEC, IES, NWFA), testing procedures, and density constants.
- [x] **Standardized Localized Disclaimer**: Added localized AHJ disclaimer across all tools: *"Planning estimate, not a permit-ready design or code determination. Confirm local requirements with your AHJ."*

### Phase 2: Tiered Content Enhancement for Top 10 Flagship Calculators (COMPLETE ✅)
Enhanced top 10 core tools with unique, non-templated, tool-specific technical value below the UI (keeping tools strictly above the fold):
- [x] `concrete-slab` — Explicit cubic yard math, 1.35 ton/yd³ density defaults, ACI 4" vs 6" guidelines, sub-base compaction FAQs.
- [x] `wall-framing` — Explicit stud count formula (16" o.c. + California corners + header jacks + 10% waste), sheathing layout notes.
- [x] `shower-tile` — Explicit net wall/floor area math, TCNA waste percentages by pattern (10% straight, 15% diagonal, 20% herringbone).
- [x] `asphalt-shingles` — Slope expansion multipliers (1.118 for 6/12 pitch), 3-bundle per square rule, starter/ridge caps.
- [x] `ev-charger-wiring` — NEC 80% continuous load rule (60A breaker for 48A charger), 60°C Romex NM-B vs 75°C THHN conduit specs.
- [x] `retaining-wall` — NCMA block volume math, cap stones, geogrid soil reinforcement layers, gravel backfill depth.
- [x] `deck-joist-span` — IRC Table R507.5 allowable spans, ledger flashing, fastener specs.
- [x] `french-drain` — Pipe displacement volume subtraction, 3/4" stone density, geotextile fabric envelope overlap.
- [x] `stair-stringer` — IRC Section R311.7 geometry (7-3/4" max riser, 10" min tread), 2x12 stock math, bottom step tread thickness deduction.
- [x] `mini-split-sizing` — ACCA Manual J BTU/sq ft load matrix by ceiling height, sun exposure, and insulation grade.

### Phase 3: Homepage & Navigation UX Polish (COMPLETE ✅)
- [x] **Homepage Intro & Methodology**: Added 150-word mission statement, category hubs, and planning estimate statement to `/index.astro`.
- [x] **Footer Navigation**: Verified all policy, about, contact, and methodology links are visible in global footer.

### Phase 4: Pre-Resubmission Checklist & Organic Crawl Cycle (IN PROGRESS ⏳)
- [x] Confirmed all 90 URLs return 200 OK with zero broken links or empty draft routes.
- [x] Verified mobile viewport rendering across all tools.
- [x] Re-verified `public/ads.txt` (`ca-pub-6410565511961171`).
- [ ] **Googlebot Re-Crawl Buffer**: Allowing Googlebot 1-2 weeks to naturally crawl and index updated pages, E-E-A-T methodology infrastructure, and technical calculator logic before clicking "Request Review".
- [ ] AdSense Dashboard Re-Submission (Holding off until crawl cycle completes and further site quality enhancements are deployed).

---

## 5. ⚙️ Technical Polish & UX Enhancements

- [ ] **Instant Live Search Filter**: Add real-time keyword filter input to `/calculators/index.astro`.
- [ ] **Clipboard GA4 Event Tracking**: Track `copy_shopping_list` button clicks in GA4.
- [ ] **Mobile Input Keypad Polish**: Verify `inputmode="decimal"` on all numeric input fields.
