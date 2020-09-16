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
  const numberOfDatasets = 10 * req.query.page
  const searchTerm = req.query.searchterm
  const response = searchTerm
    ? datasets.filter((dataset) =>
        dataset.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : datasets
  const hasNextpage = response.length > numberOfDatasets

  res.send({
    datasets: response.slice(0, numberOfDatasets),
    hasNextPage: hasNextpage,
  })
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
      fetchDatasets(pagesTotal).then((response) => {
        datasets = filterByFileType(
          'CSV',
          restructureDatasetObjects({ ...response })
        )
      })
    }).catch(function (error) {
      console.log(error)
    })
  })

function restructureDatasetObjects({ catalogDatasets, distributionDatasets }) {
  return catalogDatasets.map((dataset, index) => {
    innerDataset = dataset['dcat:Dataset'][0]
    const distributionDataset = distributionDatasets.find((obj) => {
      return (
        obj['$']['rdf:about'] ===
        innerDataset['dcat:distribution'][0]['$']['rdf:resource']
      )
    })

    dataset.url = distributionDataset['dcat:accessURL'][0]['$']['rdf:resource']
    dataset.type = distributionDataset['dct:format'][0]['$']
      ? distributionDataset['dct:format'][0]['$']['rdf:resource']
      : ''
    dataset.title = innerDataset['dct:title'][0]
    dataset.publisher = innerDataset['dcatde:licenseAttributionByText']
      ? innerDataset['dcatde:licenseAttributionByText'][0]
      : ''
    dataset.publisherURL = innerDataset['dct:publisher'][0]['$']['rdf:resource']
    dataset.description = innerDataset['dct:description'][0]
    dataset.license = innerDataset['dct:license'][0]['$']['rdf:resource']
    dataset.id = index
    delete dataset['dcat:Dataset']
    return dataset
  })
}

async function fetchDatasets(pagesTotal) {
  let catalogDatasets = []
  let distributionDatasets = []

  for (let i = 1; i <= pagesTotal; i++) {
    console.log('Loading XML page: ' + i)

    await fetch('https://opendata.schleswig-holstein.de/catalog.xml?page=' + i)
      .then((response) => response.text())
      .then((text) => {
        parseString(text, (err, XMLObjects) => {
          catalogDatasets = [
            ...catalogDatasets,
            ...XMLObjects['rdf:RDF']['dcat:Catalog'][0]['dcat:dataset'],
          ]
          distributionDatasets = [
            ...distributionDatasets,
            ...XMLObjects['rdf:RDF']['dcat:Distribution'],
          ]
        })
      })
  }

  return { catalogDatasets, distributionDatasets }
}

function filterByFileType(fileType, data) {
  return data.filter((dataset) => dataset.type.endsWith(fileType))
}
