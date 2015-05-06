#!/usr/bin/env node
"use strict";

var express = require("express"),
  cors = require('cors'),
  config = require("config"),
  koop = require('koop')( config ),
  socrata = require('koop-socrata'),
  ckan = require('koop-ckan'),
  github = require('koop-github'),
  agol = require('koop-agol'),
  gist = require('koop-gist');
// in production you'll need to register our cache engine with postgis
//   pgCache = require('koop-pgcache');
// koop.registerCache( pgCache );

//register providers with koop
koop.register( socrata );
koop.register( ckan );
koop.register( github );
koop.register( gist );
koop.register( agol );

// require HTTPS if configured
if (config.https_server){
  var https = require('https');
  var fs = require('fs');
  var options = {
    key: fs.readFileSync(config.https_server.private_key),
    cert: fs.readFileSync(config.https_server.public_key)
	};
  }

// require HTTP
var http = require('http');

// create an express app
var app = express();
app.use( cors() );

app.use(function(req,res,next){
  var oldEnd = res.end;

  console.log(req.path, res.body, req.query, req.params );

  res.end = function() {
    console.log(req.path, res.statusCode);
    oldEnd.apply(res, arguments);
  };

  next();
});

app.use(function (req, res, next) {
  res.removeHeader("Vary");
  next();
});

// add koop middleware
app.use( koop );

app.get('/status', function(req, res){
  res.json( koop.status );
});

app.set('view engine', 'ejs');

// serve the index
app.get("/", function(req, res, next) {
  res.send('Koop Sample App!');
});

//serve content
if (config.https_server){
  https.createServer(options, app).listen(config.https_server.port);
  console.log("Listening at https://:%d/", config.https_server.port);
}

http.createServer(app).listen(process.env.PORT || config.server.port);
console.log("Listening at http://:%d/", config.server.port);


// Catch all errors
//process.on("uncaughtException", function(err){
//  var msg = "Uncaught Error: "+ err;
//  koop.log.error( msg );
//});
