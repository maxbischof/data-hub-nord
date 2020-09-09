import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
import { datasets } from './settings'
import { Route } from 'react-router-dom'
import RootPage from './components/pages/RootPage'
import DatasetDetailsPage from './components/pages/DatasetDetailsPage'

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" render={() => <RootPage datasets={datasets} />} />

      {datasets.map((dataset) => (
        <Route
          key={dataset.id}
          path={`/datensaetze/${dataset.name.replace(' ', '-')}-${dataset.id}`}
          render={() => <DatasetDetailsPage dataset={dataset} />}
        />
      ))}

      <Footer />
    </>
  )
}

export default App
