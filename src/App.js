import React from "react"
import { datasets } from "./settings.js"
import Header from "./components/Header"
import BackButton from "./components/ui/BackButton.js"
import DatasetDetails from "./components/DatasetDetails.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Header/>
      <BackButton/>
      <DatasetDetails datasetDescription={datasets[0]} />
      <Footer/>
    </>
  )
}

export default App
