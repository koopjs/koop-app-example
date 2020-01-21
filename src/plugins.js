const github = require('@koopjs/provider-github')
const craigslist = require('koop-provider-craigslist')

// list different types of plugins in order
const outputs = []
const auths = []
const caches = []
const plugins = [
  {
    instance: github
  },
  {
    instance: craigslist
  }
]

module.exports = [...outputs, ...auths, ...caches, ...plugins]
