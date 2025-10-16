# Documentation Style Guide

## Project Summary

OpenOps (Beta) Documentation documents OpenOps — a No‑Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations. The docs target cloud/FinOps practitioners, DevOps engineers, SREs, platform and finance teams who operate cloud accounts, create automation workflows, and integrate billing/visibility tools. Documentation types in the repo include: product overviews, quickstarts and deployment guides, workflow/tutorial pages, how‑to snippets, integration guides, API reference and tables/analytics pages. Technical complexity ranges from non‑technical user flows (UI walkthroughs, user management) to moderately advanced cloud setup (IAM/CF/VM provisioning) and workflow logic (conditional branching, human‑in‑the‑loop), plus API examples. Writing patterns observed: MDX files with front matter metadata, Table of Contents present in several pages, use of code blocks and examples, and small focused “snippets” pages for common operational tasks. Files are organized by functional areas (getting-started, workflow-management, cloud-access, snippets, reporting-analytics, ai-assistance, integrations).

## Context

**Project:** **OpenOps (Beta) Documentation**
**Description:** OpenOps is a No-Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations.
**Publishing System:** Mintlify

## Primary Documentation Goals

## Writing Rules

### Core Principles
- **Be concise** - Use the minimum words necessary
- **Be practical** - Focus on actionable information
- **Be example-driven** - Show working code for every concept
- **Be consistent** - Match existing documentation patterns

### Tone Guidelines

#### Default Tone (Non-Technical Users)
- Explain what each command does and why
- Spell out abbreviations and technical terms
- Provide simpler code examples with explanations
- Include more step-by-step guidance
- Link to additional learning resources

#### Technical User Adjustments
When explicitly writing for technical users:
- Direct and practical language
- Assume familiarity with FinOps, AWS, Azure, GCP
- Focus on code examples over explanations
- Avoid marketing language or benefit statements

### Release Notes Specific
- **Emojis required** for category headers (🚀 🐛 ✨)
- Indented descriptions with `-`
- Add a breaking change notice if there are linear tickets with a "Breaking change" tag as part of this release.
- GitHub release title is the version (i.e. 0.6.0)

#### DO - Release Notes:
- Use emoji categories (🚀 🐛 ✨)
- Keep descriptions concise
- Include a breaking change notice 

#### DON'T - Release Notes:
- Skip the emoji format
- Include internal changes
- Mix with regular documentation

#### Breaking change Notes Examples
----------

## ⚠️ NOTICE

