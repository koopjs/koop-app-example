
# Koop Sample App
[![Build Status](https://travis-ci.org/koopjs/koop-app-example.svg?branch=master)](https://travis-ci.org/koopjs/koop-app-example)
[![Greenkeeper badge](https://badges.greenkeeper.io/koopjs/koop-app-example.svg)](https://greenkeeper.io/)

A sample [Koop](https://github.com/koopjs/koop) application with some common [providers](https://koopjs.github.io/docs/providers).

This app makes it easy to get started running your own instance of Koop. It's also helpful for trying out Koop's functionality and testing providers, caches, plugins, and deployments.

If you're new to [Node.js](https://nodejs.org/) development, you can read more about [setting up a development environment](https://koopjs.github.io/docs/setup).

## Instructions

Clone this repository on your machine.

```
git clone git@github.com:koopjs/koop-app-example.git
```

Change the working directory to the newly created `koop-app-example` folder.

```
cd koop-app-example
```

Install dependencies.

```
npm install
```

Start the server.

```
npm start
```

Take Koop for a test drive!

This sample app includes the following providers:

* [`github`](https://github.com/koopjs/koop-provider-github)
* [`craigslist`](https://github.com/dmfenton/koop-provider-craigslist)

Once Koop is running, you can test these sample requests:

* [http://localhost:8080/github/koopjs::geodata::north-america/FeatureServer/0/query](http://localhost:8080/github/koopjs::geodata::north-america/FeatureServer/0/query)
* [http://localhost:8080/craigslist/seattle/apartments/FeatureServer/0/query](http://localhost:8080/craigslist/seattle/apartments/FeatureServer/0/query)

## Resources

* [Koop](https://github.com/koopjs/koop)
* [Koop Documentation](https://koopjs.github.io/docs)
* [PostgreSQL](http://www.postgresql.org/)
* [PostGIS](http://postgis.net/)
* [ArcGIS for Developers](http://developers.arcgis.com)
* [ArcGIS REST API Documentation](http://resources.arcgis.com/en/help/arcgis-rest-api/)
* [@esri](http://twitter.com/esri)

## License

[Apache 2.0](LICENSE)
