import React from 'react'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import styled from 'styled-components'

export default function Map({ rows, latLongColumnNames, columnNames }) {
  const markers = rows.map((row, index) => {
    const lat = parseFloat(row[latLongColumnNames.lat])
    const long = parseFloat(row[latLongColumnNames.long])
    let marker = null

    if (isNaN(lat) === false || isNaN(long) === false) {
      const latLong = [lat, long]

      marker = (
        <Marker key={index} position={latLong}>
          <Popup>
            {columnNames.map((columnName) => (
              <div key={columnName}>
                {columnName + ': ' + row[columnName]}
                <br />
              </div>
            ))}
          </Popup>
        </Marker>
      )
    }
    return marker
  })

  const position = [53.92099, 9.51529]

  return (
    <StyledMap center={position} zoom={8}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </StyledMap>
  )
}

const StyledMap = styled(LeafletMap)`
  height: 100vh;
  width: 100%;
  margin: 30px 0 0 0;
`
