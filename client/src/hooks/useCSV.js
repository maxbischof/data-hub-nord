import { useState, useEffect } from 'react'
import { fetchCSV, csvToObjectsArray } from '../lib/csv.js'
import { filterProperties } from '../lib/dataWrangling.js'

export function useCSV({ url, keys, seperator, removeColumns }) {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchCSV({ path: url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        columnNames: keys,
        seperator,
      })

      const filteredArray = removeColumns
        ? filterProperties({
            deleteProperties: removeColumns,
            objectsArray: array,
          })
        : array

      setTableData(filteredArray)
    })
  }, [keys, seperator, url, removeColumns])

  return tableData
}
