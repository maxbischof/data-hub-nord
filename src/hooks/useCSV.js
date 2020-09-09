import { useState, useEffect } from 'react'
import { fetchCSV, csvToObjectsArray } from '../lib/csv.js'

export function useCSV(url, keys, seperator) {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchCSV({ path: url }).then((response) => {
      const array = csvToObjectsArray({
        csv: response,
        columnNames: keys,
        seperator,
      })
      setTableData(array)
    })
  }, [keys, seperator, url])

  return tableData
}
