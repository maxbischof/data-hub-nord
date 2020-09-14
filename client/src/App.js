import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
//import { datasets } from './settings'
import { Route } from 'react-router-dom'
import RootPage from './components/pages/RootPage'
import DatasetDetailsPage from './components/pages/DatasetDetailsPage'
import LoadingDots from './components/ui/LoadingDots'

function App() {
  const [datasets, setDatasets] = useState()

  useEffect(() => {
    fetch('/datasets')
      .then((response) => response.json())
      .then((data) => setDatasets(data))
  }, [])

  return (
    <>
      <Header />
      {datasets ? (
        <>
          <Route
            exact
            path="/"
            render={() => <RootPage datasets={datasets} />}
          />
          {datasets.map((dataset) => (
            <Route
              key={dataset.url}
              path={`/datensaetze/${dataset.title.replace(' ', '-')}-${
                dataset.id
              }`}
              render={() => <DatasetDetailsPage dataset={dataset} />}
            />
          ))}
        </>
      ) : (
        <LoadingDots />
      )}

      <Footer />
    </>
  )
}

export default App
