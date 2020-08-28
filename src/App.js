import React from "react"
import "./App.css"
import { datasets } from "./settings.js"
import { fetchCSV, csvToObjects } from "./utils.js"

function App() {
  fetchCSV({ targetURL: datasets[0].url }).then((responds) =>
    console.log(
      csvToObjects({
        csv: responds,
        keys: datasets[0].keys,
        seperator: datasets[0].seperator,
      })
    )
  )

  fetchCSV({ targetURL: datasets[1].url }).then((responds) =>
    console.log(
      csvToObjects({
        csv: responds,
        keys: datasets[1].keys,
        seperator: datasets[1].seperator,
      })
    )
  )

  return <div className="App"></div>
}

export default App
