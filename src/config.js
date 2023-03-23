const fs = require('fs')
const toml = require('toml')

const configuration = toml.parse(fs.readFileSync('./config.toml', 'utf-8'))

module.exports = configuration