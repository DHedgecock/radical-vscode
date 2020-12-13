import { token } from '../utils.mjs'
import { BLUES, PINKS } from '../colors-tokens.mjs'

export const go = [
  // --------------------------------------------------------
  // Functions

  // called functions, eg Println in: fmt.Println
  token('support.function', BLUES[150]),

  // --------------------------------------------------------
  // Keywords

  // control flow, eg: return, if
  // ⓘ matches js token 'keyword.control.flow'
  token('keyword.control', PINKS[500]),

  // module imports, eg: import ()
  token('keyword.import', PINKS[400]),
]
