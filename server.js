const express = require('express')
const app = express()
const path = require('path')
var corsAnywhere = require('cors-anywhere')

const port = process.env.PORT || 3001

let proxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // Do not require any headers.
  removeHeaders: [], // Do not remove any headers.
})

app.get('/proxy/:proxyUrl*', (req, res) => {
  req.url = req.url.replace('/proxy/', '/')
  proxy.emit('request', req, res)
})

app.get('/*', express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
