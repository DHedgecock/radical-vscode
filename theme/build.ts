import { promises as fs } from 'fs'
import path from 'path'

import { tokenColors } from './colors-tokens'
import { workbenchColors } from './colors-workbench'
import { comment } from './languages/comment'
import { go } from './languages/go'
import { html } from './languages/html'
import { javascript } from './languages/javascript'
import { json } from './languages/json'
import { markdown } from './languages/markdown'
import { react } from './languages/react'
import { yaml } from './languages/yaml'

// Create the base theme definition
// ---------------------------------------------------------------------------

const theme = {
  $schema: 'vscode://schemas/color-theme',
  author: 'Dan Hedgecock',
  name: 'Radical',
  colorSpaceName: 'sRGB',
  semanticClass: 'theme.dark.radical',
  // Editor theme styles
  colors: workbenchColors,
  tokenColors: [
    ...tokenColors,
    ...comment,
    ...go,
    ...html,
    ...markdown,
    ...javascript,
    ...json,
    ...react,
    ...yaml,
  ],
} as const

// Convert color variables to string values
// ---------------------------------------------------------------------------

// Delete any value that is null (as a convention this lets us track that all
// theme variables are being set by assigning values to all of them)
Object.entries(theme.colors).forEach(([key, value]) => {
  // @ts-expect-error -- Haven't gone to the trouble of typing the string index access yet
  if (value === null) delete theme.colors[key]
})

// Base file has been extended with additional theme styles and color variables have
// been replaced with Panda theme values. Write to /dist for consumption.
fs.writeFile(
  path.resolve(process.cwd(), 'dist/Radical.json'),
  JSON.stringify(theme, null, 2),
)
  .then(() => console.log('Build finished'))
  .catch((err) => console.warn(err))
