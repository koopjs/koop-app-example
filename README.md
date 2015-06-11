# Koop Sample App

A sample [Koop](https://github.com/esri/koop) application with some common [providers](https://github.com/koopjs/koopjs.github.io/blob/master/docs/providers.md).

This app makes it easy to get started running your own instance of Koop. It's also helpful for trying out Koop's functionality and testing providers, caches, plugins, and deployments.

If you're new to [Node.js](https://nodejs.org/) development, you can read more about setting up a development environment [here](https://github.com/koopjs/koopjs.github.io/blob/master/doc/setup.md).

## Instructions

Clone this repository on your machine.

```
git clone git@github.com:koopjs/koop-sample-app.git
```

Change the working directory to the newly created `koop-sample-app` folder.

```
cd koop-sample-app
```

Install Koop's dependencies.

```
npm install
```

Create a `koopdev` PostgreSQL database and enable PostGIS.

```
$ createdb koopdev
$ psql koopdev

koopdev=# CREATE EXTENSION postgis;
CREATE EXTENSION
koopdev=# CREATE EXTENSION postgis_topology;
CREATE EXTENSION
koopdev=# CREATE EXTENSION fuzzystrmatch;
CREATE EXTENSION
koopdev=# CREATE EXTENSION postgis_tiger_geocoder;
CREATE EXTENSION
```

Start the server.

```
npm start
```

Take Koop for a test drive!

You can try fetching a resource directly in the browser (such as [localhost:1337/github/benbalter/dc-wifi-social/bars/](http://localhost:1337/github/benbalter/dc-wifi-social/bars/)) to confirm koop is running.

## Resources

* [Koop](https://github.com/Esri/koop)
* [Koop Documentation](https://github.com/koopjs/koopjs.github.io/tree/master/docs)
* [PostgreSQL](http://www.postgresql.org/)
* [PostGIS](http://postgis.net/)
* [ArcGIS for Developers](http://developers.arcgis.com)
* [ArcGIS REST API Documentation](http://resources.arcgis.com/en/help/arcgis-rest-api/)
* [@esri](http://twitter.com/esri)

## License

[Apache 2.0](LICENSE.md)
