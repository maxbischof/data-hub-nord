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
