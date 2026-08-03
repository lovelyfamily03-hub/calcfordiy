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

### 🌊 Wave 2: Phase 4C–4F Masterplan Calculators
- [ ] **Pergola & Gazebo Lumber Estimator** (`/calculators/pergola-lumber`) — Post size, beam spans, rafter spacing, shade slats, hardware.
- [ ] **Whole-House Fan Sizing Calculator** (`/calculators/whole-house-fan`) — CFM per sq ft, attic net free vent area (NFVA).
- [ ] **Radiant Floor Heating Loop Calculator** (`/calculators/radiant-floor-heating`) — PEX tubing feet, loop counts, manifold ports, heat output (BTU).
- [ ] **Solar Panel & Battery Storage Estimator** (`/calculators/solar-battery-sizing`) — Daily kWh consumption, panel count, battery Ah capacity.

---

## 3. 📝 SEO Content & Guide Expansion (`/guides/`)

- [ ] `"How Many Fence Pickets Do I Need for 100 Feet?"` (`/guides/how-many-fence-pickets`)
- [ ] `"How Many Squares of Shingles Do I Need for a 2,000 Sq Ft Roof?"` (`/guides/how-many-roofing-squares`)
- [ ] `"How Much Blown-In Insulation Do I Need for My Attic?"` (`/guides/how-much-attic-insulation`)
- [ ] `"What Size Conduit Do I Need for 3 Wires?"` (`/guides/conduit-size-for-3-wires`)
- [ ] `"How Far Can a 2x8 Deck Joist Span?"` (`/guides/how-far-can-2x8-deck-joist-span`)

---

## 4. 💵 Monetization & AdSense Launch

- [ ] Add `calcfordiy.com` to existing approved AdSense account (`invictusetfortis@gmail.com`).
- [ ] Paste AdSense script in `Layout.astro`.
- [ ] Place manual high-RPM ad units:
  - Unit 1: Directly below Calculator Result Card.
  - Unit 2: Mid-article between "How to Use" and "Building Codes".
  - Unit 3: Above Related Calculators section.

---

## 5. ⚙️ Technical Polish & UX Enhancements

- [ ] **Instant Live Search Filter**: Add real-time keyword filter input to `/calculators/index.astro`.
- [ ] **Clipboard GA4 Event Tracking**: Track `copy_shopping_list` button clicks in GA4.
- [ ] **Mobile Input Keypad Polish**: Verify `inputmode="decimal"` on all numeric input fields.
