## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## CalcForDIY Specific Rules
- **ZERO CONFIRMATION BIAS & NO EASY ANSWERS:** Never offer shallow, over-confident, or lazy shortcuts (such as urban myths about crawler tag counts or bulk text padding). Always challenge assumptions with rigorous critical thinking and objective analysis.
- **THOROUGH RESEARCH & VERIFIABLE FACTS ONLY:** Every technical, SEO, or architectural proposal MUST be grounded in primary authoritative documentation (Google Search Quality Evaluator Guidelines, official Google Search Central docs, official AdSense policies, and primary building code standards like IRC, NEC, TCNA, IES), never fantasies or unverified urban legends.
- **ABOVE REPROACH QUALITY:** CalcForDIY is a respectable, professional utility site. Everything built, written, or calculated must meet high-E-E-A-T engineering standards with zero boilerplate filler or repetitive programmatic text.
- **READ THE MASTERPLAN & TODO:** Before doing anything else, you MUST read `masterplan.md` and `todo.md` in the project root. They contain the roadmap, SEO strategy, current status, and active task tracking.
- **Track Progress in `todo.md` & `masterplan.md`:** Whenever you complete or adjust a task, feature, or calculator, you MUST update both `todo.md` and `masterplan.md` by marking the items as completed `[x]`.
- **New Calculators:** Whenever you create a new calculator page in `src/pages/calculators/`, you MUST ALWAYS add a link to it in BOTH of the following directory arrays:
  1. `src/pages/index.astro` (The main homepage)
  2. `src/pages/calculators/index.astro` (The calculators directory page)
  Failure to update both files will result in the calculator being hidden from the user.
- **Calculator Content Structure:** Every calculator page MUST include a "How to Use This Calculator" section containing an ordered list (`<ol>`) of instructions. This is critical for SEO and user experience.
