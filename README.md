# Koop Sample App

A sample [Koop](https://github.com/koopjs/koop) application with some common [providers](https://koopjs.github.io/docs/providers).

This app makes it easy to get started running your own instance of Koop. It's also helpful for trying out Koop's functionality and testing providers, caches, plugins, and deployments.

If you're new to [Node.js](https://nodejs.org/) development, you can read more about [setting up a development environment](https://koopjs.github.io/docs/setup).

## Instructions

Clone this repository on your machine.

```
git clone git@github.com:koopjs/koop-sample-app.git
```

Change the working directory to the newly created `koop-sample-app` folder.

```
cd koop-sample-app
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

* [`agol`](https://github.com/koopjs/koop-provider-agol)
* [`trimet`](https://github.com/koopjs/koop-provider-trimet)
* [`zillow`](https://github.com/koopjs/koop-provider-zillow)
* [`craigslist`](https://github.com/dmfenton/koop-provider-craigslist)

## Deploying

### Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/koopjs/koop-sample-app)

### Now
1. Install [Now](https://zeit.co/now)
2. run `now -e KOOP_SERVER_PORT=80`

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
