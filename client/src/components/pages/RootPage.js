import React, { useRef } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import SearchInput from '../SearchForm'
import LoadingDots from '../ui/LoadingDots'

export default function RootPage({
  setSearchTerm,
  datasetsCatalog,
  loadNextPage,
  hasMoreDatasets,
  resetDatasetsCatalog,
  searchTerm,
}) {
  const headlineRef = useRef(null)

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={headlineRef} />
      <SearchInput
        setSearchTerm={setSearchTerm}
        resetSearchResults={resetDatasetsCatalog}
      />
      {!datasetsCatalog ? (
        <LoadingDots />
      ) : (
        <DatasetList
          datasets={datasetsCatalog}
          headlineRef={headlineRef}
          headline={searchTerm ? 'Suche' : 'Datensätze'}
          loadMore={loadNextPage}
          showMoreButton={hasMoreDatasets}
        />
      )}
    </>
  )
}
