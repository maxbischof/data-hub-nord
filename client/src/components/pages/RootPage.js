import React, { useRef } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import SearchInput from '../SearchForm'
import LoadingDots from '../ui/LoadingDots'
import { useDatasetsCatalog } from '../../hooks/useDatasetsCatalog'
import BookmarksList from '../BookmarksList'

export default function RootPage() {
  const {
    datasetsCatalog,
    hasMoreDatasets,
    resetDatasetsCatalog,
    loadNextPage,
    setSearchTerm,
    searchTerm,
  } = useDatasetsCatalog()

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
      {!searchTerm && <BookmarksList />}
      {!datasetsCatalog ? (
        <LoadingDots />
      ) : (
        <DatasetList
          datasets={datasetsCatalog}
          headlineRef={headlineRef}
          headline={searchTerm ? 'Suche' : 'Alle Datensätze'}
          loadMore={loadNextPage}
          showMoreButton={hasMoreDatasets}
        />
      )}
    </>
  )
}
