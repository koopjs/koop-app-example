var path = require('path')
var cors = require('cors')
var config = require('config')
var logger = require('morgan')
var errorHandler = require('errorhandler')
var express = require('express')
var koop = require('koop')(config)

// cache
var pgCache = require('koop-pgcache')

// providers
var agol = require('koop-agol')
var gist = require('koop-gist')
var github = require('koop-github')
var socrata = require('koop-socrata')

var app = express()
var server

// use HTTPS if it's included in the configuration
if (config.https_server &&
  config.https_server.private_key &&
  config.https_server.public_key) {
  var https = require('https')
  var fs = require('fs')
  var options = {
    key: fs.readFileSync(config.https_server.private_key),
    cert: fs.readFileSync(config.https_server.public_key)
  }
} else {
  // use http module by default
  var http = require('http')
}

// register PostGIS cache
koop.registerCache(pgCache)

// register koop providers
koop.register(agol)
koop.register(gist)
koop.register(github)
koop.register(socrata)

app.set('port', process.env.PORT || config.server.port || 1337)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cors()) // add CORS support (recommended)
app.use(koop) // add koop middleware

if (app.get('env') === 'production') {
  app.use(logger('combined'))
} else {
  app.use(logger('dev'))
  app.use(errorHandler())
}

app.get('/', function (req, res) {
  res.render('index', { status: koop.status })
})

if (config.https_server) {
  server = https.createServer(options, app)
} else {
  server = http.createServer(app)
}

// start the server
server.listen(app.get('port'), function () {
  koop.log.info('Koop %s server listening at %s', app.get('env'), app.get('port'))
})
