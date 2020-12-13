import { token } from '../utils.mjs'
import { BLUES, GRAYS, TEALS } from '../colors-tokens.mjs'

export const react = [
  // JSX HTML names, eg <div
  token('entity.name.tag', BLUES[300]),

  // JSX tags punctuation, eg: </
  token('punctuation.definition.tag', GRAYS[400]),

  // JSX component names, eg <Radical
  token('support.class.component', TEALS[300]),
]
