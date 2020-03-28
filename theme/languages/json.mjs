import { token } from '../utils.mjs'

export const json = [
  // Property keys
  token('support.type.property-name.json', '#7c9c9e'),

  // Property values
  token('source.json string', '#baf7fc'),

  // Object and array punctuation
  token(
    'source.json punctuation.definition.dictionary, source.json punctuation.definition.array',
    '#45566b'
  ),

  // Key value colons
  token('source.json punctuation.separator', '#3f405f'),
]
