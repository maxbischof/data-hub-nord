import { useState, useEffect } from 'react'
import { fetchCSV, csvToObjectsArray } from '../lib/csv.js'
import { filterProperties, sortProperties } from '../lib/dataWrangling.js'

export function useCSV({ url, keys, seperator, removeColumns, columnsOrder }) {
  const [tableData, setTableData] = useState()

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

      const sortedArray = columnsOrder
        ? sortProperties({
            order: columnsOrder,
            objectsArray: filteredArray,
          })
        : filteredArray

      setTableData(sortedArray)
    })
  }, [keys, seperator, url, removeColumns, columnsOrder])

  return tableData
}
