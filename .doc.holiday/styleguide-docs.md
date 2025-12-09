# Documentation Style Guide

## Project Summary

OpenOps Documentation documents OpenOps — a No‑Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations. The docs target cloud/FinOps practitioners, DevOps engineers, SREs, platform and finance teams who operate cloud accounts, create automation workflows, and integrate billing/visibility tools. Documentation types in the repo include: product overviews, quickstarts and deployment guides, workflow/tutorial pages, how‑to snippets, integration guides, API reference and tables/analytics pages. Technical complexity ranges from non‑technical user flows (UI walkthroughs, user management) to moderately advanced cloud setup (IAM/CF/VM provisioning) and workflow logic (conditional branching, human‑in‑the‑loop), plus API examples. Writing patterns observed: MDX files with front matter metadata, Table of Contents present in several pages, use of code blocks and examples, and small focused “snippets” pages for common operational tasks. Files are organized by functional areas (getting-started, workflow-management, cloud-access, snippets, reporting-analytics, ai-assistance, integrations).

## Context

**Project:** **OpenOps Documentation**
**Description:** OpenOps is a No-Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations.
**Publishing System:** Mintlify

## Writing Rules

### Core Principles
- **Be concise** - Use the minimum words necessary
- **Be reasoned** - For every instruction, explain why the user would want to follow it
- **Be consistent** - Match existing documentation patterns
- **Match the level of detail in existing documentation** - Mind the level of detail at which existing functionality is documented, and don’t introduce more detail than there currently is. If existing docs merely mention that action A exists, but a commit in a new release addresses a specific bug in a particular niche use case of this action, do not try to come up with a tutorial for using action A in that use case as it would be several levels of detail deeper than existing docs are at. In this case, you should probably ignore that update altogether; alternatively, if the existing description of action A briefly lists its use cases and the involved use case is missing, you can add it to the list.

### Tone Guidelines

Target moderately technical users:
- Voice: professional, concise, neutral, action-oriented.
- Assume familiarity with FinOps, AWS, Azure, GCP
- Assume a basic engineering background
- Use direct and practical language
- Explain what each piece of functionality does and why
- Provide examples
- Avoid marketing language or benefit statements
- Use active voice and second person where appropriate (e.g., "Click Create," "Run the following command").
- Use backticks for inline code and variables like `PROJECT_ID` or `apiKey`.
- When giving example values, mark placeholders clearly: `<YOUR_ACCOUNT_ID>` or `$YOUR_ENV_VAR`.
- Do not include internal or sensitive information in examples; use fictional safe values.

### Content Structure Rules
Content organization guidelines

#### General principles
- One primary purpose per page. Open with a 1–2 sentence summary (what the page is and who it’s for).
- Follow the "what is it? what is it for? how to use it?" template.
- Use the front matter description for a short single-sentence summary; repeat as the first paragraph if helpful.
- Keep pages scannable: use short paragraphs, numbered steps for procedures, and code blocks for commands.
- Do not overuse bulleted lists.
- Always include prerequisites and expected outcomes for tutorials and procedures.

#### New page templates by content type

Technical Documentation Pages (guides, how-to, configuration):
- Title (front matter)
- Summary / What this page covers
- Prerequisites (software, permissions, quotas)
- Step-by-step instructions (numbered lists)
- Example inputs/outputs or code snippets
- Validation (how to confirm success)
- Troubleshooting and common errors if known; skip otherwise
- Related links and next steps

Process Documentation Pages (procedural steps):
- Start with prerequisites and requirements
- Use numbered steps for sequence
- Include command examples and expected results
- End with verification steps and troubleshooting

Snippets and Cookbook Pages:
- 1 goal per page (e.g., "Restart containers")
- Show the one-line summary, the command or code block, and a brief explanation
- Link to full workflows or guides where applicable

#### Updating existing pages

Most of the time, you will update existing pages by adding new content or revising existing content.

There are two typical scenarios for updating existing pages:
- Documenting new actions
- Updating AI documentation

##### Documenting new actions

