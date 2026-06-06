---
description: Install the gradient progress-bar status line into your Claude Code settings
allowed-tools: Bash(node:*)
argument-hint: "[full|compact|ultra]"
---

Run the installer that copies the consumption status-line script into
`~/.claude/` and configures `statusLine` in the user `settings.json` (an existing
config is backed up to `settings.json.bak` first).

The installer is **additive**: it renders only the consumption indicators and,
if a status line was already configured, runs it for the prefix and appends the
indicators — it does not discard the user's existing line.

An optional render mode may be passed as an argument (default `full`):

- `full` — 10-cell gradient bars (1 cell per 10%)
- `compact` — 5-cell gradient bars (1 cell per 20%)
- `ultra` — the percentage inside a gradient-filled box (no bars)

Execute exactly this command and report its output to the user:

```
node "${CLAUDE_PLUGIN_ROOT}/scripts/install.js" $ARGUMENTS
```

After it succeeds, tell the user to restart Claude Code (or open a new session)
for the status line to take effect. If `settings.json` was already pointing at a
different status line, mention that it was preserved as the prefix. The mode can
be changed at any time afterwards with `/statusline-mode`.
