# Deploying koop-sample-app to Heroku

If you're short on time: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/koopjs/koop-sample-app/tree/heroku)

From [Heroku Dev Center - Extensions, PostGIS...](https://devcenter.heroku.com/articles/heroku-postgres-extensions-postgis-full-text-search#postgis) (accessed on 3/23/2016):

> Currently, PostGIS can only be used on Production tier Heroku Postgres plans and on hobby plans.

If you'd like to learn more, below we explain what we did differently in the [heroku](https://github.com/koopjs/koop-sample-app/tree/heroku) branch to deploy koop with an IN_MEMORY cache so that we can utilize a free plan.  

## Instructions

A PostGIS store *is* [recommended](http://koopjs.github.io/docs/caches.html) in production, but an IN_MEMORY store can be configured by following the steps below:

1. Remove mention of a PostGIS database instance from `config/default.json`

```js

// get rid of this part
"db": {
  "conn": "postgres://localhost/koopdev"
}
```
2. Comment out the code which registers the PostGIS cache with koop in `index.js`

```js
// comment out this stuff
var pgCache = require('koop-pgcache')

// and a little further down...

koop.registerCache(pgCache)
```

That's it!

## Resources

* [Koop](https://github.com/koopjs/koop)
* [Koop Documentation](https://koopjs.github.io/docs)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command)
* [Heroku - Deploy the app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
* [@esri](http://twitter.com/esri)

## License

[Apache 2.0](LICENSE)
