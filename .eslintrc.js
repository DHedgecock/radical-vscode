module.exports = {
  root: true,
  extends: 'eloquence/node',
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs'],
      },
    },
  },
}
