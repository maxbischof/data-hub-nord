import React, { useState, useEffect } from "react"
import { datasets } from "./settings.js"
import { fetchCSV, csvToObjectsArray } from "./utils.js"
import Table from "./components/Table"
import Header from "./components/Header"
import BackButton from "./components/ui/BackButton.js"
import styled from "styled-components"

function App() {
  const [dataset1, setDataset1] = useState([{}])

  useEffect(() => {
    fetchCSV({ path: datasets[0].url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        columnNames: datasets[0].keys,
        seperator: datasets[0].seperator,
      })
      setDataset1(array)
    })
  }, [])

  return (
    <>
      <Header/>
      <Main>
        <BackButton/>
        <Table array={dataset1}></Table>
      </Main>
    </>
  )
}

export default App

const Main = styled.main`
  margin: 0 37px 0 37px;
`