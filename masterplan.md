# CalcForDIY — Master Development Roadmap & Agent Instructions

**Attention All AI Agents:** Read this entire document to understand the context, architecture, rules, and roadmap for the `calcfordiy.com` project before making any changes.

*Goal: Stable traffic and monetization within 2 months.*
*Last updated: July 2026*

---

## 🛑 STRICT RULES FOR ALL AGENTS
1. **New Calculators:** Whenever you create a new calculator page in `src/pages/calculators/`, you MUST ALWAYS add a link to it in BOTH of the following directory arrays:
   - `src/pages/index.astro` (The main homepage)
   - `src/pages/calculators/index.astro` (The calculators directory page)
   *Failure to update both files will result in the calculator being hidden from the user.*
2. **Calculator Content Structure:** Every calculator page MUST include a "How to Use This Calculator" section containing an ordered list (`<ol>`) of instructions. This is critical for SEO and user experience.
3. **Design System:** All calculators must strictly follow the UI, UX, and Schema architecture detailed in the `calculator_design_system.md` artifact.
4. **Development Server:** When starting the dev server, use background mode: `astro dev --background`. Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

---

## CURRENT STATUS
- **Live site:** calcfordiy.com
- **Stack:** Astro + Tailwind, Cloudflare Pages, GitHub
- **Calculators live:** 53 calculators (Phase 2, Seasonal, Millwork 1A, Hardscaping 1B, HVAC 1C, and Phase 4A Expansion complete!)
- **Stub pages:** 0 remaining (all replaced)
- **AdSense:** existing approved account, new site not yet added

---

## PHASE 1 — IMMEDIATE (Week 1-2)
**Fixes Still Needed**
- `[ ]` Verify canonical URL shows calcfordiy.com not localhost (View Page Source → search "canonical")
- `[ ]` Verify sitemap-0.xml shows calcfordiy.com URLs (visit calcfordiy.com/sitemap-0.xml)
- `[ ]` Confirm Google Analytics is firing (check GA4 Realtime report while visiting site)
- `[ ]` Add chunk 2 content to any calculators still missing it (grout, bathroom wall tile need checking)
- `[x]` Fix /calculators/thinset broken link (Built full Thinset calculator)

**Quick SEO Wins (Do This Week)**
- `[ ]` Add Google Search Console property if not already verified
- `[ ]` Submit sitemap in GSC: calcfordiy.com/sitemap-0.xml
- `[ ]` Request indexing for each live calculator page manually in GSC
- `[ ]` Check GSC Coverage report for any crawl errors
- `[ ]` Add site to Google AdSense as additional site

---

## PHASE 2 — CALCULATOR EXPANSION (Weeks 2-5)
*Note: Massive progress has been made here. Almost all planned calculators have been built and deployed.*

**Tier 1: Garden Cluster**
- `[x]` Mulch calculator 
- `[x]` Raised bed soil calculator 
- `[x]` Topsoil calculator 
- `[x]` Fertilizer calculator 
- `[x]` Seed spacing calculator

**Concrete Cluster**
- `[x]` Concrete for fence posts 
- `[x]` Concrete slab calculator 
- `[x]` Quikrete bags calculator 
- `[x]` Rebar calculator for slab 

**Tier 2: Floor Cluster**
- `[x]` Subfloor
- `[x]` Hardwood Flooring
- `[x]` Laminate Flooring
- `[x]` Carpet
- `[x]` Underlayment

**Tier 3: High-Value Single Calculators**
- `[x]` Water heater operating cost calculator
- `[x]` AC operating cost calculator
- `[x]` Drywall estimator
- `[x]` Deck boards calculator

**Tier 3b: Paint Cluster**
- `[x]` Paint calculator for a room
- `[x]` Paint calculator for textured walls
- `[x]` Exterior paint calculator

**Tier 4: Extended Lighting Cluster**
- `[x]` Recessed lighting for living room
- `[x]` Recessed lighting for hallway
- `[x]` Recessed lighting for kitchen
- `[x]` Outdoor String lights (can expand)

**Wall Cluster**
- `[x]` Wall framing stud calculator 
- `[x]` Trim and molding calculator 
- `[x]` Shiplap / tongue and groove 
- `[x]` Wallpaper calculator

