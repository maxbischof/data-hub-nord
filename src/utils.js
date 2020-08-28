import { proxyURL } from "./settings"

export function fetchCSV({ targetURL }) {
  return fetch(proxyURL + targetURL)
    .then((response) => response.text())
    .catch((error) => console.log("error", error))
}

export function csvToObjects({ csv, keys, seperator }) {
  let csvRows = csv.split('\n')

  const attributeKeys = keys === '' ? csvRows[0].split(seperator) : keys
  csvRows = keys === '' ? csvRows.slice(1, csvRows.length-1) : csvRows

  const objects = csvRows.map((row) => {
    const attributeValues = row.split(seperator)
    
    const object = {}
    attributeKeys.forEach((key, index) => object[key] = attributeValues[index])

    return object
  })

  return objects
}