OpenOps provides an array of actions, grouped into "blocks":
- A "block" is a collection of related actions, often performed by a specific third-party tool that is integrated with OpenOps. Examples of blocks are "Slack", "MS Teams", "Flexera", "Jira Cloud", "SMTP".
- An "action" is a specific operation that lives in a block. For example, in the "Slack" block, there are the following actions: "Send message", "Update message", "Request action", "Custom API call", "Wait for user action".
- When a new block or a new action in an existing block is added to OpenOps, it is not documented in separate pages. Instead, the new action or block is mentioned and quickly summarized in the "Actions" page (/workflow-management/actions.mdx). Blocks may be also mentioned in the "Features and Benefits" page (/introduction/features-and-benefits.mdx), as well as in the "Adding the first action" section of the "Building Workflows" page (/workflow-management/building-workflows.mdx).

##### Updating AI documentation

- If support is added for a new AI (LLM) provider, simply add it to existing lists of supported providers in the "AI assistance" section, don't elaborate further.
- Whenever support is added for yet another AI model, don't try to document it as this is beyond the level of detail that we currently have in the docs.

### Heading Rules
```markdown
Heading style and hierarchy

H1
Do not use at all. Mintlify renders the `title` property in the front matter as the page header and TOC item, making H1s redundant

H2 (Major sections)
- Use for top-level logical sections of a page. In "Importing and Exporting Workflows", "Importing workflows" and "Exporting workflows" would be H2s. In a longer procedural page such as "Building Workflows", you'd have "Creating a workflow", "Adding a trigger", "Adding actions", "Testing a workflow", "Publishing a workflow" as H2s.
- Capitalization: sentence case

H3 (Subsections)
- Use for subtopics under H2.
- Examples: if H2 is "## Testing a workflow", H3s could be "### Testing individual steps" and "### Testing the entire workflow".
- Capitalization: sentence case

H4
- Only use in long walkthrough guides that justify granular separation of steps to be followed by the reader; do not use in any other contexts.
- Example usage: "#### Setting cURL headers" or "#### Defining JSON schema fields"
- Capitalization: sentence case

H5, H6
Never use

Additional heading rules
- Use sentence case for headings. Only use title case for the front matter title.
- Avoid punctuation at the end of headings (no trailing periods or colons except where grammatically necessary in code or literal headings).
- Keep headings concise (ideally under 6–8 words).
```

### Formatting Requirements

#### Lists

- Use bullets for unordered lists. Use `*` instead of `-` for bullets.
- Use Oxford comma in series

#### Apostrophes
- Use straight apostrophes instead of curly apostrophes.
- Example: "Here's an example:"

#### Dashes
- Always space out em dashes on both sides.
- Correct: "Something — not only one, but also two"
- Incorrect: "Something—not only one, but also two"

### Code Example Requirements

1. Always include syntax highlighting with language tags
2. Always include a language tag when adding a code block
3. Show both input and expected output
4. Include comments for complex logic
5. Place runnable example near page top
6. Use codetabs for platform variants

### Linking Rules
Linking strategy and examples

Internal links
- Use absolute doc-root paths starting with / for internal links. This makes refs stable across pages and Mintlify navigation consistent.
- Always add a trailing slash to internal links when linking to a page. When linking to an anchor, add a trailing slash before the hash character for the anchor.
- Format: [Link text](/section/subsection/page/)
- Casing of link text:
  - Use title case when link text corresponds to the title of the target page.
  - Use sentence case in all other cases.
- Examples:
  - [Quick Start Guide](/getting-started/quick-start-guide/)
  - [Scheduling](/workflow-management/scheduling/)
  - [Tables](/reporting-analytics/tables/)
  - [Actions](/workflow-management/actions/) and [triggers](/workflow-management/triggers/) are two kinds of steps that you use when [building your workflows](/workflow-management/building-workflows/) in OpenOps.  
- Do not use relative links.

