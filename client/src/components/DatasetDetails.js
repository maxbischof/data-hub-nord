import React, { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import PropTypes from 'prop-types'
import { useCSV } from '../hooks/useCSV'
import LoadingDots from './ui/LoadingDots'
import Map from './Map'
import MapForm from './MapForm'
import Button from './ui/Button'

export default function DatasetDetails({
  title,
  description,
  license,
  publisher,
  url,
  removeColumns,
  columnsOrder,
}) {
  const tableData = useCSV({
    url: url,
    removeColumns: removeColumns,
    columnsOrder: columnsOrder,
  })

  const columnNames = tableData && Object.keys(tableData[0])

  const [mapData, setMapData] = useState()
  const [showMapForm, setShowMapForm] = useState(false)

  return (
    <main>
      <DetailsDescription>
        <Headline>{title}</Headline>
        <Paragraph>{description}</Paragraph>
        <br />
        <Headline3>Lizenz</Headline3>
        <Paragraph>
          <a href={license}>Zur Lizenz</a>
        </Paragraph>
        <br />
        {publisher ? (
          <>
            <Headline3>Herausgeber</Headline3>
            <Paragraph>{publisher}</Paragraph>
          </>
        ) : (
          ''
        )}
      </DetailsDescription>

      {tableData ? (
        <VisualisationSection>
          <Headline2>Karte</Headline2>
          <Paragraph>
            Ist eine Adresse oder sind geographische Koordinaten in der Tabelle
            vorhanden? Dann erstelle eine Karte.
          </Paragraph>
          {!showMapForm && (
            <StyledButton styleType="more" onClick={() => setShowMapForm(true)}>
              Karte erstellen
            </StyledButton>
          )}
          {!mapData && showMapForm && (
            <MapForm
              tableData={tableData}
              columnNames={columnNames}
              setMapData={setMapData}
            />
          )}
          {mapData && <Map rows={mapData} columnNames={columnNames} />}
          <Headline2>Tabelle</Headline2>
          <Table data={tableData}></Table>
        </VisualisationSection>
      ) : (
        <LoadingDots />
      )}
    </main>
  )
}

DatasetDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  license: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  keys: PropTypes.array,
  seperator: PropTypes.string,
}

const StyledButton = styled(Button)`
  align-self: center;
  margin: 15px;
`

const DetailsDescription = styled.div`
  margin: 0 37px 30px 37px;
  max-width: 600px;
`
const VisualisationSection = styled.div`
  margin: 0 37px 30px 37px;
  display: flex;
  flex-direction: column;
`

const Headline = styled.h1`
  font-size: 25px;
  margin: 30px 0 10px 0;
  padding: 0;
`

const Headline2 = styled.h2`
  font-size: 22px;
  padding: 0;
  margin: 30px 37px 0 0;
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
