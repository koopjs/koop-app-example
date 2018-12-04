const config = require('config')
const Koop = require('koop')
const koop = new Koop(config)

// providers
const github = require('@koopjs/provider-github')
const craigslist = require('koop-provider-craigslist')

// register koop providers
koop.register(github)
koop.register(craigslist)

// This is how you implement additional arbitrary routes on the Koop server
koop.server.get('/', function (req, res) {
  res.status(200).send(`
Welcome to Koop!

Installed Providers:
Github
Craigslist

`)
})

const port = config.port || 8080
// start the server
koop.server.listen(port, () => koop.log.info(`Koop server listening at ${port}`))