**Breaking Change**: This release has breaking changes:
1. AWS action "Tag Resources" will now fail the step if some resources were not tagged
2. Removed deprecated AWS actions:
- "Get Account Information": please use instesad "AWS CLI" action with [describe-account](https://docs.aws.amazon.com/cli/latest/reference/organizations/describe-account.html) command
- "Get Account Alias": please use instead "Get Account IDs"

## ⚠️ NOTICE

**Breaking Change**: This release removes 2 features: 
1. Removing the ability to rerun failed workflows from the failed step.
2. Removing Zendesk block trigger "New Ticket In View".

## ⚠️ NOTICE

**Breaking Change**: The Slack 'Request Action' workflow action now sends a different payload when an interaction is made. This update will affect **paused** workflows that ran **before** the update and are resumed **after** the update. Please **re-run** the workflows to fix this issue.

## ⚠️ NOTICE

**Breaking Change**: Connection-related event metadata now includes `authProviderKey`. This update may affect integrations relying on previous event formats.

----------

### Publishing System Requirements
Mintlify publishing requirements and front matter patterns

Required front matter fields (observed across repository):
- title (string) — human readable page title
- description (string) — 1‑line summary used for search/SEO and cards
- icon (string) — short icon identifier or emoji used in navigation cards
- iconType (string) — type indicator for icon usage (e.g. "emoji" | "svg" | "font")

Recommended optional fields (for consistency and Mintlify features):
- slug (string) — explicit URL path (if you need a custom path)
- tags (array) — category/tags for filtering
- draft (boolean) — publish state
- sidebar_order (integer) — ordering within a section
- hide_toc (boolean) — hide table of contents when appropriate

Exact front matter template (copy-paste for each new page):

---
title: "<Page Title>"
description: "<Short one-line summary of the page's purpose>"
icon: "<icon-name-or-emoji>"
iconType: "<emoji|svg|font>"
# Optional:
slug: "/path/if/you/want/custom-url"
tags: ["category", "topic"]
draft: false
sidebar_order: 10
hide_toc: false
---

Notes and rules for Mintlify:
- Use YAML front matter at the very top of each .mdx file. Missing or malformed front matter may prevent Mintlify from correctly indexing the page.
- Keep title short (ideally < 60 characters) and description under 160 characters.
- Use the 'icon' and 'iconType' consistently; prefer emoji for quick drafts, use standardized icon names for published pages.
- If using slug, ensure it is unique and mirrors the directory path unless there is a deliberate reason to override it.

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
- Snippets folder for quick operational commands and small procedures (e.g., "restart-containers.mdx", "tls.mdx").
- Deployment subsection under getting-started (local, aws-ec2, gcp-vm, azure-vm) grouping pragmatic platform-specific install guides.

Publishing checklist (before marking a page ready):
1. Front matter present and valid YAML per template.
2. Title matches the H1 or is present in front matter only (see heading rules below).
3. TOC generated (or hide_toc set intentionally).
4. Links verified (internal links start with / and external links use full URL).
5. Code blocks include language and example inputs/outputs where appropriate.
6. Tags and sidebar_order set for navigation if relevant.

If you need a template for a new guide file, use the front matter above followed immediately by a single H1 or rely on front matter title (see heading guidance).

### Content Structure Rules
Content organization guidelines

General principles
- One primary purpose per page. Open with a 1–2 sentence summary (what the page is and who it’s for).
- Use the front matter description for a short single-sentence summary; repeat as the first paragraph if helpful.
- Keep pages scannable: use short paragraphs, bullets, numbered steps for procedures, and code blocks for commands.
- Always include prerequisites and expected outcomes for tutorials and procedures.

Page templates by content type

Technical Documentation Pages (guides, how-to, configuration):
- Title (front matter)
- Summary / What this page covers
- Prerequisites (software, permissions, quotas)
- Step-by-step instructions (numbered lists)
- Example inputs/outputs or code snippets
- Validation (how to confirm success)
- Troubleshooting and common errors
- Related links and next steps

Process Documentation Pages (procedural steps):
- Start with prerequisites and requirements
- Use numbered steps for sequence; indicate estimated time for each step when applicable
- Include command examples and expected results
- End with verification steps and troubleshooting

API Documentation / Reference Pages:
- Start with a high-level description of the endpoint/purpose
- Authentication and required headers
- Method and path (HTTP verb and URL)
- Request parameters (table: name, type, required, description)
- Request body example (JSON)
- Response example (200 success and common error responses) with schema when possible
- Error codes and remediation tips
- Curl + SDK examples

Snippets and Cookbook Pages:
- 1 goal per page (e.g., "Restart containers")
- Show the one-line summary, the command or code block, and a brief explanation
- Link to full workflows or guides where applicable

Tables and Data Visualization:
- Provide sample table schema, example queries, screenshots (if applicable), and an interpretation of key columns
- Keep tables small and descriptive; use column headings in Title Case and include units in header where needed

Style and tone
- Voice: professional, concise, neutral, action-oriented.
- Audience: assume an IT/DevOps user with basic cloud knowledge.
- Use active voice and second person where appropriate (e.g., "Click Create," "Run the following command").
- Use consistent capitalization: Title Case in headings; sentence case in body paragraphs except for product names and acronyms (AWS, GCP, IAM).
- Use backticks for inline code and variables like `PROJECT_ID` or `apiKey`.
- When giving example values, mark placeholders clearly: `<YOUR_ACCOUNT_ID>` or `$YOUR_ENV_VAR`.
- Do not include internal or sensitive information in examples; use fictional safe values.

Content lifecycle
- Add a last-updated comment in page metadata or rely on Mintlify's change log. Use version history pages for workflow lifecycle notes (observed in workflow-version-history-lifecycle.mdx).
- Deprecation notes: mark deprecated features clearly at the top with a prominent NOTE block and link to migration instructions.

#### Heading Rules
```markdown
Heading style and hierarchy

H1 (Single per file)
- Use exactly one H1 per document. Prefer placing the title in front matter and NOT repeating a top-level H1 in the body to avoid duplication in Mintlify navigation. If you must include an H1 in the body, it must match the front matter title exactly.
- Examples from repository: "Overview", "Quick Start Guide", "Building Workflows", "Tables" (use Title Case)
- No trailing punctuation on H1 lines.

H2 (Major sections)
- Use for top-level sections such as Purpose, Prerequisites, Steps, Examples, API Reference, Troubleshooting, Related.
- Examples: "## Prerequisites", "## Quick start", "## API Examples", "## Troubleshooting"
- Capitalization: Title Case for section names.

H3 (Subsections)
- Use for step groups, individual examples, parameter lists, or subtopics under H2.
- Examples: "### Installing on AWS EC2", "### Sample payload", "### Common errors"
- Maintain strict H1 → H2 → H3 progression.

H4-H6 (Rare usage)
- Only used for very detailed technical blocks (e.g., multi-part code explanation, complex table breakdowns).
- Example usage: "#### cURL example headers" or "#### JSON schema fields"

Additional heading rules
- Do not use ALL CAPS headings. Use Title Case (capitalize main words).
- Avoid punctuation at the end of headings (no trailing periods or colons except where grammatically necessary in code or literal headings).
- Keep headings concise (ideally under 6–8 words).

Exact heading examples (recommended to follow):
- # Quick Start Guide  (front matter title)
- ## Prerequisites
- ## Step-by-step
- ## Example
- ### Example: Create a Workflow
- ### API Example
- ## Troubleshooting
- ## Related Documentation
```

### Formatting Requirements

#### Lists

- Use bullets for unordered lists
- No periods at end of list items
- Use Oxford comma in series

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
- Prefer absolute doc-root paths starting with / for internal links. This makes refs stable across pages and Mintlify navigation consistent.
- Format: [Link text](/section/subsection/page)
- Examples:
  - [Quick Start Guide](/getting-started/quick-start-guide)
  - [Scheduling](/workflow-management/scheduling)
  - [Tables](/reporting-analytics/tables)
- If you must link to a sibling or child MDX file within the same folder in authoring (relative links are allowed), keep them consistent: `./sibling-page` or `../other-section/page` but convert to absolute paths in front matter slug if desired.

External links
- Use full URLs and add a short note for external destinations if they require credentials or billing.
- Example: [AWS Documentation](https://docs.aws.amazon.com/)
- For external links that should open in a new tab, prefer a short inline HTML anchor only when necessary: <a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a>. Use sparingly; Mintlify may control link behavior in the platform.

Cross-references and anchors
- Link to sections in the same page using hash anchors based on heading text. Prefer automatic slugified anchors generated by the system. Example: [Troubleshooting](#troubleshooting)
- When linking to a specific example or code block in another page, reference the section anchor: [API Example](/getting-started/quick-start-guide#api-example)

Link maintenance and validation
- Before publishing, run a link-checker to validate internal and external links. Fix broken links or update slugs.
- Prefer linking to the canonical doc page (not to a snippet) — link to the high-level guide and reference snippets rather than duplicating content.

When to use each approach
- Use absolute doc-root links for production-facing navigation and cross-site references.
- Use relative links for in-repo authoring convenience only if you have a build step that normalizes them to absolute paths.
- Use external links for third-party docs, downloads, or cloud provider references. Annotate any link that requires authorization, billing, or has costs.

Observed link formatting patterns (exact examples to follow):
- Internal absolute example: [Investigate Workflow Run](/workflow-management/investigate-workflow-run)
- Relative example (authoring): [Scheduling](./scheduling.mdx)
- External example: [Node.js](https://nodejs.org/)

Accessibility and link text
- Use descriptive link text (avoid ‘click here’). Include the destination type if not obvious (e.g., "View API reference for workflows").
- If linking to downloadable assets, include file size and format where practical.

Summary rules
- Always prefer absolute doc-root internal links, keep link text descriptive, validate links regularly, and annotate external/billing links.

### Documentation Content Examples
- Below are examples of existing documentation that you should use for reference, including formatting, structure, layout, style, and language.
- The start and end of the following examples is marked by 10 dashes in a row, like this ----------. The 10 dashes in a row are not part of the formatting or content of the examples.

undefined

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


*Generated on: 2025-10-07T14:12:20.803Z*
