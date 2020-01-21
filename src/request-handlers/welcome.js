function handleRequest (req, res) {
  res.status(200).send(`
Welcome to Koop!

Installed Providers:
Github
Craigslist
`)
}

module.exports = handleRequest
