import React, { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import PropTypes from 'prop-types'
import { useCSV } from '../hooks/useCSV'
import LoadingDots from './ui/LoadingDots'
import Map from './Map'

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

  const [latLongColumnNames, setLatLongColumnNames] = useState()

  function submitMapSettings(event) {
    setLatLongColumnNames({
      lat: event.target.latitude.value,
      long: event.target.longitude.value,
    })
    event.preventDefault()
  }

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
            Wenn die Daten in der Tabelle über eine Adresse oder geographische
            Koordinaten(wie z.B. 54.323334, 10.139444) verfügen, kannst du eine
            Karte aus den Daten erstellen.
          </Paragraph>
          <p>
            Wähle dazu die Spalten aus die Latitude und Longitude
            repräsentieren:
          </p>
          <Form onSubmit={submitMapSettings}>
            <Label>
              <span>Latitude:</span>
              <select name="latitude">
                {columnNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </Label>
            <Label>
              <span>Longitude:</span>
              <select name="longitude">
                {columnNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </Label>

            <StyledButton type="submit">Karte erstellen</StyledButton>
          </Form>
          {latLongColumnNames && (
            <Map
              rows={tableData}
              latLongColumnNames={latLongColumnNames}
              columnNames={columnNames}
            />
          )}
          <Headline2>Tabelle</Headline2>
          <Table data={tableData}></Table>{' '}
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

const StyledButton = styled.button`
  place-self: center;
  color: var(--cyan);
  border: 1px solid var(--cyan);
  margin: 15px 0 0 0;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  background-color: white;
  text-align: center;
  border-radius: 2px;
  height: 36px;
  width: 146px;
  padding: 0 16px;
  text-align: center;
  cursor: pointer;
`

const Form = styled.form`
  margin: 30px 0 0 0;
  display: grid;
`

const Label = styled.label`
  display: block;
  margin: 0 0 10px 0;
`

const DetailsDescription = styled.div`
  margin: 0 37px 30px 37px;
  max-width: 600px;
`
const VisualisationSection = styled.div`
  margin: 0 37px 30px 37px;
  max-width: 600px;
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
