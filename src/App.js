import React from "react"
import "./App.css"
import { datasets } from "./settings.js"
import { fetchCSV, csvToObjectsArray } from "./utils.js"

function App() {
  fetchCSV({ path: datasets[0].url }).then((response) =>
    console.log(
      csvToObjectsArray({
        csv: response,
        columnNames: datasets[0].keys,
        seperator: datasets[0].seperator,
      })
    )
  )

  fetchCSV({ path: datasets[1].url }).then((response) =>
    console.log(
      csvToObjectsArray({
        csv: response,
        columnNames: datasets[1].keys,
        seperator: datasets[1].seperator,
      })
    )
  )

  return <div className="App"></div>
}

export default App
