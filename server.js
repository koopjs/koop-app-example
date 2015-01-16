#!/usr/bin/env node
"use strict";

var express = require("express"),
  cors = require('cors'),
  config = require("config"),
  koop = require('koop')( config ),
  socrata = require('koop-socrata'),
  acs = require('koop-acs'),
  ckan = require('koop-ckan'),
  github = require('koop-github'),
  agol = require('koop-agol'),
  gist = require('koop-gist');
//  pgCache = require('koop-pgcache');

// first we want to register our cache engine, postgis
// this is not required but is helpful
//koop.registerCache( pgCache );

//register providers with koop 
koop.register( socrata ); 
koop.register( ckan ); 
koop.register( github ); 
koop.register( gist ); 
koop.register( acs ); 
koop.register( agol ); 

// create an express app
var app = express();
app.use( cors() );

app.use(function(req,res,next){
  var oldEnd = res.end;

  res.end = function() {
    console.log(req.path, res.statusCode);
    oldEnd.apply(res, arguments);
  };

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
  res.render(__dirname + '/views/index');
});

app.listen(process.env.PORT || config.server.port,  function() {
  console.log("Listening at http://%s:%d/", this.address().address, this.address().port);
});

