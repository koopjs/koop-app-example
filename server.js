#!/usr/bin/env node
"use strict";

var express = require("express"),
  config = require("config"),
  koop = require('koop')( config ),
  socrata = require('koop-socrata'),
  ckan = require('koop-ckan'),
  github = require('koop-github'),
  agol = require('koop-agol'),
  gist = require('koop-gist');

//register providers with koop 
koop.register( socrata ); 
koop.register( ckan ); 
koop.register( github ); 
koop.register( gist ); 
koop.register( agol ); 

// create an express app
var app = express();

// add koop middleware
app.use( koop );

app.get('/status', function(req, res){
  res.json( koop.status );
});

app.listen(process.env.PORT || config.server.port,  function() {
  console.log("Listening at http://%s:%d/", this.address().address, this.address().port);
});

