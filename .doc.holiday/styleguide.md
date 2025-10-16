# Documentation Style Guide

## Project Summary

Project summary and analysis

Project: OpenOps (Beta) Documentation
Description: OpenOps is a No-Code FinOps automation platform that helps organizations reduce cloud costs and streamline financial operations. The docs cover product overviews, deployment and installation guides, workflow building and management, integrations, cloud access configurations, AI assistance, snippets (operational runbooks), and reporting/analytics. Publishing system: Mintlify (front-matter-based MDX pages).

Audience
- Primary: Cloud engineers, SREs, FinOps practitioners, platform administrators, and DevOps/IT teams who install, configure, and operate OpenOps. They need step-by-step deployment guides, configuration reference, and runbook snippets.
- Secondary: Product managers and technical evaluators seeking feature overviews and ROI/benefit content.

Content types present
- Concept pages / overviews (overview.mdx, features-and-benefits.mdx)
- Getting started and quick-start tutorials (quick-start-guide.mdx, local.mdx, aws-ec2.mdx)
- How-to / procedural guides (building-workflows.mdx, scheduling.mdx, passing-data.mdx)
- Reference / configuration (system-requirements.mdx, access-levels-permissions.mdx, aws-cf-role-stack.mdx)
- Workflow / lifecycle documentation (workflow-version-history-lifecycle.mdx, workflow-templates.mdx)
- Snippets / runbooks (restart-containers.mdx, env-update-credentials.mdx)
- API documentation (explicitly present in the repo metadata summary)
- Tables and data-visualization pages (reporting-analytics/tables.mdx)

Technical complexity
- Medium to high. The content mixes conceptual (FinOps basics, high-level feature descriptions) with hands-on deployment (VMs, cloud roles, system requirements) and advanced topics (workflow branching, human-in-the-loop flows, API examples). Writers should assume readers know cloud basics but provide explicit steps and commands.

Writing patterns and conventions observed (summary)
- Files are MDX (.mdx) and use front-matter metadata fields consistently: title, description, icon, iconType.
- Table of contents is used (TOC present in content features), and front matter contains metadata for navigation and icons.
- File names use kebab-case and map directly to long-form topic titles.
- Directory structure groups content by product area: getting-started, deployment, workflow-management, snippets, integrations, cloud-access, ai-assistance, reporting-analytics, introduction.
- Examples present: code blocks, tables, and API reference snippets are used. Snippets folder contains operational commands or short runbooks.

Pattern extraction (exact patterns and examples)

Heading hierarchy patterns (exact examples inferred from filenames and standard doc patterns)
- H1 (document title) — single top-level title coming from front matter title (rendered as page H1). Example titles from front matter fields: "Overview", "Quick Start Guide", "Building Workflows", "Workflow Templates".
- H2 (major sections) — Used for core sections within a page. Example H2s to copy from file names/sections: "Prerequisites", "Installation", "Configuration", "Usage", "Troubleshooting", "Scheduling".
- H3 (subsections) — For sub-steps, options, or detailed explanations. Example H3s: "Create AWS Role", "Passing Data Between Actions", "Human in the Loop Parameters".
- H4+ — Rare, for very specific technical details such as response schema fields, CLI flags, or lifecycle event tables.

Exact heading examples (use these literal phrased headings as canonical examples)
- H1: Overview
- H2: Quick Start
- H2: Prerequisites
- H2: Installation
- H2: Configuration
- H2: Usage
- H2: Troubleshooting
- H3: Create AWS CloudFormation Role Stack
- H3: Passing Data Between Actions

