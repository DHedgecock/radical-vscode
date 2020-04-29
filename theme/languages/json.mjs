import { token } from '../utils.mjs'
import { BLUE } from '../colors-tokens.mjs'

export const json = [
  // Property keys
  token('support.type.property-name.json', '#7c9c9e'),

  // Property values
  token('source.json string', BLUE[100]),

  // Punctuation (Object and Array)
  token(
    'source.json punctuation.separator, source.json punctuation.definition.dictionary, source.json punctuation.definition.array',
    BLUE[500],
  ),
]
