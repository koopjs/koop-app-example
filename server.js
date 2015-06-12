var cors = require('cors');
var config = require('config');
var koop = require('koop')(config);
var pgCache = require('koop-pgcache');
var socrata = require('koop-socrata');
var ckan = require('koop-ckan');
var github = require('koop-github');
var agol = require('koop-agol');
var gist = require('koop-gist');
var path = require('path');
var app = require('express')();
var server;

// use HTTPS if it's included in the configuration
if (config.https_server &&
    config.https_server.private_key &&
    config.https_server.public_key) {
  var https = require('https');
  var fs = require('fs');
  var options = {
    key: fs.readFileSync(config.https_server.private_key),
    cert: fs.readFileSync(config.https_server.public_key)
  };
} else {
  // use http module by default
  var http = require('http');
}

// register PostGIS cache
koop.registerCache(pgCache);

// register koop providers
koop.register(socrata);
koop.register(ckan);
koop.register(github);
koop.register(gist);
koop.register(agol);

app.set('port', process.env.PORT || config.server.port || 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors()); // add CORS support (recommended)
app.use(koop); // add koop middleware

app.get('/status', function (req, res) {
  res.json(koop.status);
});

app.get('/', function (req, res) {
  res.render('index', { status: koop.status });
});

if (config.https_server) {
  server = https.createServer(options, app);
} else {
  server = http.createServer(app);
}

// start the server
server.listen(app.get('port'), function () {
  console.log('Express koop server listening on port ' + app.get('port'));
})