External links
- Use full URLs and add a short note for external destinations if they require credentials or billing.
- Example: [AWS documentation](https://docs.aws.amazon.com/)
- Do not use HTML links, only Markdown links.
- Do not try to control link targets: Mintlify opens external links in a new tab/window anyway.

Cross-references and anchors
- Link to sections in the same page using hash anchors based on heading text. Prefer automatic slugified anchors generated by the system. Example: [Troubleshooting](#troubleshooting)
- When linking to a specific example or code block in another page, reference the section anchor: [API example](/getting-started/quick-start-guide/#api-example)

Link maintenance and validation
- Before publishing, run a link-checker to validate internal and external links. Fix broken links or update slugs.
- Prefer linking to the canonical doc page (not to a snippet) — link to the high-level guide and reference snippets rather than duplicating content.

When to use each approach
- Use absolute doc-root links for production-facing navigation and cross-site references.
- Use external links for third-party docs, downloads, or cloud provider references. Annotate any link that requires authorization, billing, or has costs.

Observed link formatting patterns (exact examples to follow):
- Internal absolute example: [Investigate Workflow Run](/workflow-management/investigate-workflow-run/)
- External example: [Node.js](https://nodejs.org/)

Accessibility and link text
- Use descriptive link text (avoid ‘click here’). Include the destination type if not obvious (e.g., "View API reference for workflows").
- If linking to downloadable assets, include file size and format where practical.

Summary rules
- Always prefer absolute doc-root internal links, keep link text descriptive, validate links regularly, and annotate external/billing links.

## Publishing System Requirements
Mintlify publishing requirements and front matter patterns

Required front matter fields (observed across repository):
- title (string) — human readable page title. Use title case as Mintlify will render this as the page title and TOC item.
- description (string) — 1‑line summary used for search/SEO and cards
- icon (string) — short icon identifier used in the table of contents. Choose icons semantically from one of two icon libraries: [Font Awesome](https://fontawesome.com/icons) or [Lucide](https://lucide.dev/icons/). Only choose free icons, avoid premium icons. Every page icon should have an icon that is unique across documentation.

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
- Snippets folder for quick operational commands and small procedures reused across pages (e.g., "restart-containers.mdx", "tls.mdx").
- Deployment subsection under getting-started (local, aws-ec2, gcp-vm, azure-vm) grouping pragmatic platform-specific install guides.

Publishing checklist (before marking a page ready):
1. Front matter present and valid YAML per template.
2. Links verified (see linking rules below).

## Existing Documentation Directory Structure
Top-level organization and what belongs in each path

./
- README.md: Repository and documentation root summary (maintain as canonical repo README).
- docs.json / LICENSE: repo config and licensing.

getting-started/
- Quick start, system requirements, user management, updating OpenOps, and a deployment subfolder with platform-specific install instructions. Put introductory and onboarding content here.
- Files: quick-start-guide.mdx, system-requirements.mdx, user-management.mdx, updating-openops.mdx
- Subdir: getting-started/deployment/ contains local and cloud VM installation guides (aws-ec2.mdx, gcp-vm.mdx, azure-vm.mdx, local.mdx)

introduction/
- Overview and features pages; high-level product descriptions and benefits targeted at new users and stakeholders.
- Files: overview.mdx, features-and-benefits.mdx

workflow-management/
- Core product flows: building workflows, scheduling, templates, actions, human-in-the-loop, conditional branching, passing data, investigating runs, version history/lifecycle. This is where users learn the platform’s automation model.
- Files: building-workflows.mdx, scheduling.mdx, workflow-templates.mdx, actions.mdx, human-in-the-loop.mdx, conditional-branching.mdx, passing-data.mdx, investigate-workflow-run.mdx, workflow-version-history-lifecycle.mdx

cloud-access/
- Multi-cloud access patterns and cloud-specific setup instructions (IAM, CF templates).
- Files: multi-cloud.mdx, aws-cf-role-stack.mdx, access-levels-permissions.mdx

integrations/
- Integrations with third-party tooling and billing/visibility platforms (e.g., CloudHealth). Use for connector setup and sync instructions.
- Files: cloudhealth.mdx (and other per‑integration files)

reporting-analytics/
- Analytics, tables, and data visualization pages. Include sample queries, dashboards or export instructions.
- Files: tables.mdx, data-visualization.mdx

ai-assistance/
- LLM and AI features documentation (overview and connections). Keep guidance for prompts, safety, and privacy here.
- Files: overview.mdx, llm-connections.mdx

snippets/
- Short, single-purpose operational recipes and one-off commands (restart-containers, tls, auto-install, env-update-credentials, update-link, non-production-disclaimer). Use small, searchable pages that are easy to embed into other docs.
- Files: update-link.mdx, tls.mdx, restart-containers.mdx, non-production-disclaimer.mdx, env-update-credentials.mdx, auto-install.mdx

Organizational rules:
- One concept per file. If content grows, split into a subsection directory (e.g., workflow-management/troubleshooting/).
- Keep filenames kebab-case and match the slug (unless overridden in front matter).
- Avoid duplicates—some directories currently have duplicated filenames; ensure each file exists only once and deduplicate during cleanup.
