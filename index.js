const toSpace = require('to-space-case-g')

const toSnakeCase = string => toSpace(string).replace(/\s/g, '_')

module.exports = toSnakeCase
