const express = require('express')
const app = express()
const path = require('path')
const corsAnywhere = require('cors-anywhere')
const fetch = require('node-fetch')
const parseString = require('xml2js').parseString

const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

const proxy = corsAnywhere.createServer({
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
      const pagesTotal = result['rdf:RDF']['hydra:PagedCollection'][0][
        'hydra:lastPage'
      ][0].split('=')[1]
      fetchDatasets(pagesTotal).then(
        (response) => (datasets = restructureDatasetObjects(response))
      )
    }).catch(function (error) {
      console.log(error)
    })
  })

function restructureDatasetObjects(datasets) {
  return datasets.map((dataset) => {
    innerDataset = dataset['dcat:Dataset'][0]
    dataset.url = innerDataset['dcat:distribution'][0]['$']['rdf:resource']
    dataset.title = innerDataset['dct:title'][0]
    dataset.publisher = innerDataset['dcatde:licenseAttributionByText']
      ? innerDataset['dcatde:licenseAttributionByText'][0]
      : ''
    dataset.publisherURL = innerDataset['dct:publisher'][0]['$']['rdf:resource']
    dataset.description = innerDataset['dct:description'][0]
    dataset.license = innerDataset['dct:license'][0]['$']['rdf:resource']
    delete dataset['dcat:Dataset']
    return dataset
  })
}

async function fetchDatasets(pagesTotal) {
  let response = []

  for (let i = 1; i <= pagesTotal; i++) {
    console.log('Loading XML page: ' + i)

    await fetch('https://opendata.schleswig-holstein.de/catalog.xml?page=' + i)
      .then((response) => response.text())
      .then((text) => {
        parseString(text, (err, XMLObjects) => {
          const datasets =
            XMLObjects['rdf:RDF']['dcat:Catalog'][0]['dcat:dataset']
          const filteredDatasets = filterByFileType('csv', datasets)

          response = [...response, ...filteredDatasets]
        })
      })
  }

  return response
}

function filterByFileType(fileType, data) {
  return data.filter((dataset) =>
    dataset['dcat:Dataset'][0]['dcat:distribution'][0]['$'][
      'rdf:resource'
    ].endsWith(fileType)
  )
}
