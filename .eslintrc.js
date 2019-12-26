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
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
