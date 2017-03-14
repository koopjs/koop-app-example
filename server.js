const config = require('config')
const Koop = require('koop')
const koop = new Koop(config)

// providers
const agol = require('koop-agol')
const zillow = require('koop-zillow')
const craigslist = require('koop-craigslist')
const trimet = require('koop-trimet')

// register koop providers
koop.register(agol)
koop.register(zillow)
koop.register(craigslist)
koop.register(trimet)

// This is how you implement additional arbitrary routes on the Koop server
koop.server.get('/', function (req, res) {
  res.render('index', { status: koop.status })
})

const port = config.port || 8080
// start the server
koop.server.listen(port, () => koop.log.info(`Koop server listening at ${port}`))
