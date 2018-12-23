// Utility method to generate a syntax token
export default (name, color, fontStyle) => ({
  scope: name,
  settings: {
    foreground: color,
    fontStyle,
  },
})
