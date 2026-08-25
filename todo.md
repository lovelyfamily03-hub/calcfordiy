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

### 🗺️ Moat 4: Project Workflow Hubs (14 of 14 COMPLETE ✅)
- [x] Deck Construction Hub (`/projects/deck-building`)
- [x] Yard Drainage & Landscaping Hub (`/projects/yard-drainage`)
- [x] Basement & Room Finishing Hub (`/projects/basement-finishing`)
- [x] Bathroom & Shower Remodel Hub (`/projects/bathroom-remodel`)
- [x] Interior Accent Wall & Trim Hub (`/projects/room-accent-wall`)
- [x] Roofing & Exterior Siding Hub (`/projects/roofing-exterior`)
- [x] Outdoor Patio & Hardscaping Hub (`/projects/outdoor-patio`)
- [x] Garage Workshop & EV Electrical Hub (`/projects/garage-ev-workshop`)
- [x] Off-Grid Solar & Backup Power Hub (`/projects/offgrid-solar-backup`)
- [x] Pergola & Outdoor Living Patio Hub (`/projects/pergola-outdoor-living`)
- [x] Whole-Home Energy & HVAC Efficiency Hub (`/projects/hvac-energy-efficiency`)
- [x] Shed & Workshop Construction Hub (`/projects/shed-building`)
- [x] Basement Waterproofing & Drainage Hub (`/projects/basement-waterproofing`)
- [x] Hardwood & Laminate Flooring Makeover Hub (`/projects/flooring-installation`)

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

### 🌊 Wave 2: Phase 4C–4F Masterplan Expansion Calculators (COMPLETE ✅ 68 Live Calculators)
- [x] **Pergola & Gazebo Lumber Estimator** (`/calculators/pergola-lumber`) — Post size (4x4 vs 6x6), double beam plies, rafter spacing, shade purlins, concrete footings, Simpson Strong-Tie hardware schedule, and live SVG elevation diagram.
- [x] **Electrical Subpanel Sizing Calculator** (`/calculators/subpanel-sizing`) — Subpanel ampacity (60A to 125A), feeder cable gauge (Aluminum SER vs Copper THHN), NEC Article 220 demand loads, voltage drop, separate neutral/ground bar rules, and live SVG schematic.
- [x] **Whole-House Fan Sizing Calculator** (`/calculators/whole-house-fan`) — Fan CFM, air changes per hour (ACH), HVI 1:750 Net Free Vent Area (NFVA sq ft), soffit vs ridge vent schedule, and live SVG airflow diagram.
- [x] **Radiant Floor Heating Loop Calculator** (`/calculators/radiant-floor-heating`) — PEX-a tubing linear feet, 300 ft maximum loop counts, manifold port sizes, heat output (BTU/hr), water supply temps, and live SVG hydronic schematic.
- [x] **Solar Panel & Battery Storage Estimator** (`/calculators/solar-battery-sizing`) — Solar panel count (400W panels), system kW DC size, LiFePO4 battery capacity (kWh/Ah), hybrid inverter wattage, annual dollar savings, and live SVG solar PV schematic.

### 🚀 Wave 3: Advanced Trade & Plumbing Expansion Calculators (COMPLETE ✅ 73 Live Calculators)
- [x] **Sump Pump Sizing & Flow Rate Calculator** (`/calculators/sump-pump-sizing`) — GPH flow rate, Total Dynamic Head (TDH), horsepower (1/3, 1/2, 3/4 HP), battery backup runtime, and live SVG basin elevation schematic.
- [x] **Plumbing Pipe Slope & Sewer Fall Calculator** (`/calculators/pipe-slope`) — Total elevation fall in inches, IPC Section 704.1 code slope rates (1/8" vs 1/4" per ft), trench invert depth, and live SVG cross-section diagram.
- [x] **Drywall Mud & Joint Compound Calculator** (`/calculators/drywall-mud`) — 4.5 gal buckets (all-purpose vs lightweight topping), joint tape rolls, quick-set hot mud bags, corner beads, and live SVG 3-coat joint anatomy schematic.
- [x] **Firewood Cord & Wood Stove Heat Calculator** (`/calculators/firewood-cord`) — Full cords (128 cu ft), face cords/ricks, Million BTU energy output by wood species (Oak, Hickory, Maple, Ash, Pine), seasoned weight, and live SVG firewood rick schematic.
- [x] **Polymeric Sand & Paver Joint Calculator** (`/calculators/polymeric-sand`) — 50 lb bags of polymeric sand by paver dimensions and joint width (1/8" to 1"), compaction procedures, and live SVG paver joint cross-section.

