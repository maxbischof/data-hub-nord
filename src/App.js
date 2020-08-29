import React, { useState, useEffect } from "react"
import "./App.css"
import { datasets } from "./settings.js"
import { fetchCSV, csvToObjectsArray } from "./utils.js"
import Table from './components/Table'

function App() {
  const [dataset1, setDataset1] = useState([{}])
  const [dataset2, setDataset2] = useState([{}])

  useEffect(() => {
    fetchCSV({ path: datasets[0].url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        columnNames: datasets[0].keys,
        seperator: datasets[0].seperator,
      })
      setDataset1(array)
    })
  
    fetchCSV({ path: datasets[1].url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        columnNames: datasets[1].keys,
        seperator: datasets[1].seperator,
      })
  
      setDataset2(array)
    })
  }, [])

  return <div className="App">
    <Table array={dataset1}></Table>
  </div>
}

export default App
