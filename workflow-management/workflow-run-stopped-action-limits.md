---
title: "Workflow Run Stopped: Action Limits"
description: "Understand and resolve workflow runs stopped due to action limits in OpenOps."
icon: "⏹️"
iconType: "emoji"
tags: ["workflow-management", "troubleshooting"]
draft: false
sidebar_order: 80
---

When running a workflow in OpenOps, you may encounter the message:

```plaintext
Run stopped due to Action Limits
```

This page explains what this message means, common causes, and how to resolve or avoid it.

## What Does This Mean?
This message indicates your workflow execution was automatically terminated because it hit one or more defined limits for action runs. Limits exist to help prevent runaway workflows, manage costs, and maintain system stability.

## Common Causes
- **Too many total actions:** The workflow attempted more actions than allowed by your workspace or plan.
- **Looping or recursion:** A step or condition caused the workflow to call actions repeatedly.
- **High-frequency triggers:** Automated schedules or event triggers generated an excessive number of runs in a short period.

## How to Fix
1. **Check the workflow definition**
   - Review your actions, loops, and branching logic. Ensure no infinite or excessive loops.
2. **Reduce number of actions**
   - Optimize workflow branches or use filters to skip unnecessary actions.
3. **Review workspace limits**
   - Check action limits in your OpenOps workspace or plan. Adjust your workflow to stay within these limits, or [contact OpenOps support](/README.md) if you need higher limits.
4. **Monitor triggers**
   - Reduce schedule or event frequency if excessive runs are being started.

## Troubleshooting Steps
1. Go to [Investigate Workflow Run](/workflow-management/investigate-workflow-run) for failed/stopped run details.
2. Locate the step or condition that caused the limit to be exceeded.
3. Adjust workflow logic or split the workflow into smaller segments.

## Related Documentation
- [Building Workflows](/workflow-management/building-workflows)
- [Investigate Workflow Run](/workflow-management/investigate-workflow-run)
- [Conditional Branching](/workflow-management/conditional-branching)

If the problem persists after resolving looping or excess actions, review your workspace's OpenOps plan or reach out via your usual support channel.