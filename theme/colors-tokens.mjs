import { BACKGROUND, BORDER, PRIMARY } from './colors-workbench'

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
  'terminal.background': BACKGROUND,
  'terminal.border': BORDER,
  'terminal.foreground': '#a8c0c2',
  'terminal.selectionBackground': '#874df84D',
  'terminalCursor.background': BACKGROUND,
  'terminalCursor.foreground': PRIMARY,

  'terminal.ansiBlue': '#57d7ff',
  'terminal.ansiBrightBlue': '#10f8fc',

  'terminal.ansiGreen': '#78efc5',
  'terminal.ansiBrightGreen': '#77ffe7',

  'terminal.ansiMagenta': '#a82693',
  'terminal.ansiBrightMagenta': '#e0088f',

  'terminal.ansiCyan': '#aeffff',
  'terminal.ansiBrightCyan': '#87d3f8',

  'terminal.ansiRed': '#ff6ba6',
  'terminal.ansiBrightRed': '#ff5096',

  'terminal.ansiYellow': '#f8c86d',
  'terminal.ansiBrightYellow': '#fef554',

  'terminal.ansiBlack': '#333333',
  'terminal.ansiBrightBlack': '#4c4c4c',

  'terminal.ansiWhite': '#c7e3ee',
  'terminal.ansiBrightWhite': '#e3eff3',
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
