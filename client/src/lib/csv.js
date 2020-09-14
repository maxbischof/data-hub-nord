import iconv from 'iconv-lite'

export function fetchCSV({ path }) {
  return fetch('/proxy/' + path)
    .then((res) => res.text())
    .catch((error) => console.log('error', error))
}

export function csvToObjectsArray({ csv, columnNames, seperator }) {
  let rows = csv.split('\n')

  const objectKeys = rows[0].split(seperator)
  console.log(objectKeys)
  rows = rows.slice(1, rows.length - 1)

  const objectsArray = rows.map((row) => {
    const objectValues = row.split(seperator)

    return objectKeys.reduce((object, key, index) => {
      object[key] = objectValues[index]
      return object
    }, {})
  })

  return objectsArray
}
