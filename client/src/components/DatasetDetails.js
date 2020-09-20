import React, { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import PropTypes from 'prop-types'
import { useCSV } from '../hooks/useCSV'
import LoadingDots from './ui/LoadingDots'
import Map from './Map'
import Button from './ui/Button'
import Geocode from 'react-geocode'

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

  const [adressColumnNames, setAdressColumnNames] = useState([])
  const [mapData, setMapData] = useState()
  Geocode.setApiKey(process.env.GOOGLE_GEOCODE_KEY)

  function renameLatLongColumns(event) {
    event.preventDefault()

    const latName = event.target.latitude.value
    const longName = event.target.longitude.value

    tableData.forEach((dataset) => {
      if (latName !== 'latitude') {
        dataset['latitude'] = dataset[latName]
        delete dataset[latName]
      }

      if (longName !== 'longitude') {
        dataset['longitude'] = dataset[longName]
        delete dataset[longName]
      }
    })

    setMapData(tableData)
  }

  function onChangeAdressTags(event) {
    const tagName = event.target.name
    let newArray = []
    if (adressColumnNames.find((name) => name === tagName)) {
      newArray = adressColumnNames.filter((name) => name !== tagName)
      setAdressColumnNames(newArray)
    } else setAdressColumnNames([...adressColumnNames, tagName])
  }

  function geocodeAdress(event) {
    event.preventDefault()
    tableData.forEach((dataset) => {
      const adress = adressColumnNames.map((name) => dataset[name]).join(' ')

      Geocode.fromAddress(adress).then(
        (response) => {
          const { lat, long } = response.results[0].geometry.location
          dataset.latitude = lat
          dataset.longitude = long
        },
        (error) => {
          console.error(error)
        }
      )
    })
    setMapData(tableData)
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
          <Form onSubmit={renameLatLongColumns}>
            <p>
              Wähle dazu die Spalten aus die Latitude und Longitude
              repräsentieren:
            </p>
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

            <StyledButton type="submit" styleType="more">
              Karte erstellen
            </StyledButton>
          </Form>
          <CenterParagraph>
            <b>oder</b>
          </CenterParagraph>
          <Form onSubmit={geocodeAdress}>
            <p>Wähle alle Spaltenamen die ein Teil der Adresse beinhalten:</p>
            <div>
              {columnNames.map((name) => (
                <TagButton
                  key={name}
                  name={name}
                  onClick={onChangeAdressTags}
                  type="button"
                  active={adressColumnNames.find((columnName) =>
                    columnName === name ? true : false
                  )}
                >
                  {name}
                </TagButton>
              ))}
            </div>
            <StyledButton type="submit" styleType="more">
              Karte erstellen
            </StyledButton>
          </Form>
          {mapData && <Map rows={mapData} columnNames={columnNames} />}
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

const TagButton = styled.button`
  color: ${(props) => (props.active ? 'white' : 'var(--grey)')};
  background: ${(props) => (props.active ? 'var(--cyan)' : 'var(--lightgrey)')};
  border-radius: 15px;
  font-size: 12px;
  padding: 15px 10px;
  margin: 2px;
  text-align: center;
  cursor: pointer;
  border: none;
  font-weight: 700;

  :hover {
    border: 1px solid var(--cyan);
    padding: 14px 9px;
  }
`

const CenterParagraph = styled.p`
  place-self: center;
`

const StyledButton = styled(Button)`
  align-self: center;
`

const Form = styled.form`
  margin: 30px 0 0 0;
  border: 1px solid var(--grey);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
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
  display: grid;
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
