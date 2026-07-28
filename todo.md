# CalcForDIY — Intermediate Active Task Checklist (`todo.md`)

*This file tracks all remaining tasks, features, calculators, and moats for CalcForDIY.com. Update this checklist as tasks are completed.*

---

## 1. 🏆 Competitive Moats & Differentiators

### 📐 Moat 1: Dynamic SVG Visual Cut & Layout Diagrams (7 of 15 Done)
- [x] Stair Stringer Cut Diagram (`/calculators/stair-stringer`)
- [x] Board & Batten Elevation (`/calculators/board-and-batten`)
- [x] Wainscoting Picture Frame Layout (`/calculators/wainscoting-layout`)
- [x] Wall Framing Stud Elevation (`/calculators/wall-framing`)
- [x] Coffered Ceiling Grid Layout (`/calculators/coffered-ceiling`)
- [x] Rebar Mesh Grid (`/calculators/rebar`)
- [x] Roof Pitch & Rafter Bird's Mouth Notch (`/calculators/roof-pitch-rafter`)
- [ ] French Drain Trench Cross-Section Diagram (`/calculators/french-drain`)
- [ ] Retaining Wall Elevation & Geogrid Diagram (`/calculators/retaining-wall`)
- [ ] Paver Sub-Base Cross-Section Diagram (`/calculators/paver-base-sand`)
- [ ] Deck Joist Framing Plan Diagram (`/calculators/deck-joist-span`)
- [ ] Fence Picket Elevation Diagram (`/calculators/fence-pickets`)
- [ ] Subfloor Plywood Staggering Grid (`/calculators/subfloor`)
- [ ] Recessed Lighting Ceiling Grid Diagram (`/calculators/recessed-lights-living-room`)
- [ ] Shiplap Nickel-Gap Elevation Diagram (`/calculators/shiplap`)

### 📋 Moat 2: One-Click `📋 Copy Shopping List` Button (COMPLETE ✅)
- [x] Global clipboard handler in `Layout.astro` with auto-injection across all calculator result cards.

### 💰 Moat 3: Dual "DIY Material Cost" vs. "Contractor Installed Cost" Module
- [ ] Build global cost benchmarking module comparing raw DIY material costs against turnkey contractor quotes on key high-ticket calculators (*French Drain, Asphalt Shingles, Concrete Slab, Retaining Wall, Fence Pickets, Deck Boards, Water Heater, Mini-Split*).

### 🗺️ Moat 4: Project Workflow Hubs (5 of 8 Done)
- [x] Deck Construction Hub (`/projects/deck-building`)
- [x] Yard Drainage & Landscaping Hub (`/projects/yard-drainage`)
- [x] Basement & Room Finishing Hub (`/projects/basement-finishing`)
- [x] Bathroom & Shower Remodel Hub (`/projects/bathroom-remodel`)
- [x] Interior Accent Wall & Trim Hub (`/projects/room-accent-wall`)
- [ ] Roofing & Exterior Siding Hub (`/projects/roofing-exterior`)
- [ ] Outdoor Patio & Hardscaping Hub (`/projects/outdoor-patio`)
- [ ] Garage Workshop & EV Electrical Hub (`/projects/garage-ev-workshop`)

---

## 2. 🧮 Unbuilt High-Value Expansion Calculators

### 🚀 Wave 1: Forum Research & High-CPC/Search Calculators
- [ ] **NEC Electrical Conduit Fill & Wire Sizing Calculator** (`/calculators/conduit-fill`) — NEC Chapter 9 Table 1 40% fill limit for EMT, PVC, and Flex conduit with THHN wire gauge combinations (CPC: $6–$14).
- [ ] **Blown-In Attic Insulation Bag & R-Value Calculator** (`/calculators/attic-insulation`) — Owens Corning / Greenfiber bags based on sq ft, current depth, and target R-38 / R-49 / R-60 energy zones.
- [ ] **Sod Pallet & Roll Lawn Calculator** (`/calculators/sod-pallet`) — Pallets (450 sq ft), rolls/slabs, and 10% curve trimming waste.
- [ ] **Compound Miter & Bevel Angle Calculator** (`/calculators/compound-miter`) — Wall corner angles (e.g. 88° or 92°) to exact saw Miter & Bevel angles for 38°/52° crown molding.
- [ ] **Construction Tape Measure & Imperial Fraction Calculator** (`/calculators/construction-fraction`) — Fast adding, subtracting, multiplying feet, inches, 16ths/32nds.
- [ ] **Septic Tank & Leach Field Drain Calculator** (`/calculators/septic-tank-sizing`) — Tank capacity (gallons) & trench length based on bedrooms/GPD (CPC: $10–$25).

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
