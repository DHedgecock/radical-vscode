import { token } from '../utils.mjs'
import { BLUE, PINK } from '../colors-tokens.mjs'

export const comment = [
  // Documentation comment blocks
  token('comment.block.documentation', BLUE[400]),

  // @tags for JSDoc
  token('comment.block.documentation storage', PINK[300]),

  // {type} for JSDoc
  token('comment.block.documentation entity', BLUE[500]),

  // name of JSDoc variables documentation
  token('variable.other.jsdoc', BLUE[100]),
]
