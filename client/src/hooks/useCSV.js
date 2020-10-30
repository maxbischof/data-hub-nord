import { useState, useEffect } from 'react'
import { fetchCSV, csvToObjectsArray } from '../lib/csv.js'
import * as CSV from 'csv-string'

export function useCSV(url) {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    fetchCSV(url).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        seperator: CSV.detect(response),
      })

      setTableData(array)
    })
  }, [url])

  return tableData
}
