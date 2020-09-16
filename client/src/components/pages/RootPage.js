import React, { useEffect, useRef, useState } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import PropTypes from 'prop-types'
import SearchInput from '../SearchForm'
import LoadingDots from '../ui/LoadingDots'

export default function RootPage({ datasets }) {
  const headlineRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState()
  const [isSearching, setIsSearching] = useState()

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  useEffect(() => {
    if (searchTerm) {
      fetch('/datasets?searchterm=' + searchTerm)
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
    }
  }, [searchTerm, datasets])

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={headlineRef} />
      <SearchInput
        setSearchTerm={setSearchTerm}
        hasInput={setIsSearching}
        resetSearchResults={setSearchResults}
      />
      {isSearching && !searchResults ? (
        <LoadingDots />
      ) : (
        <DatasetList
          datasets={isSearching && searchResults ? searchResults : datasets}
          headlineRef={headlineRef}
          headline={isSearching ? 'Suche' : 'Datensätze'}
        />
      )}
    </>
  )
}

RootPage.propTypes = {
  datasets: PropTypes.array.isRequired,
}
