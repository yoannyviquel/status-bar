---
description: Change the consumption status-line render mode (full / compact / ultra)
allowed-tools: Bash(node:*)
argument-hint: "[full|compact|ultra]"
---

Change the render mode of the consumption status line. Modes:

- `full` — 10-cell gradient bars (1 cell per 10%)
- `compact` — 5-cell gradient bars (1 cell per 20%)
- `ultra` — the percentage inside a gradient-filled box (no bars)

Run exactly this command and report its output to the user:

```
node "${CLAUDE_PLUGIN_ROOT}/scripts/set-mode.js" $ARGUMENTS
```

If the user passed no argument, the command prints the current mode and the
available ones — relay that. If they passed a mode, it is applied immediately
(the status line reads the mode on every refresh, so **no restart is needed**).
