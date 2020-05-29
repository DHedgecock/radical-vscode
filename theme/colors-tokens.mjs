import { BORDERS, PRIMARY_BACKGROUND } from './colors-workbench.mjs'

export const BLUE = {
  100: '#BAF7FC',
  400: '#75B7BB',
  500: '#45898C',
}

export const PINK = {
  300: '#fda8bc',
}

export default {
  comment: BLUE[500],
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
  'terminal.foreground': '#A8D2D4',
  // Border between multiple terminals
  'terminal.border': BORDERS[200],

  'terminal.selectionBackground': '#874df84d',

  'terminalCursor.background': '#ff428e',
  'terminalCursor.foreground': '#defff7',

  'terminal.ansiBlack': '#30317D',
  'terminal.ansiBrightBlack': '#391AB5',

  'terminal.ansiBlue': '#3d3de6',
  'terminal.ansiBrightBlue': '#1A2AB5',

  'terminal.ansiMagenta': '#fa61b8',
  'terminal.ansiBrightMagenta': '#d5358f',

  'terminal.ansiRed': '#FF5395',
  'terminal.ansiBrightRed': '#FF427B',

  'terminal.ansiGreen': '#D8FF4E',
  'terminal.ansiBrightGreen': '#C8FF00',

  'terminal.ansiYellow': '#FFFC7E',
  'terminal.ansiBrightYellow': '#F8D846',

  'terminal.ansiCyan': '#BAF7FC',
  'terminal.ansiBrightCyan': '#a9fef7',

  'terminal.ansiWhite': '#cff0e8',
  'terminal.ansiBrightWhite': '#cbfff2',
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
