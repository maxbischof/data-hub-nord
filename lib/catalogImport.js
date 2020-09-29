const fetch = require('node-fetch')
const parseString = require('xml2js').parseString
const md5 = require('md5')

const fetchCatalog = async () => {
  let catalog = null
  await fetch('https://opendata.schleswig-holstein.de/catalog.xml')
    .then((response) => response.text())
    .then((data) => {
      let lastPage = null
      parseString(data, (err, result) => {
        lastPage = result['rdf:RDF']['hydra:PagedCollection'][0][
          'hydra:lastPage'
        ][0].split('=')[1]
      })
      return lastPage
    })
    .then((pagesTotal) => fetchCatalogPages(pagesTotal))
    .then((response) => xmlToJson({ ...response }))
    .then((objects) => filterByFileType('CSV', objects))
    .then((result) => (catalog = result))
    .catch(function (error) {
      console.log(error)
    })
  return catalog
}

function xmlToJson({ catalogDatasets, distributionDatasets }) {
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
    dataset.id = md5(innerDataset['dct:identifier'][0])
    delete dataset['dcat:Dataset']
    return dataset
  })
}

async function fetchCatalogPages(pagesTotal) {
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

module.exports = {
  fetchCatalog,
}
