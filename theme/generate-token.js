// Utility method to generate a syntax token
module.exports = (name, color, fontStyle) => ({
  scope: name,
  settings: {
    foreground: color,
    fontStyle,
  },
})