**Utilities & HVAC (High CPC)**
- `[x]` Furnace heating cost calculator
- `[x]` Generator size calculator
- `[x]` LED bulb savings calculator
- `[ ]` Pool heater operating cost (optional)

**Seasonal Priority (Must be live by mid-September)**
- `[x]` Christmas tree lights calculator
- `[x]` House exterior Christmas lights calculator
- `[x]` Christmas & Halloween lights/decor outlet load calculator

---

## PHASE 3 — SEO CONTENT (Weeks 3-6)
**Supporting Articles (2 per week using local LLM)**
These are 600-900 word pages targeting "how much [material] for [specific job]" queries. They rank for informational queries and funnel to your calculators.
Format: `H1 → intro → calculator embed/link → step by step answer → FAQ (4 questions) → related calculators`
Path: `src/pages/guides/`

- `[x]` "How Much Mulch Do I Need for Garden Beds?" 
- `[x]` "How Much Soil to Fill a 4x8 Raised Bed?" 
- `[x]` "How Much Concrete for Fence Posts?" 
- `[x]` "How Many Bags of Grout for a Tile Shower?" 
- `[x]` "What Waste Factor Should I Use for Laminate Flooring?"
- `[x]` "How Many Recessed Lights for a 2-Car Garage?" 
- `[x]` "How Much Tile Do I Need for a Shower?" 
- `[x]` "How Many Boxes of Hardwood Flooring Do I Need?" 
- `[x]` "How Many Studs for a Wall?"

---

## PHASE 4 — MONETIZATION (Weeks 2-8)
**Google AdSense**
- `[ ]` Add calcfordiy.com to existing AdSense account
- `[ ]` Paste AdSense auto-ads code into Layout.astro head
- `[ ]` Wait for site-level approval
- `[ ]` After approval: manually place ads (below H1, between calc & results, after FAQ). 
  *Agents: Provide ad unit divs to Layout.astro when requested.*

**Future Monetization Options (Month 3+)**
- `[ ]` Amazon affiliate links — link to specific products in calculators
- `[ ]` Home Depot affiliate program 
- `[ ]` Carbon Ads 

---

## FUTURE FEATURES TO RESEARCH (Month 3+)
**Calculator Ideas to Validate**
- Raised garden bed lumber calculator
- Drip irrigation calculator
- Compost ratio calculator
- Sod calculator
- Fence post spacing calculator
- Roof pitch calculator
- Stair stringer calculator
- Paver base gravel calculator

**Site Features to Consider**
- `[x]` Print/PDF button on results (Added to recent calculators)
- `[ ]` "Email my results"
- `[ ]` Dark mode toggle
- `[ ]` Unit switcher (metric/imperial)
- `[x]` "Compare two options" mode (Implemented in AC and Furnace Cost calculators)
- `[x]` Calculator search bar on homepage (Added in audit fixes)

---

## BLUE OCEAN NICHES (High-CPC / Underserved)
When deciding what to build next, prioritize these high-value clusters:

**1. Custom Trim & Millwork (Aesthetics)**
- `[x]` Board and Batten Spacing Calculator
- `[x]` Wainscoting / Picture Frame Molding Layout
- `[x]` Coffered Ceiling Calculator

**2. Advanced Hardscaping & Drainage**
- `[x]` French Drain Calculator
- `[x]` Retaining Wall Block & Geogrid Calculator

**3. Smart Home & Low Voltage**
- Landscape Lighting Wire & Transformer Calculator

**4. HVAC & Energy Efficiency**
- `[x]` Mini-Split Sizing Calculator
- Attic Insulation ROI Calculator

**5. Major Structural Remodels**
- Basement Finishing Material Estimator

**6. Plumbing & Water**
- `[x]` Tankless Water Heater Sizing Calculator

---

## AGENT TASK DELEGATION GUIDE
When working with other AI agents, delegate these tasks:
- **Content Agent (local LLM):** Chunk 2 content, Supporting articles (`guides/`), FAQ sections, Meta descriptions.
- **Coding Agent (Antigravity):** New calculator pages (formulas + input list), Bug fixes, New site features (print button, search bar).
- **Research Agent:** Keyword research, Competitor analysis, Finding primary sources for formulas.

**Always verify before publishing:**
- Calculator math against a known reference
- Canonical URL is calcfordiy.com not localhost
- `noindex` removed from completed pages
- Internal links point to live pages not stubs
