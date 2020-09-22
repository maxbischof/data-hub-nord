import iconv from 'iconv-lite'
import isUTF8Encoded from 'is-utf8'

export function fetchCSV({ path }) {
  return fetch('/proxy/' + path)
    .then((res) => res.arrayBuffer())
    .then((arrayBuffer) => {
      const isUTF8 = isUTF8Encoded(new Buffer(arrayBuffer))
      return isUTF8
        ? iconv.decode(new Buffer(arrayBuffer), 'utf8').toString()
        : iconv.decode(new Buffer(arrayBuffer), 'iso-8859-1').toString()
    })
    .catch((error) => console.log('error', error))
}

export function csvToObjectsArray({ csv, seperator }) {
  let rows = csv.split('\n')

  const objectKeys = rows[0].split(seperator)
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
