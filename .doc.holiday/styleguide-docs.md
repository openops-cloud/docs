# Documentation Style Guide

## Project Summary

OpenOps Documentation documents OpenOps — a No-Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations.

The docs target cloud/FinOps practitioners, DevOps engineers, SREs, and platform and finance teams who operate cloud accounts, create automation workflows, and integrate billing/visibility tools.

Documentation types in the repo include product overviews, quickstarts and deployment guides, workflow/tutorial pages, how-to snippets, integration guides, API reference, and tables/analytics pages.

Technical complexity ranges from non-technical user flows (UI walkthroughs, user management) to moderately advanced cloud setup (IAM/CF/VM provisioning) and workflow logic (conditional branching, human-in-the-loop), plus API examples.

Writing patterns observed: MDX files with front matter metadata, Table of Contents present in several pages, use of code blocks and examples, and small, focused “snippets” pages for common operational tasks.

Files are organized by functional areas (getting-started, workflow-management, cloud-access, snippets, reporting-analytics, ai-assistance, integrations).

## Context

**Project:** **OpenOps Documentation**

**Description:** OpenOps is a No-Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations.

**Publishing System:** Mintlify

## Writing Rules

### Core Principles
- **Be concise** — Use the minimum words necessary.
- **Be reasoned** — For every instruction, explain why the user would want to follow it.
- **Be consistent** — Match existing documentation patterns.
- **Match the level of detail in existing documentation** — Mind the level of detail at which existing functionality is documented, and don’t introduce more detail than currently exists. If existing docs merely mention that action A exists, but a commit in a new release fixes a specific bug in a niche use case of this action, do not create a tutorial for that use case as it would go several levels deeper than the existing docs. In this case, you should probably ignore the update altogether; alternatively, if the existing description of action A briefly lists its use cases and the relevant use case is missing, you can add it to the list.

### Tone Guidelines

Target moderately technical users:
- Voice: professional, concise, neutral, action-oriented.
- Assume familiarity with FinOps, AWS, Azure, and GCP.
- Assume a basic engineering background.
- Use direct and practical language.
- Explain what each piece of functionality does and why.
- Provide examples.
- Avoid marketing language or benefit statements.
- Use active voice and second person where appropriate (e.g., "Click Create," "Run the following command").
- Use backticks for inline code and variables like `PROJECT_ID` or `apiKey`.
- When giving example values, mark placeholders clearly: `<YOUR_ACCOUNT_ID>` or `$YOUR_ENV_VAR`.
- Do not include internal or sensitive information in examples; use fictional safe values.

### Content Structure Rules
Content organization guidelines