Link formatting patterns (exact examples)
- Internal link — absolute path from docs root (recommended): [Quick Start Guide](/getting-started/quick-start-guide)
- Internal link — relative path (allowed in nested content): [Restart containers](../snippets/restart-containers)
- Anchor link to a heading in same page: [See Troubleshooting](#troubleshooting)
- External link — full URL: [AWS Docs](https://docs.aws.amazon.com/)
- Link to file path including extension (if necessary): [Workflow Templates](/workflow-management/workflow-templates.mdx)

Front matter fields (exact formatting observed)
- Required fields: title, description, icon, iconType
- Observed usage (counts): title (37), description (37), icon (37), iconType (1)

Exact front matter field names and minimal example (must be used in each MDX file):
---
title: "<Page Title>"
description: "<Short description: 1–2 sentences>"
icon: "<icon-name-or-emoji>"
iconType: 1
---

Directory organization patterns (exact examples from repo)
- Top-level directories represent major product areas: getting-started, introduction, workflow-management, snippets, reporting-analytics, integrations, cloud-access, ai-assistance.
- Subfolders exist for deployment variants under getting-started/deployment.
- Filenames are kebab-case and unique per topic (e.g., quick-start-guide.mdx, aws-ec2.mdx, workflow-templates.mdx).

Other patterns
- Repeated filenames in listing (e.g., overview.mdx appears multiple times in 'introduction' — ensure deduplication and canonical file presence).
- Snippets contain short runbooks or small operational docs and should be concise (title, problem statement, steps, commands, verification).

Examples of good documentation patterns found (concrete examples)
- Quick Start Guide (procedural): clear step-by-step install + commands + expected results. Example skeleton:
  - H2: Prerequisites
  - H2: Installation
  - H3: Local (or Cloud) steps
  - Code block: fenced triple-backticks with language
  - H2: Verify
  - H2: Troubleshooting

- API example (pattern): short description, endpoint, request example, response example. Example Markdown structure:
  - H2: API: Create Workflow
  - H3: Endpoint
    ```http
    POST /api/v1/workflows
    ```
  - H3: Request
    ```json
    { "name": "cleanup", "triggers": [...] }
    ```
  - H3: Response
    ```json
    { "id": "w-123", "status": "created" }
    ```

- Table example (pattern): use Markdown tables for small datasets; use code block plus table for larger schema. Example:
| Field | Type | Description |
|---|---:|---|
| id | string | Unique identifier |
| cost | number | Monthly estimated cost |



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

#### Default Tone (Technical Users)
- Direct and practical language
- Assume familiarity with TypeScript, package managers, CLI
- Use technical jargon and shorthand
- Focus on code examples over explanations
- Avoid marketing language or benefit statements

#### Non-Technical User Adjustments
When explicitly writing for non-technical users:
- Explain what each command does and why
- Spell out abbreviations and technical terms
- Provide simpler code examples with explanations
- Include more step-by-step guidance
- Link to additional learning resources

### Publishing System Requirements
Mintlify publishing requirements and front matter templates

General rules
- Files must be MDX (.mdx) unless a platform-specific exception exists.
- Use a single front-matter block at the top of each MDX file. Mintlify uses YAML front matter between triple dashes.
- Every page MUST include the required metadata fields: title, description, icon, iconType.
- Keep description short (1–2 sentences). This is used for search snippets and card descriptions.
- Use kebab-case filenames that map to the canonical URL path.
- Include a clear H1 (document title). The H1 is rendered from the page title; avoid duplicating the title in the body.
- Include a Table of Contents if the page length exceeds ~500 words (Mintlify may auto-generate a TOC; ensure headings follow structure so TOC is meaningful).

Exact front matter template (required fields)

---
title: "<Page Title>"
description: "<One-line description of the page content>"
icon: "<emoji-or-icon-name>"
iconType: 1
# optional fields (use when needed):
# tags: ["getting-started","deployment"]
# slug: "/custom-path" # when overriding canonical path
# aliases: ["/old/path"]
---

Notes about icon/iconType
- icon: pick a short string (emoji or icon name consistent with Mintlify icon set). Keep it consistent across the product nav.
- iconType: use 1 unless there is a documented reason for other values in Mintlify setup. The repo shows iconType: 1 being used.

Code and API documentation conventions
- Use fenced code blocks with language annotations for syntax highlighting. Examples:
  ```bash
  ./install.sh --env local
  ```
  ```json
  { "name": "my-workflow" }
  ```
  ```http
  POST /api/v1/workflows
  ```
- For API reference pages, include:
  - Short summary
  - Endpoint (method + path)
  - Request example (JSON)
  - Response example (JSON)
  - Error codes / status table
- Use consistent formatting for request/response examples; prefer complete JSON objects, not fragments.

Tables
- Use Markdown tables for small reference tables. For large tables or tabular data with many columns, prefer a concise summary + downloadable CSV/JSON.
- Keep table column headers Title Case.

Publishing checklist (before merging)
- Front matter present with required fields
- Unique and descriptive title
- Short description present
- File is placed in the correct directory according to topic
- Headings follow the prescribed hierarchy (one H1, H2s for major sections, etc.)
- Code blocks language-tagged
- Internal links use canonical path style
- Run link-checker to ensure no broken internal/external links

Additional Mintlify tips
- Avoid duplicate filenames across directories (deduplicate overview.mdx occurrences).
- Use tags in front matter to improve search and grouping if supported by the Mintlify site configuration.


### Content Structure Rules
Content organization guidelines

General principles
- One topic per page. Aim for discoverability and scannability: clear H2 sections, short paragraphs, and code blocks for commands.
- Put the most important information 'above the fold' — quick description, who it's for, and a 1–2 line summary at top.
- Use numbered steps for sequences and bulleted lists for non-sequential items.

Technical Documentation Pages
- Start: short summary (1–2 sentences) and audience.
- Next: Prerequisites (tools, permissions, versions).
- Core: Step-by-step instructions (Installation → Configuration → Usage).
- Examples: Minimal viable example then a full example.
- End: Verification steps and Troubleshooting / Common Errors.
- Include code blocks with example inputs/outputs and, where relevant, full JSON request/response examples.

Process / How-to Pages
- Begin with a short purpose statement.
- List prerequisites and the expected outcome.
- Provide numbered steps. Each step should be a short paragraph followed by a code block or command if necessary.
- Include a verification step and expected output snippet.
- Add a Troubleshooting section that ties to common failure modes and fixes.

Reference / API Pages
- Use a consistent structure: Summary → Endpoint → Parameters → Request Example → Response Example → Error codes.
- Use tables for parameter lists (Name, Type, Required, Description).

Snippets / Runbooks
- Title: short action-oriented name (Restart containers, Update credentials)
- Problem: 1–2 lines describing when to use.
- Steps: concise numbered steps.
- Commands: copy-paste ready fenced code blocks.
- Verification: how to confirm success.
- Safety notes: required permissions, non-production warnings (link to non-production-disclaimer if present).


#### Heading Rules
```markdown
Heading style and hierarchy for OpenOps docs

H1 (Single per file)
- Use exactly one H1 per document. This should match the title in front matter.
- No trailing punctuation.
- Examples: "Overview", "Quick Start Guide", "Building Workflows"

H2 (Major sections)
- Use for top-level organization within a page: Prerequisites, Installation, Configuration, Usage, API, Examples, Troubleshooting, References.
- Capitalization: Title Case (capitalize main words) for section names.
- Examples: "Prerequisites", "Installation", "Configuration", "Troubleshooting"

H3 (Subsections)
- Use for steps, subtopics, parameters, and detailed breakdowns under H2 sections.
- Examples: "Create AWS CloudFormation Role Stack", "Passing Data Between Actions", "API: Create Workflow"

H4 and below (Rare usage)
- Only for deeply nested technical details (field-by-field schema descriptions, long tables, or advanced config options).
- Prefer avoiding beyond H4 where possible—split into separate pages instead.

Formatting rules for headings
- Use Title Case for all headings (not ALL CAPS).
- Do not include trailing punctuation on headings.
- Keep headings concise (ideally 3–6 words for H2/H3).
- Where appropriate, include short descriptive headings for code examples, e.g., "Request Example" and "Response Example".

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
- Preferred style: absolute path from the doc root to keep links stable across contexts.
  - Example: [Quick Start Guide](/getting-started/quick-start-guide)
- Relative links: permitted for tightly-coupled sibling pages or content that will move together.
  - Example: [Restart containers](../snippets/restart-containers)
- Link text: use descriptive text that explains the destination (avoid "click here").
- When linking to a heading in the same page use anchor links formatted as lowercase, hyphenated headings with no special characters.
  - Example: [See Troubleshooting](#troubleshooting)

External links
- Use full URLs and open in the same tab (unless there is a product requirement to open new tabs).
  - Example: [AWS Documentation](https://docs.aws.amazon.com/)
- Mark external links with an icon or explicit note when linking to sites requiring an account or when they contain billing-sensitive instructions.

Cross-reference and navigation standards
- Prefer linking to canonical pages in the directory structure, not to raw files in the repo.
- When multiple pages cover similar topics, create a parent index page (e.g., Workflow Management index) that links to subtopics.
- Use link validation as part of pre-merge checks. Run a link checker to catch broken internal/external links.
- For redirects and renamed pages, add aliases in front matter (aliases: ["/old/path"]) to avoid 404s and maintain external links.

When to use each linking approach
- Absolute internal path: when linking from any place in the docs to a stable canonical page.
- Relative path: when writing a page within the same section and both pages are expected to remain together.
- External link: when pointing to vendor docs, SDKs, or third-party integrations.

Maintenance
- Every major release or restructuring must include a link sweep to update internal references.
- Keep a short list of high-traffic pages (Quick Start, Installation) that must not be moved without redirects/aliases.


### Documentation Content Examples
- Below are examples of existing documentation that you should use for reference, including formatting, structure, layout, style, and language.
- The start and end of the following examples is marked by 10 dashes in a row, like this ----------. The 10 dashes in a row are not part of the formatting or content of the examples.

undefined

## Existing Documentation Directory Structure
Directory structure and recommended content mapping

Top-level directories (what to put where):
- introduction/
  - Purpose: Conceptual overview, product mission, features & benefits, who should use OpenOps.
  - Example files: overview.mdx, features-and-benefits.mdx
  - Tone: high-level, persuasive, non-procedural.

- getting-started/
  - Purpose: Onboarding, quick start, installation, user management, system requirements.
  - Example files: quick-start-guide.mdx, system-requirements.mdx, user-management.mdx, updating-openops.mdx
  - Subfolder: getting-started/deployment for platform-specific deployment instructions (local, aws-ec2, gcp-vm, azure-vm).
  - Tone: step-by-step, actionable, with verification steps and common troubleshooting.

- getting-started/deployment/
  - Purpose: Platform-specific deployment instructions and variants.
  - Example files: local.mdx, aws-ec2.mdx, gcp-vm.mdx, azure-vm.mdx
  - Structure: Each file should have Prerequisites, Steps, Verify, Troubleshooting.

- workflow-management/
  - Purpose: Building workflows, actions, conditional branching, scheduling, lifecycle and versioning, templates, run investigations.
  - Example files: building-workflows.mdx, actions.mdx, conditional-branching.mdx, scheduling.mdx, workflow-templates.mdx, workflow-version-history-lifecycle.mdx, investigate-workflow-run.mdx
  - Tone: technical, example-driven, include screenshots or workflow diagrams where appropriate.

- snippets/
  - Purpose: Short operational runbooks and reusable task snippets (one problem, one solution). Should be concise and copy-paste ready.
  - Example files: restart-containers.mdx, env-update-credentials.mdx, tls.mdx, update-link.mdx, auto-install.mdx, non-production-disclaimer.mdx
  - Structure: Problem statement, Steps (numbered), Commands (fenced), Verification.

- reporting-analytics/
  - Purpose: Tables, data-visualization, how to interpret reports, sample dashboards.
  - Example files: tables.mdx, data-visualization.mdx

- cloud-access/
  - Purpose: Cloud provider access patterns, permissions, roles, and provider-specific guides (e.g., AWS CloudFormation roles)
  - Example files: multi-cloud.mdx, aws-cf-role-stack.mdx, access-levels-permissions.mdx

- integrations/
  - Purpose: Third-party integrations (e.g., CloudHealth), configuration steps, and notes about data ingestion.
  - Example files: cloudhealth.mdx

- ai-assistance/
  - Purpose: LLM / AI integration overviews and configuration
  - Example files: overview.mdx, llm-connections.mdx

Root files
- README.md and docs.json: repository-level metadata and contributor-facing instructions. Keep these up-to-date with structure guidance and contribution process.

Best practices for directories
- One topic per file. If content grows beyond ~2,000 words, split into multiple focused pages.
- Keep filenames unique and descriptive (no duplicate 'overview.mdx' across different directories unless intentionally different scoped). If duplicates exist, rename to 'overview-introduction.mdx' vs 'overview-ai-assistance.mdx' or consolidate.
- Place short reusable content in snippets; do not bloat snippets with long conceptual content.



*Generated on: 2025-10-16T09:15:27.988Z*
