import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Table from "./Table"
import PropTypes from "prop-types"
import { fetchCSV, csvToObjectsArray } from "../utils.js"

export default function DatasetDetails({ datasetDescription }) {
  const {
    imageUrl,
    name,
    description,
    license,
    publisher,
    url,
    keys,
    seperator,
  } = datasetDescription

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchCSV({ path: url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        columnNames: keys,
        seperator: seperator,
      })
      setTableData(array)
    })
  }, [keys, seperator, url])

  return (
    <main>
      <DetailsDescription>
        <DetailsPicture src={imageUrl} />
        <Headline>{name}</Headline>
        <Paragraph>{description}</Paragraph>
        <br />
        <Headline3>Lizenz</Headline3>
        <Paragraph>{license}</Paragraph>
        <br />
        <Headline3>Herausgeber</Headline3>
        <Paragraph>{publisher}</Paragraph>
      </DetailsDescription>

      <Headline2>Tabelle</Headline2>
      <Table tableData={tableData}></Table>
    </main>
  )
}

DatasetDetails.propTypes = {
  datasetDescription: PropTypes.object.isRequired,
}

const DetailsDescription = styled.div`
  margin: 0 37px 30px 37px;
`

const DetailsPicture = styled.img`
  border-radius: 5px;
  border: 1px solid var(--grey);
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
  padding: 0;
  margin: 30px 37px 0 37px;
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