#### General principles
- One primary purpose per page. Open with a 1–2 sentence summary (what the page is and who it's for).
- Follow the "what is it? what is it for? how to use it?" template.
- Use the front matter description for a short, single-sentence summary; repeat it as the first paragraph if helpful.
- Keep pages scannable: use short paragraphs, numbered steps for procedures, and code blocks for commands.
- Do not overuse bulleted lists.
- Always include prerequisites and expected outcomes for tutorials and procedures.

#### New page templates by content type

**Technical Documentation Pages** (guides, how-to, configuration):
- Title (front matter)
- Summary / What this page covers
- Prerequisites (software, permissions, quotas)
- Step-by-step instructions (numbered lists)
- Example inputs/outputs or code snippets
- Validation (how to confirm success)
- Troubleshooting and common errors if known; skip otherwise
- Related links and next steps

**Process Documentation Pages** (procedural steps):
- Start with prerequisites and requirements
- Use numbered steps for sequence
- Include command examples and expected results
- End with verification steps and troubleshooting

**Snippets and Cookbook Pages:**
- One goal per page (e.g., "Restart containers")
- Show the one-line summary, the command or code block, and a brief explanation
- Link to full workflows or guides where applicable

#### Updating existing pages

Most of the time, you will update existing pages by adding new content or revising existing content.

There are two typical scenarios for updating existing pages:
- Documenting new actions
- Updating AI documentation

##### Documenting new actions

OpenOps provides an array of actions, grouped into "blocks":
- A "block" is a collection of related actions, often performed by a specific third-party tool that is integrated with OpenOps. Examples of blocks are "Slack", "MS Teams", "Flexera", "Jira Cloud", and "SMTP".
- An "action" is a specific operation that lives in a block. For example, in the "Slack" block, the actions include "Send message", "Update message", "Request action", "Custom API call", and "Wait for user action".
- When a new block or a new action in an existing block is added to OpenOps, it is not documented in separate pages. Instead, the new action or block is mentioned and briefly summarized in the "Actions" page (/workflow-management/actions.mdx). Blocks may also be mentioned in the "Features and Benefits" page (/introduction/features-and-benefits.mdx), as well as in the "Adding the first action" section of the "Building Workflows" page (/workflow-management/building-workflows.mdx).

##### Updating AI documentation

- If support is added for a new AI (LLM) provider, simply add it to existing lists of supported providers in the "AI assistance" section; don't elaborate further.
- Whenever support is added for a new AI model, don't try to document it, as this is beyond the level of detail currently present in the docs.

### Heading Rules
```markdown
Heading style and hierarchy

H1
Do not use at all. Mintlify renders the `title` property in the front matter as the page header and TOC item, making H1s redundant.

H2 (Major sections)
- Use for top-level logical sections of a page. In "Importing and Exporting Workflows", "Importing workflows" and "Exporting workflows" would be H2s. In a longer procedural page such as "Building Workflows", you'd have "Creating a workflow", "Adding a trigger", "Adding actions", "Testing a workflow", and "Publishing a workflow" as H2s.
- Capitalization: sentence case

H3 (Subsections)
- Use for subtopics under H2.
- Examples: if the H2 is "## Testing a workflow", H3s could be "### Testing individual steps" and "### Testing the entire workflow".
- Capitalization: sentence case

H4
- Use only in long walkthrough guides that justify granular separation of steps to be followed by the reader; do not use in any other contexts.
- Example usage: "#### Setting cURL headers" or "#### Defining JSON schema fields".
- Capitalization: sentence case

H5, H6
Never use.

Additional heading rules
- Use sentence case for headings. Only use title case for the front matter title.
- Avoid punctuation at the end of headings (no trailing periods or colons, except where grammatically necessary in code or literal headings).
- Keep headings concise (ideally under 6–8 words).
```

### Formatting Requirements

#### Lists

- Use bullets for unordered lists. Use `*` instead of `-` for bullets.
- Use the Oxford comma in series.

#### Apostrophes
- Use straight apostrophes instead of curly apostrophes.
- Example: "Here's an example:"

#### Dashes
- Always space out em dashes on both sides.
- Correct: "Something — not only one, but also two"
- Incorrect: "Something—not only one, but also two"

### Code Example Requirements

1. Always include syntax highlighting with language tags.
2. Always include a language tag when adding a code block.
3. Show both input and expected output.
4. Include comments for complex logic.
5. Place runnable examples near the top of the page.
6. Use codetabs for platform variants.

### Linking Rules
Linking strategy and examples

**Internal links**
- Use absolute doc-root paths starting with `/` for internal links. This keeps references stable across pages and ensures consistent Mintlify navigation.
- Internal links may or may not have trailing slashes.
- Format: `[Link text](/section/subsection/page)` or `[Link text](/section/subsection/page/)`
- Casing of link text:
  - Use title case when the link text corresponds to the title of the target page.
  - Use sentence case in all other cases.
- Examples:
  - [Quick Start Guide](/getting-started/quick-start-guide/)
  - [Scheduling](/workflow-management/scheduling/)
  - [Tables](/reporting-analytics/tables/)
  - [Actions](/workflow-management/actions/) and [triggers](/workflow-management/triggers/) are two kinds of steps that you use when [building your workflows](/workflow-management/building-workflows/) in OpenOps.
- Do not use relative links.

**External links**
- Use full URLs and add a short note when external destinations require credentials or billing.
- Example: [AWS documentation](https://docs.aws.amazon.com/)
- Do not use HTML `<a>` tags; use Markdown links only.
- Do not try to control link targets; Mintlify automatically opens external links in a new tab or window.

**Cross-references and anchors**
- Link to sections on the same page using hash anchors based on heading text. Prefer automatic slugified anchors generated by the system. Example: [Troubleshooting](#troubleshooting)
- When linking to a specific example or code block in another page, link to the section anchor: [API example](/getting-started/quick-start-guide/#api-example)

**Link maintenance and validation**
- Before publishing, run a link-checker to validate internal and external links. Fix broken links or update slugs.
- Prefer linking to the canonical doc page (not to a snippet). Link to the high-level guide and reference snippets instead of duplicating content.

**When to use each approach**
- Use absolute doc-root links for production-facing navigation and cross-site references.
- Use external links for third-party docs, downloads, or cloud provider references. Annotate any link that requires authorization, billing, or costs.

**Observed link formatting patterns (exact examples to follow):**
- Internal absolute example: [Investigate Workflow Run](/workflow-management/investigate-workflow-run/)
- External example: [Node.js](https://nodejs.org/)

**Accessibility and link text**
- Use descriptive link text (avoid "click here"). Include the destination type if not obvious (e.g., "View API reference for workflows").
- When linking to downloadable assets, include file size and format where practical.

**Summary rules**
- Always prefer absolute doc-root internal links, keep link text descriptive, validate links regularly, and annotate external or billing-related links.

## Publishing System Requirements
Mintlify publishing requirements and front matter patterns

Required front matter fields (observed across the repository):
- `title` (string) — human-readable page title. Use title case, as Mintlify renders this as the page title and TOC item.
- `description` (string) — one-line summary used for search/SEO and cards.
- `icon` (string) — short icon identifier used in the table of contents. Choose icons semantically from the free sets in [Font Awesome](https://fontawesome.com/icons) or [Lucide](https://lucide.dev/icons/). Select only free icons and avoid premium icons. Each page should have an icon that is unique across the documentation.

Exact front matter template (copy-paste for each new page):

---
title: "<Page Title>"
description: "<Short one-line summary of the page's purpose>"
icon: "<icon-name>"
---

Notes and rules for Mintlify:
- Use YAML front matter at the very top of each .mdx file. Missing or malformed front matter may prevent Mintlify from correctly indexing the page.
- Keep title short (ideally < 60 characters) and description under 160 characters.

Code and example conventions (examples observed and recommended):
- Inline code and commands: wrap in backticks, e.g. `openops-cli sync`
- Block code examples: specify language for syntax highlighting

Example: shell snippet

```bash
# Authenticate with OpenOps
openops login --api-key $OPENOPS_API_KEY
```

Example: API example (JSON + curl)

```bash
curl -X POST "https://api.openops.example/v1/workflows" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"pause-unused-resources","trigger":"schedule","actions":[]}'
```

Examples of good documentation patterns discovered:
- Focused short pages per concept (e.g., "scheduling.mdx", "passing-data.mdx") that include purpose, prerequisites, step-by-step instructions, sample inputs/outputs, and a troubleshooting note.
- A snippets folder for quick operational commands and small procedures reused across pages (e.g., "restart-containers.mdx", "tls.mdx").
- A deployment subsection under getting-started (local, aws-ec2, gcp-vm, azure-vm) that groups pragmatic platform-specific installation guides.

Publishing checklist (before marking a page ready):
1. Front matter present and valid YAML per template.
2. Links verified (see linking rules below).

## Existing Documentation Directory Structure
Top-level organization and what belongs in each path

./
- README.md: Repository and documentation root summary (maintain as the canonical repo README).
- docs.json / LICENSE: repo configuration and licensing.

ai-assistance/
- Documentation for LLM and AI features (overview and connections). Keep guidance for prompts, safety, and privacy here.
- Files: overview.mdx, llm-connections.mdx

cloud-access/
- Multi-cloud access patterns and cloud-specific setup instructions (IAM, CF templates).
- Files: multi-cloud.mdx, aws-cf-role-stack.mdx, access-levels-permissions.mdx

contributing/
- Developer documentation on how to contribute code to the OpenOps repository. Targeted at a more technical audience than the rest of the docs.
- Files: authentication.mdx, contributing-an-integration.mdx, creating-a-minimal-block.mdx, development-environment.mdx, index.mdx

cookbook/
- Short, single-purpose operational recipes.
- Files: iterate-over-multiple-aws-accounts.mdx, iterate-over-multiple-azure-subscriptions.mdx, iterate-over-multiple-gcp-projects.mdx

getting-started/
- Quick start, system requirements, user management, updating OpenOps, and a deployment subfolder with platform-specific installation instructions. Put introductory and onboarding content here.
- Files: quick-start-guide.mdx, system-requirements.mdx, user-management.mdx, updating-openops.mdx
- Subdir: getting-started/deployment/ contains local and cloud VM installation guides (aws-ec2.mdx, gcp-vm.mdx, azure-vm.mdx, local.mdx)

integrations/
- Content specific to FinOps tools that OpenOps integrates with, such as CloudHealth, Flexera, and Umbrella.
- Files: cloudhealth.mdx

introduction/
- Overview and features pages; high-level product descriptions and benefits targeted at new users and stakeholders.
- Files: overview.mdx, features-and-benefits.mdx

paid/
- Documentation of features available only in paid plans.
- Files: organization-template-catalog.mdx

reporting-analytics/
- Documentation of analytics and reporting features, as well as ways to import OpenOps content into external BI tools.
- Files: tables.mdx, analytics.mdx, connecting-to-external-tools.mdx

snippets/
- Short, single-purpose operational recipes and one-off commands that are embedded in other pages. Use this when a single piece of content can be reused across multiple pages without duplicating it.
- Files: update-link.mdx, tls.mdx, restart-containers.mdx, non-production-disclaimer.mdx, env-update-credentials.mdx, auto-install.mdx

workflow-management/
- Core product flows: building workflows, scheduling, templates, actions, human-in-the-loop, conditional branching, passing data, investigating runs, and version history/lifecycle. This is where users learn the platform’s automation model.
- Files: building-workflows.mdx, scheduling.mdx, workflow-templates.mdx, actions.mdx, human-in-the-loop.mdx, conditional-branching.mdx, passing-data.mdx, investigate-workflow-run.mdx, workflow-version-history-lifecycle.mdx

Organizational rules:
- One concept per file. If content grows, split it into a subsection directory (e.g., workflow-management/troubleshooting/).
- Keep filenames in kebab-case and match the slug (unless overridden in front matter).
- Avoid duplicates — some directories currently contain duplicated filenames; ensure each file exists only once and deduplicate during cleanup.
