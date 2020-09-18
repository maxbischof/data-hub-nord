import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
import { Route } from 'react-router-dom'
import RootPage from './components/pages/RootPage'
import DatasetDetailsPage from './components/pages/DatasetDetailsPage'
import { useDatasetsCatalog } from './hooks/useDatasetsCatalog'

function App() {
  const {
    datasetsCatalog,
    hasMoreDatasets,
    resetDatasetsCatalog,
    loadNextPage,
    setSearchTerm,
    searchTerm,
  } = useDatasetsCatalog()

  return (
    <>
      <Header />
      <Route exact path="/">
        <RootPage
          datasetsCatalog={datasetsCatalog}
          setSearchTerm={setSearchTerm}
          loadNextPage={loadNextPage}
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
