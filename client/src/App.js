import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
import { Route } from 'react-router-dom'
import RootPage from './components/pages/RootPage'
import DatasetDetailsPage from './components/pages/DatasetDetailsPage'

function App() {
  const [searchTerm, setSearchTerm] = useState()
  const [datasetsCatalog, setDatasetsCatalog] = useState()
  const [pageToFetch, setPageToFetch] = useState(1)
  const [hasMoreDatasets, setHasMoreDatasets] = useState()

  function increasePageToFetch() {
    setPageToFetch(pageToFetch + 1)
  }

  function resetDatasetsCatalog() {
    setDatasetsCatalog('')
  }

  useEffect(() => {
    const pageQuery = 'page=' + pageToFetch
    const searchTermQuery = searchTerm ? 'searchterm=' + searchTerm : ''
    fetch('/datasets?' + pageQuery + '&' + searchTermQuery)
      .then((response) => response.json())
      .then((data) => {
        setDatasetsCatalog(data.datasets)
        setHasMoreDatasets(data.hasNextPage)
      })
      .catch((error) => console.log('error', error))
  }, [searchTerm, pageToFetch])

  return (
    <>
      <Header />
      <Route exact path="/">
        <RootPage
          datasetsCatalog={datasetsCatalog}
          setSearchTerm={setSearchTerm}
          increasePageToFetch={increasePageToFetch}
          hasMoreDatasets={hasMoreDatasets}
          resetDatasetsCatalog={resetDatasetsCatalog}
          searchTerm={searchTerm}
        />
      </Route>
      {datasetsCatalog && (
        <Route path={`/datensaetze/:datasetid`}>
          <DatasetDetailsPage datasets={datasetsCatalog} />
        </Route>
      )}
      <Footer />
    </>
  )
}

export default App
