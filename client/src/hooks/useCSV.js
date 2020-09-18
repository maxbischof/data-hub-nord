import { useState, useEffect } from 'react'
import { fetchCSV, csvToObjectsArray } from '../lib/csv.js'
import { filterProperties, sortProperties } from '../lib/dataWrangling.js'
import * as CSV from 'csv-string'

export function useCSV({ url, removeColumns, columnsOrder }) {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    fetchCSV({ path: url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        seperator: CSV.detect(response),
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
  }, [url, removeColumns, columnsOrder])

  return tableData
}
