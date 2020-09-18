import { useEffect, useState } from 'react'

export function useDatasetsCatalog() {
  const [datasetsCatalog, setDatasetsCatalog] = useState()
  const [hasMoreDatasets, setHasMoreDatasets] = useState()
  const [pageToFetch, setPageToFetch] = useState(1)
  const [searchTerm, setSearchTerm] = useState()

  function resetDatasetsCatalog() {
    setDatasetsCatalog('')
  }

  function loadNextPage() {
    setPageToFetch(pageToFetch + 1)
  }

  useEffect(() => {
    const pageQuery = 'page=' + pageToFetch
    const searchTermQuery = searchTerm ? 'searchterm=' + searchTerm : ''
    fetch('/datasets?' + pageQuery + '&' + searchTermQuery)
      .then((response) => response.json())
      .then((data) => {
        setDatasetsCatalog(data.datasets)
        setHasMoreDatasets(data.hasNextPage)
      })
      .catch((error) => console.log('error', error))
  }, [searchTerm, pageToFetch])

  return {
    datasetsCatalog,
    hasMoreDatasets,
    resetDatasetsCatalog,
    loadNextPage,
    setSearchTerm,
    searchTerm,
  }
}
