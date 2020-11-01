import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './ui/Button'
import { renameLatLongColumns, geocodeAdress } from './../lib/geo'
import { useProgressStatus } from '../hooks/useProgressStatus'
import LoadingDots from './ui/LoadingDots'

export default function MapForm({ tableData, setMapData, columnNames }) {
  const [adressColumnNames, setAdressColumnNames] = useState([])
  const { percent, setProgress } = useProgressStatus(tableData.length)

  function onChangeAdressTags(event) {
    const tagName = event.target.name
    let newArray = []
    if (adressColumnNames.includes(tagName)) {
      newArray = adressColumnNames.filter((name) => name !== tagName)
      setAdressColumnNames(newArray)
    } else setAdressColumnNames([...adressColumnNames, tagName])
  }

  return (
    <>
      {percent > 0 ? (
        <>
          <LoadingDots progress={percent} />
        </>
      ) : (
        <>
          <Form
            onSubmit={(event) =>
              renameLatLongColumns(event, tableData, setMapData)
            }
          >
            <p>
              Wähle dazu die Spalten aus, die Latitude und Longitude
              repräsentieren:
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

            <Button type="submit" styleType="more">
              Karte erstellen
            </Button>
          </Form>
          <CenterParagraph>
            <b>ODER</b>
          </CenterParagraph>
          <Form
            onSubmit={(event) =>
              geocodeAdress(
                event,
                tableData,
                setMapData,
                setProgress,
                adressColumnNames
              )
            }
          >
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
            <Button type="submit" styleType="more">
              Karte erstellen
            </Button>
          </Form>
        </>
      )}
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

const CenterParagraph = styled.p`
  place-self: center;
`
