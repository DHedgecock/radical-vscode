const eloquence = require('eslint-config-eloquence')

const configs = eloquence({ target: 'node' })

configs.rules['import/extensions'] = ['error', 'always']

module.exports = configs
