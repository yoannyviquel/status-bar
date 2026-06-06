---
description: Change the consumption status-line render mode (full / medium / compact)
allowed-tools: Bash(node:*)
argument-hint: "[full|medium|compact]"
---

Change the render mode of the consumption status line. Modes:

- `full` — 10-cell gradient bars (1 cell per 10%)
- `medium` — 5-cell gradient bars (1 cell per 20%)
- `compact` — the percentage inside a gradient-filled box (no bars)

Run exactly this command and report its output to the user:

```
node "${CLAUDE_PLUGIN_ROOT}/scripts/set-mode.js" $ARGUMENTS
```

If the user passed no argument, the command prints the current mode and the
available ones — relay that. If they passed a mode, it is applied immediately
(the status line reads the mode on every refresh, so **no restart is needed**).
