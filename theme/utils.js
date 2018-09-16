module.exports.alpha = (color, opacity) => {
  const c = Math.round(opacity * 255)
  const hex = (c + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase()
  return color + hex
}

// Utility method to generate a syntax token
module.exports.token = (name, color, fontStyle) => ({
  scope: name,
  settings: {
    foreground: color,
    fontStyle,
  },
})
