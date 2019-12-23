import { PRIMARY_BACKGROUND, BORDER } from './colors-workbench'

/* eslint-disable import/no-anonymous-default-export */
export default {
  comment: '#a8c0c2',
  constant: '#fa61b8',
  entity: '#a6e2e0',
  keyword: '#d5358f',
  markup: '#a8c0c2', // nb: this default matches editor foreground default
  storage: '#ff85a1',
  string: '#a9fef7',
  support: '#7cb3b6',
  variable: '#c7e3ee',
  // --- Status syntax tokens
  invalid: '#ff427b',
}

export const terminal = {
  'terminal.background': PRIMARY_BACKGROUND,
  'terminal.foreground': '#defff7',
  // Border between multiple terminals
  'terminal.border': BORDER,

  'terminal.selectionBackground': '#874df84d',

  'terminalCursor.background': '#ff428e',
  'terminalCursor.foreground': '#defff7',

  'terminal.ansiBlack': '#2e324d',
  'terminal.ansiBrightBlack': '#62466b',

  'terminal.ansiBlue': '#b0fdeb',
  'terminal.ansiBrightBlue': '#6bf8ef',

  'terminal.ansiCyan': '#9d88fa',
  'terminal.ansiBrightCyan': '#7d77ff',

  'terminal.ansiGreen': '#d6fd6b',
  'terminal.ansiBrightGreen': '#c5fd44',

  'terminal.ansiMagenta': '#f899f8',
  'terminal.ansiBrightMagenta': '#f73bee',

  'terminal.ansiRed': '#f86c8a',
  'terminal.ansiBrightRed': '#f33990',

  'terminal.ansiWhite': '#c4f7eb',
  'terminal.ansiBrightWhite': '#e4fdf7',

  'terminal.ansiYellow': '#edf179',
  'terminal.ansiBrightYellow': '#f4f957',
}

/**
 * NOTES:
 *
 * Base color set includes mostly muted blue-grays for a semi-monocrhomatic
 * scheme with pops of color for important things. The idea being instead of
 * having lots of bright colors, the theme is low intensity and has judicious
 * use of bright colors.
 * Some important colors used indirectly are:
 * - #6bc2c8(for support shade)
 * - #d0f86f(saved for storage)
 */
