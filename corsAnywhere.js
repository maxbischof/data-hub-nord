const corsAnywhere = require('cors-anywhere')

const proxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // Do not require any headers.
  removeHeaders: [], // Do not remove any headers.
})

module.exports = function (app) {
  app.get('/proxy/:proxyUrl*', (req, res) => {
    req.url = req.url.replace('/proxy/', '/')
    proxy.emit('request', req, res)
  })
}
