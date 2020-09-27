import Geocode from 'react-geocode'
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODE_KEY)

export async function fetchAdress(dataset, adressColumnNames) {
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

export function renameLatLongColumns(event, tableData, setMapData) {
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
