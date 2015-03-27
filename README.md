# Koop-Sample-App

*koop-sample-app* is a sample express.js application that shows you how to deploy an instance of koop together with some koop providers.

This app makes it easy to test out koop functionality, as well as to add additional koop providers for testing or deployment.

Windows/Mac Prerequisites:
- Node - 64 or 32 bit
- Git (ideally)
- PostgreSQL + PostGIS - simple install from EnterpriseDB is fine. If you get any warnings during install, add your PostgreSQL\bin folder to your PATH

This install has been roughly tested on:
- OS X
- Windows Server 2008R2
- Windows Server 2012R2
- Windows 8.1
- Windows 7

Install on Windows/Mac:
```
git clone https://github.com/koopjs/koop-sample-app
cd koop-sample-app
npm install
```
update config\default.json to reference your local postgres database (if named other than koopdev), you may need to specify a syntax like ```postgres://user:pw@localhost/koopdev```

Then run 
```node server.js```
and navigate to http://localhost:1337 to see the sample app.
