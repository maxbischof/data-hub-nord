import React from 'react'
import MapForm from './MapForm'
import renderer from 'react-test-renderer'

const tableData = [
  {
    id: '9092146',
    name: '2. Polizeirevier Neumünster',
    city: 'Neumünster',
    zipcode: '24536',
    street: 'Hansaring',
    houseNumber: '122',
    telephone: '+49 4321 945-1211',
    fax: '+49 4321 945-1205',
    email: 'Neumünster.PRev@polizei.landsh.de',
    website: '',
    longitude: '9.966029127405152',
    latitude: '54.076095001735126',
    '.': '.',
  },
  {
    id: '9092250',
    name: '3. Polizeirevier Kiel',
    city: 'Kiel',
    zipcode: '24114',
    street: 'Von-der-Tann-Straße',
    houseNumber: '34',
    telephone: '+49 431 160-1310',
    fax: '+49 431 160-1319',
    email: 'Kiel.Prev03@polizei.landsh.de',
    website: '',
    longitude: '10.123243886338098',
    latitude: '54.31637046286201',
    '.': '.',
  },
  {
    id: '9092407',
    name: '3. Polizeirevier Lübeck',
    city: 'Lübeck, Hansestadt',
    zipcode: '23566',
    street: 'Meesenring',
    houseNumber: '9',
    telephone: '+49 451 131-6345',
    fax: '+49 451 131-6319',
    email: 'luebeck-prev03@polizei.landsh.de',
    website: '',
    longitude: '10.71990326564793',
    latitude: '53.86511320627785',
    '.': '.',
  },
  {
    id: '',
  },
]

const columnNames = tableData && Object.keys(tableData[0])
const mapData = null
function setMapData(data) {
  mapData = data
}

it('renders map form component', () => {
  const renderedTable = renderer
    .create(
      <MapForm
        tableData={tableData}
        columnNames={columnNames}
        setMapData={setMapData}
      />
    )
    .toJSON()
  expect(renderedTable).toMatchSnapshot()
})
