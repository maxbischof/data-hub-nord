import React from "react"
import { datasets } from "./settings.js"
import Header from "./components/Header"
import BackButton from "./components/ui/BackButton.js"
import DatasetDetails from "./components/DatasetDetails.js"

function App() {
  return (
    <>
      <Header/>
      <BackButton/>
      <DatasetDetails datasetDescription={datasets[0]} />
    </>
  )
}

export default App
