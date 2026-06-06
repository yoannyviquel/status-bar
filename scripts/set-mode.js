#!/usr/bin/env node
// Change the consumption status-line render mode at any time.
//
// Usage: node set-mode.js [full|compact|ultra]
//   no arg  -> print the current mode and the available modes
//
// Writes `mode` into ~/.claude/gradient-statusline.config.json (preserving
// baseCommand). The status line reads this file on every refresh, so the change
// takes effect on the next render — no Claude Code restart needed.
const fs = require('fs');
const os = require('os');
const path = require('path');

const MODES = ['full', 'compact', 'ultra'];
const DESC = {
  full: '10-cell gradient bars (1 cell / 10%)',
  compact: '5-cell gradient bars (1 cell / 20%)',
  ultra: 'percentage inside a gradient box (no bars)',
};

const configPath = path.join(os.homedir(), '.claude', 'gradient-statusline.config.json');

function loadConfig() {
  try { return JSON.parse(fs.readFileSync(configPath, 'utf8')) || {}; }
  catch { return {}; }
}

const arg = (process.argv[2] || '').trim().toLowerCase();
const cfg = loadConfig();
const current = MODES.includes(cfg.mode) ? cfg.mode : 'full';

if (!arg || arg === 'status') {
  console.log('Current mode: ' + current);
  console.log('Available   : ' + MODES.map((m) => (m === current ? `[${m}]` : m)).join(', '));
  for (const m of MODES) console.log(`  ${m.padEnd(8)} — ${DESC[m]}`);
  process.exit(0);
}

if (!MODES.includes(arg)) {
  console.error(`✗ unknown mode "${arg}". Choose one of: ${MODES.join(', ')}`);
  process.exit(1);
}

cfg.mode = arg;
if (typeof cfg.baseCommand !== 'string') cfg.baseCommand = '';
fs.mkdirSync(path.dirname(configPath), { recursive: true });
fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2) + '\n', 'utf8');

console.log(`✓ Status-line mode set to "${arg}" — ${DESC[arg]}.`);
console.log('  Takes effect on the next status-line refresh (no restart needed).');
