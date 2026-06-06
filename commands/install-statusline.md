---
description: Install the consumption status line (prompts for the render mode)
allowed-tools: Bash(node:*)
argument-hint: "[full|compact|ultra]"
---

Install the consumption status line: copy the script into `~/.claude/` and wire
`statusLine` in the user `settings.json` (an existing config is backed up to
`settings.json.bak` first).

The installer is **additive**: it renders only the consumption indicators and,
if a status line was already configured, runs it for the prefix and appends the
indicators — it never discards the user's existing line.

Steps:

1. **Determine the render mode.**
   - If `$ARGUMENTS` already contains `full`, `compact`, or `ultra`, use that — skip to step 2.
   - Otherwise ask the user with **AskUserQuestion** (header `Mode`, question
     "Which status-line render mode do you want?") with these options:
     - **full** — 10-cell gradient bars, 1 cell / 10% (e.g. `ctx:██░░░░░░░░ | →1pm:███░░░░░░░ | →Jun12:█░░░░░░░░░`)
     - **compact** — 5-cell gradient bars, 1 cell / 20%
     - **ultra** — tight % on a gradient background, no bars (e.g. `ctx34%→1am62%→Jun1118%`)

2. **Run the installer** with the chosen mode (report its output to the user):

   ```
   node "${CLAUDE_PLUGIN_ROOT}/scripts/install.js" <mode>
   ```

3. After it succeeds, tell the user to **restart Claude Code** (or open a new
   session) for the status line to take effect. If `settings.json` was already
   pointing at a different status line, mention it was preserved as the prefix.
   Note the mode can be changed anytime afterwards with `/statusline-mode`.
