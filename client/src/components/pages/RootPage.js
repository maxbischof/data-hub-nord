import React, { useEffect, useRef, useState } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import SearchInput from '../SearchForm'
import LoadingDots from '../ui/LoadingDots'

export default function RootPage({ createRoutes }) {
  const headlineRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState()
  const [datasets, setDatasets] = useState()
  const [pageToFetch, setPageToFetch] = useState(1)
  const [hasMoreDatasets, setHasMoreDatasets] = useState()

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  function increasePageToFetch() {
    setPageToFetch(pageToFetch + 1)
  }

  useEffect(() => {
    const pageQuery = 'page=' + pageToFetch
    const searchTermQuery = searchTerm ? 'searchterm=' + searchTerm : ''
    fetch('/datasets?' + pageQuery + '&' + searchTermQuery)
      .then((response) => response.json())
      .then((data) => {
        setDatasets(data.datasets)
        setHasMoreDatasets(data.hasNextPage)
        createRoutes(data.datasets)
      })
      .catch((error) => console.log('error', error))
  }, [searchTerm, pageToFetch, createRoutes])

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={headlineRef} />
      <SearchInput
        setSearchTerm={setSearchTerm}
        resetSearchResults={setDatasets}
      />
      {!datasets ? (
        <LoadingDots />
      ) : (
        <DatasetList
          datasets={datasets}
          headlineRef={headlineRef}
          headline={searchTerm ? 'Suche' : 'Datensätze'}
          loadMore={increasePageToFetch}
          showMoreButton={hasMoreDatasets}
        />
      )}
    </>
  )
}
