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
        <DetailsPicture src={datasets[0].imageUrl}/>
        <Headline>{datasets[0].name}</Headline>
        <Paragraph>{datasets[0].description}</Paragraph>
        <br/>
        <Headline3>Lizenz</Headline3>
        <Paragraph>{datasets[0].license}</Paragraph>
        <br/>
        <Headline3>Herausgeber</Headline3>
        <Paragraph>{datasets[0].publisher}</Paragraph>
        <br/>

        <Headline2>Tabelle</Headline2>
        </Main>
        <Table array={dataset1}></Table>
      
    </>
  )
}

export default App

const Main = styled.main`
  margin: 0 37px 0 37px;
`

const DetailsPicture = styled.img`
  border-radius: 5px;
  border: 1px solid #333;
  width: 100%;
  margin: 0 0 30px 0;
`

const Headline = styled.h1`
  font-size: 25px;
  margin: 0 0 10px 0;
  padding: 0;
`

const Headline2 = styled.h2`
  font-size: 22px;
  margin: 30px 0 0 0;
  padding: 0;
`

const Headline3 = styled.h3`
  font-size: 17px;
  margin: 0;
  padding: 0;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`