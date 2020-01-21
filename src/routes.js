const welcome = require('./request-handlers/welcome')

module.exports = [
  {
    path: '/',
    methods: ['get'],
    handler: welcome
  }
]
