const config = require('config')
const Koop = require('koop')
const routes = require('./routes')
const plugins = require('./plugins')

// initiate a koop app
const koop = new Koop()

// register koop plugins
plugins.forEach((plugin) => {
  koop.register(plugin.instance, plugin.options)
})

// add additional routes
routes.forEach((route) => {
  route.methods.forEach((method) => {
    koop.server[method](route.path, route.handler)
  })
})

// start the server
koop.server.listen(config.port, () => koop.log.info(`Koop server listening at ${config.port}`))
