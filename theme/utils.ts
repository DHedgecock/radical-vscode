import chroma from 'chroma-js'

export const alpha = (color: string, opacity: number) =>
  chroma(color).alpha(opacity).hex()

// Utility method to generate a syntax token
export const token = (name: string, color: string, fontStyle?: FontStyle) => ({
  scope: name,
  settings: {
    foreground: color,
    fontStyle,
  },
})

type FontStyle = 'italic' | 'bold' | 'underline' | 'italic bold' | 'italic bold underline'
