const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const parseString = require('xml2js').parseString
require('./corsAnywhere')(app)
const catalogImport = require('./lib/catalogImport')

const port = process.env.PORT || 3001

let catalog = null
catalogImport.fetchCatalog().then((response) => (catalog = response))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/datasets', (req, res) => {
  const numberOfDatasets = 10 * req.query.page
  const searchTerm = req.query.searchterm
  const response = searchTerm
    ? catalog.filter((dataset) =>
        dataset.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : catalog
  const hasNextpage = response.length > numberOfDatasets

  res.send({
    datasets: response.slice(0, numberOfDatasets),
    hasNextPage: hasNextpage,
  })
})

app.get('/datasets/:id', (req, res) => {
  res.send(catalog.find((dataset) => dataset.id == req.params.id))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
