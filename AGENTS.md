# Mintlify documentation agent — guidance

This file guides the Mintlify documentation agent when suggesting or applying changes to this repository. Follow it so suggestions match our tone, audience, style, and structure.

## Audience and product

- **Audience:** End users of OpenOps — open source users and enterprise customers.
- **Product:** OpenOps is a **No-Code FinOps automation platform** that helps organizations reduce cloud costs and streamline financial operations.
- **Goal:** Docs should help people install, configure, and use OpenOps. Keep content practical and outcome-focused.

## Tone and voice

- **Professional, concise, neutral, action-oriented.** No hype, superlatives, or vague benefit statements; stick to what the feature does and how to use it.
- Assume readers are **cloud/FinOps practitioners**, DevOps, SREs, or platform/finance teams with basic cloud knowledge (AWS, Azure, GCP).
- Use **active voice** and **second person** where it fits (e.g. "Click Create", "Run the following command").
- Use clear placeholders in examples: `<YOUR_ACCOUNT_ID>`, `$YOUR_ENV_VAR`. Never use real or sensitive data.

## Formatting rules (must follow)

- **Headings**
  - **Do not use H1 in the body.**
  - **H2 and H3:** Use **sentence case** (e.g. "Configuring allowed SMTP ports", not "Configuring Allowed SMTP Ports"). Keep headings concise (ideally under 6–8 words).
  - **H4:** Use only in long walkthrough guides where you need granular step separation (e.g. "#### Setting cURL headers"). Do not use H4 elsewhere. Never use H5 or H6.
  - No trailing punctuation on headings (no periods or colons at the end).
- **Lists**
  - Use **`*`** for unordered bullets, **not** `-`.
  - Use the **Oxford comma** in series. Do not overuse bulleted lists.
- **Apostrophes and dashes**
  - Straight apostrophes only (e.g. "Here's").
  - Em dashes must have spaces on both sides (e.g. "something — not only one").

## Content structure

- **One main purpose per page.** Start with a short summary (what the page is and who it's for). Follow "what is it? what is it for? how to use it?" where it fits.
- **Match depth to the change.** A small config option gets one short subsection (env var + example), not a long guide. A niche bug fix or minor use case: add a single line to an existing list where it fits. Do not write long tutorials for small changes.
- **Reuse existing snippets:** Where a page already uses a snippet for a given purpose (e.g. `<RestartContainers />` after editing `.env`), use the same snippet for the same purpose when adding new content. Follow the existing section order and patterns on the page.
- **Procedures:** Use **numbered steps**; include prerequisites and how to confirm success where relevant. Keep pages scannable: short paragraphs, code blocks for commands.
- **New actions or blocks (e.g. Slack, SMTP):** Do not create new pages. Mention and briefly summarize the new action or block in the Actions page (`/workflow-management/actions`). You can also mention it in Features and Benefits (`/introduction/features-and-benefits`) or in the "Adding the first action" part of Building Workflows (`/workflow-management/building-workflows`).
- **New AI (LLM) provider:** Add the provider name to the existing list of supported providers in the AI assistance section; do not add a dedicated page. Do not add specific model versions (e.g. 1, 5.2) to the docs.
- **Contribution-related changes:** If the change is about contributing, building, or testing the app, add or update the relevant page or section in the contributing section (`/contributing/`).

## Links and references

- **Link text:** Descriptive (avoid "click here"). Use **title case** when the text is the target page title; otherwise use sentence case.
- **External links:** Use full URLs. Add a short note if the destination needs credentials or billing.

## Code blocks

- Always set a **language** (e.g. `shell`, `bash`, `json`). Prefer `shell` for env vars and CLI commands. Show both the command and, when useful, expected output. Use codetabs when you have platform-specific variants (e.g. macOS vs Windows). Include brief comments for non-obvious steps.

## What to avoid

- **Over-documenting:** Do not turn a single new config option into a multi-section guide. Document it in one short subsection (env var + example).
- **Inconsistent formatting:** Before suggesting edits, scan the file for heading case, bullet style (`*` vs `-`), and snippet usage so your changes match.
- **Be concise and reasoned:** Use the minimum words needed. For instructions, briefly explain why the user would do it (e.g. "so that OpenOps can connect to your SMTP server").
