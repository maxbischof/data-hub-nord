import React, { useState } from 'react'
import Geocode from 'react-geocode'
import styled from 'styled-components'
import Button from './ui/Button'

export default function MapForm({ tableData, setMapData, columnNames }) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODE_KEY)
  const [adressColumnNames, setAdressColumnNames] = useState([])

  function renameLatLongColumns(event) {
    event.preventDefault()

    const latName = event.target.latitude.value
    const longName = event.target.longitude.value

    tableData.forEach((dataset) => {
      if (latName !== 'latitude') {
        dataset.latitude = dataset[latName]
        delete dataset[latName]
      }

      if (longName !== 'longitude') {
        dataset.longitude = dataset[longName]
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

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  async function geocodeAdress(event) {
    event.preventDefault()
    let mapData = []

    await tableData.reduce((promise, item) => {
      return promise.then((result) => {
        return Promise.all([delay(100), fetchAdress(item)]).then((values) => {
          return (mapData = [...mapData, values[1]])
        })
      })
    }, Promise.resolve())

    setMapData(mapData)
  }

  async function fetchAdress(dataset) {
    const adress = adressColumnNames.map((name) => dataset[name]).join(' ')
    await Geocode.fromAddress(adress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        dataset.latitude = lat
        dataset.longitude = lng
      },
      (error) => {
        console.error(error)
      }
    )
    return dataset
  }

  return (
    <>
      <Form onSubmit={renameLatLongColumns}>
        <p>
          Wähle dazu die Spalten aus, die Latitude und Longitude repräsentieren:
        </p>
        <Label>
          <span>Breitengrad (Latitude):</span>
          <select name="latitude">
            {columnNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Label>
        <Label>
          <span>Längengrad (Longitude):</span>
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
        <b>ODER</b>
      </CenterParagraph>
      <Form onSubmit={geocodeAdress}>
        <p>Wähle alle Spaltenamen, die ein Teil der Adresse beinhalten:</p>
        <div>
          {columnNames.map((name) => (
            <Tag
              key={name}
              name={name}
              onClick={onChangeAdressTags}
              type="button"
              active={adressColumnNames.find((columnName) =>
                columnName === name ? true : false
              )}
            >
              {name}
            </Tag>
          ))}
        </div>
        <StyledButton type="submit" styleType="more">
          Karte erstellen
        </StyledButton>
      </Form>
    </>
  )
}

const Tag = styled.button`
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

const Form = styled.form`
  margin: 30px 0 30px 0;
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

const StyledButton = styled(Button)`
  align-self: center;
  margin: 15px;
`

const CenterParagraph = styled.p`
  place-self: center;
`