### 🚀 Wave 4: High-Demand Carpentry, Hardscape & Insulation Calculators (COMPLETE ✅ 78 Live Calculators)
- [x] **Crown Molding Miter & Bevel Calculator** (`/calculators/crown-molding`) — Exact compound miter and bevel angles for 90°, 135° bay windows, 4-direction cut guide, and live SVG miter saw protractor gauge.
- [x] **Paver Walkway & Stepping Stone Calculator** (`/calculators/paver-walkway`) — Paver units, 4" crushed stone base tons, 1" bedding sand, polymeric sand, snap-edge restraints, stepping stone stride spacing, and live SVG cross-section.
- [x] **Spray Foam Insulation Calculator** (`/calculators/spray-foam-insulation`) — Board feet volume, 200/600 bd ft canister kits, closed-cell (R-6.7/in) vs open-cell (R-3.7/in), Class II vapor barrier depth, and live SVG stud bay cavity diagram.
- [x] **Sonotube Concrete Pier Calculator** (`/calculators/sonotube-concrete`) — Round tube diameters (8" to 24"), frost depth, concrete cubic yards, 60lb/80lb bag counts, rebar vertical dowels, flared bell base footings, and live SVG pier diagram.
- [x] **Gravel Driveway & Crushed Stone Calculator** (`/calculators/gravel-driveway`) — 3-layer aggregate system (#3 ballast rock, #57 stone, crusher run / DGA), total tonnage, cubic yards, tri-axle dump truck loads, geotextile fabric, and live SVG crowned driveway profile.

### 🏆 Moat 5: Embeddable Calculator Widget Engine (COMPLETE ✅)
- [x] Auto-injected `< / > Embed on Your Website` button and modal across all 78 calculators with 1-click HTML iframe generator and permanent do-follow canonical backlink attribution.

---

## 3. 📝 SEO Content & Guide Expansion (`/guides/` - COMPLETE ✅ 21 Live Guides)

- [x] `"How Many Squares of Shingles Do I Need for a 2,000 Sq Ft Roof?"` (`/guides/how-many-roofing-squares`)
- [x] `"How Many Fence Pickets Do I Need for 100 Feet?"` (`/guides/how-many-fence-pickets`)
- [x] `"How Much Blown-In Insulation Do I Need for My Attic?"` (`/guides/how-much-attic-insulation`)
- [x] `"What Size Conduit Do I Need for 3 Wires?"` (`/guides/conduit-size-for-3-wires`)
- [x] `"How Far Can a 2x8 Deck Joist Span?"` (`/guides/how-far-can-2x8-deck-joist-span`)
- [x] `"What Gauge Wire for a 50-Amp EV Charger?"` (`/guides/what-gauge-wire-for-50-amp-ev-charger`)
- [x] `"How Many Bags of Concrete for a 4x4 Fence Post?"` (`/guides/how-many-bags-of-concrete-for-4x4-post`)
- [x] `"How to Calculate Soffit & Attic Ventilation (1:300 Rule)"` (`/guides/how-to-calculate-soffit-ventilation`)
- [x] `"How Much Tile Do I Need for a Standard Shower?"` (`/guides/how-much-tile-for-standard-shower`)
- [x] `"Ice & Water Shield Code Requirements & Sizing"` (`/guides/ice-and-water-shield-requirements`)
- [x] `"How to Measure & Cut Crown Molding (Miter & Bevel Chart)"` (`/guides/how-to-cut-crown-molding`)
- [x] `"How Many Bags of Concrete for a Sonotube (8, 10, 12, 16 In)?"` (`/guides/how-many-bags-of-concrete-for-sonotube`)
- [x] `"How Deep Should a Gravel Driveway Be? (3-Layer Guide)"` (`/guides/how-deep-should-a-gravel-driveway-be`)

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

### Phase 4: Pre-Resubmission Checklist & Organic Crawl Cycle (COMPLETE ✅)
- [x] Confirmed all 103 URLs return 200 OK with zero broken internal links across the entire built site.
- [x] Verified mobile viewport rendering and numeric keypad inputs across all tools.
- [x] Re-verified `public/ads.txt` (`ca-pub-6410565511961171`).
- [x] Added `/terms` Terms of Service page and updated `/about` to reflect 68+ live calculators.
- [x] Completed full competitive analysis against Omni Calculator, Blocklayer, and Calculator.net.
- [x] **Googlebot Re-Crawl Buffer**: Completed (over 2 weeks elapsed with active crawling on GSC).
- [x] **AdSense Dashboard Re-Submission**: Site is 100% ready for "Request Review".

---

## 5. ⚙️ Technical Polish & UX Enhancements (COMPLETE ✅)

- [x] **Pre-Calculated Coverage Lookup Tables**: Integrated static reference tables below key calculators (`concrete-slab`, `thinset`, `conduit-fill`, `wall-framing`, `asphalt-shingles`).
- [x] **Instant Live Search Filter**: Integrated real-time keyword search bar and auto-expanding category filter on `/calculators/index.astro`.
- [x] **Clipboard GA4 Event Tracking**: Added custom `copy_shopping_list` GA4 event tracking in `Layout.astro`.
- [x] **Mobile Input Keypad Polish**: Auto-injected `inputmode="decimal"` across all numeric input fields sitewide.

---

## 6. 🚀 Next Priority Development Queue (Pending Next Session)

- [ ] **E-Commerce Material Takeoff Affiliate Integration**:
  - Centralized affiliate config (`src/config/affiliates.js`) supporting Amazon Associates tag (`calcfordiy-20`) and Home Depot / Lowe's (Impact.com & CJ).
  - Context-aware retail checkout buttons below calculator takeoff results (e.g., *32 Bags of 80 lb Quikrete* → `[ View on Home Depot ]` / `[ View on Amazon ]`).
  - Required FTC affiliate disclosure banner in global footer and takeoffs.
- [ ] **Moat 6: Dual Imperial (US) ⇄ Metric (SI) Measurement Switcher**:
  - Global / per-calculator toggle between Feet/Inches/Lbs and Meters/Centimeters/kg to capture Canadian, UK, Australian, and European search volume.
- [ ] **Next Batch of Search Console Long-Tail Target Guides**:
  - `"How to Measure and Cut Crown Molding Angles (Miter & Bevel Chart)"`
  - `"How Many Watts Does a Refrigerator Use on a Generator?"`
  - `"How Much Topsoil Do I Need for a New Lawn?"`
  - `"What Size Subpanel for a Detached Garage Workshop?"`
  - `"How Many Amps Does a 3-Ton Central AC Unit Draw?"`
