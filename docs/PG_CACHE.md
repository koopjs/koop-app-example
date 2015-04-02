# Implementing Persistent Caching with PostGIS

without a backing PostGIS instance, koop isn't able to share cached datasets between clusters and registered providers won't survive a server restart.  Because of this, its essential that a PostGIS database be utilized in a production scenario.

##Pre-requisites:
- PostgreSQL + PostGIS - a simple install from EnterpriseDB is fine. If you get any warnings during install, add your PostgreSQL\bin folder to your PATH

update config\default.json to reference your local postgres database (if named other than koopdev), you may need to specify a syntax like ```postgres://user:pw@localhost/koopdev```

Once this is done, you can simply uncomment the following lines in server.js for koop to start utilizing your PostGIS instance

```javascript
// in production you'll need to register our cache engine with postgis
//   pgCache = require('koop-pgcache');
// koop.registerCache( pgCache );
```