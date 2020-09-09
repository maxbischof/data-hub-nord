import { proxyURL } from '../settings'
import iconv from 'iconv-lite'

export function fetchCSV({ path }) {
  return fetch(proxyURL + path)
    .then((res) => res.arrayBuffer())
    .then((arrayBuffer) =>
      iconv.decode(new Buffer(arrayBuffer), 'iso-8859-1').toString()
    )
    .catch((error) => console.log('error', error))
}

export function csvToObjectsArray({ csv, columnNames, seperator }) {
  let rows = csv.split('\n')

  const hasColumnNames = columnNames.length === 0
  const objectKeys = hasColumnNames ? rows[0].split(seperator) : columnNames
  rows = hasColumnNames ? rows.slice(1, rows.length - 1) : rows

  const objectsArray = rows.map((row) => {
    const objectValues = row.split(seperator)

    const object = {}
    objectKeys.forEach((key, index) => (object[key] = objectValues[index]))

    return object
  })

  return objectsArray
}
