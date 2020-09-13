const express = require('express')
const app = express()
const path = require('path')
var corsAnywhere = require('cors-anywhere')
const fetch = require('node-fetch')
var parseString = require('xml2js').parseString

const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

let proxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: [], // Do not require any headers.
  removeHeaders: [], // Do not remove any headers.
})

app.get('/proxy/:proxyUrl*', (req, res) => {
  req.url = req.url.replace('/proxy/', '/')
  proxy.emit('request', req, res)
})

app.get('/datasets', (req, res) => {
  res.send(datasets)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

let datasets = null

fetch('https://opendata.schleswig-holstein.de/catalog.xml')
  .then((response) => response.text())
  .then((data) => {
    parseString(data, (err, result) => {
      const pages = result['rdf:RDF']['hydra:PagedCollection'][0][
        'hydra:lastPage'
      ][0].split('=')[1]
      fetchDatasets(pages).then((response) => (datasets = response))
      //console.log(datasets)
    }).catch(function (error) {
      console.log('Fehler: bei Auslesen der XML-Datei ' + error)
    })
  })

async function fetchDatasets(pages) {
  let response = []
  for (var i = 1; i <= pages; i++) {
    console.log(i)
    await fetch('https://opendata.schleswig-holstein.de/catalog.xml?page=' + i)
      .then((response) => response.text())
      .then((text) => {
        parseString(text, (err, XMLObjects) => {
          const datasets =
            XMLObjects['rdf:RDF']['dcat:Catalog'][0]['dcat:dataset']
          const filteredDatasets = datasets.filter((dataset) =>
            dataset['dcat:Dataset'][0]['dcat:distribution'][0]['$'][
              'rdf:resource'
            ].endsWith('csv')
          )
          response = [...response, ...filteredDatasets]
        })
      })
  }
  return response
}
