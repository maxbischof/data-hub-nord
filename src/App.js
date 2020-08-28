import React from "react"
import "./App.css"
import { datasets } from "./settings.js"
import { fetchCSV } from "./utils.js"

function App() {
  fetchCSV({targetURL: datasets[0].url})
  .then(responds => console.log(responds))

  return <div className="App"></div>
}

export default App
