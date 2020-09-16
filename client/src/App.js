import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
import { Route } from 'react-router-dom'
import RootPage from './components/pages/RootPage'
import DatasetDetailsPage from './components/pages/DatasetDetailsPage'
import LoadingDots from './components/ui/LoadingDots'

function App() {
  const [datasets, setDatasets] = useState([])

  useEffect(() => {
    fetch('/datasets?page=1')
      .then((response) => response.json())
      .then((data) => setDatasets(data.datasets))
  }, [])

  return (
    <>
      <Header />
      {datasets ? (
        <>
          <Route exact path="/">
            <RootPage datasets={datasets} />
          </Route>
          {datasets.map((dataset, index) => (
            <Route
              key={dataset.url}
              path={`/datensaetze/${dataset.title.replace(' ', '-')}-${
                dataset.id
              }`}
            >
              <DatasetDetailsPage dataset={dataset} />
            </Route>
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
