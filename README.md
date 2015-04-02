# Koop-Sample-App
a sample express application intended to show how to deploy an instance of koop together with some koop providers.

This app makes it easy to test out koop functionality, as well as to add additional koop providers for testing or deployment.

If you're new to node development, you can find more information about setting up a development environment [here](docs/SET_UP.md)

##Instructions

1. copy down the repository to your own machine
```
git clone https://github.com/koopjs/koop-sample-app
```
2. navigate into your new folder
```
cd koop-sample-app
```
3. install koop's dependencies
```
npm install
```
4. take koop for a test drive
```
node server.js
```
5. you can try fetching a resource directly in the browser to confirm koop is running
[http://localhost:1337/github/benbalter/dc-wifi-social/bars/](http://localhost:1337/github/benbalter/dc-wifi-social/bars/)

##Additional documentation
* [Configuring a persistent PostGIS cache](docs/PG_CACHE.md)
* [Deploying to Heroku](docs/DEPLOY_TO_HEROKU.md)
