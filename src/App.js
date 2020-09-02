import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import { datasets } from "./settings"
import { Route } from "react-router-dom"
import BackButton from "./components/ui/BackButton"
import DatasetDetails from "./components/DatasetDetails"
import RootPage from "./components/pages/RootPage"

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" render={() => <RootPage datasets={datasets}/>} />
      {datasets.map((dataset) => (
        <Route
          exact
          key={dataset.id}
          path={`/datensaetze/${dataset.name.replace(" ", "-")}-${dataset.id}`}
          render={() => (
            <>
              <BackButton />
              <DatasetDetails {...dataset} />
            </>
          )}
        />
      ))}
      <Footer />
    </>
  )
}

export default App
