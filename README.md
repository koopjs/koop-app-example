# Koop Sample App

A sample [koop](https://github.com/esri/koop) express application with some common [koop providers](https://github.com/Esri/koop/wiki/Koop-Providers-(an-ecosystem)).

This app makes it easy to get started running your own instance of koop. It's also useful for trying out koop's functionality, trying new koop providers, and testing deployments.

If you're new to [node](https://nodejs.org/) development, you can find more information about setting up a development environment [here](docs/SET_UP.md).

## Instructions

1. Clone this repository on your machine.

  ```
  git clone git@github.com:koopjs/koop-sample-app.git
  ```

2. Change the working directory to the newly created `koop-sample-app` folder.

  ```
  cd koop-sample-app
  ```

3. Install koop's dependencies.

  ```
  npm install
  ```

4. Start the server.

  ```
  npm start
  ```

5. Take koop for a test drive!
  You can try fetching a resource directly in the browser (such as [localhost:1337/github/benbalter/dc-wifi-social/bars/](http://localhost:1337/github/benbalter/dc-wifi-social/bars/)) to confirm koop is running.

## Additional documentation

* [Configuring a persistent PostGIS cache](docs/PG_CACHE.md)
* [Deploying to Heroku](docs/DEPLOY_TO_HEROKU.md)
