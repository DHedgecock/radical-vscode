import { BLUES, GRAYS } from '../colors'
import { token } from '../utils'

export const yaml = [
  // Property keys
  token('entity.name.tag.yaml', GRAYS[300]),

  // Property values (sting and unquoted)
  token('source.yaml string', BLUES[100]),

  // Punctuation (sequence -> yaml arrays)
  token(
    'source.yaml punctuation.separator, source.yaml punctuation.definition.sequence',
    GRAYS[500],
  ),
]
