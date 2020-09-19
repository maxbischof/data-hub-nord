import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
import { Route } from 'react-router-dom'
import RootPage from './components/pages/RootPage'
import DatasetDetailsPage from './components/pages/DatasetDetailsPage'
import { useDatasetsCatalog } from './hooks/useDatasetsCatalog'

function App() {
  return (
    <>
      <Header />
      <Route exact path="/">
        <RootPage />
      </Route>
      <Route path={`/datensaetze/:datasetid`}>
        <DatasetDetailsPage />
      </Route>
      <Footer />
    </>
  )
}

export default App
