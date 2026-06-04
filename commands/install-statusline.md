---
description: Install the gradient progress-bar status line into your Claude Code settings
allowed-tools: Bash(node:*)
---

Run the installer that copies the gradient status line script into `~/.claude/`
and configures `statusLine` in the user `settings.json` (an existing config is
backed up to `settings.json.bak` first).

Execute exactly this command and report its output to the user:

```
node "${CLAUDE_PLUGIN_ROOT}/scripts/install.js"
```

After it succeeds, tell the user to restart Claude Code (or open a new session)
for the status line to take effect. If `settings.json` was already pointing at a
different status line, mention that the previous one was replaced and the backup
location.
