import { token } from '../utils.mjs'
import { BLUE } from '../colors-tokens.mjs'

export const yaml = [
  // Property keys
  token('entity.name.tag.yaml', '#7c9c9e'),

  // Property values (sting and unquoted)
  token('source.yaml string', BLUE[100]),

  // Punctuation (sequence -> yaml arrays)
  token(
    'source.yaml punctuation.separator, source.yaml punctuation.definition.sequence',
    BLUE[500],
  ),
]
