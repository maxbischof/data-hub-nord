import React, { useEffect, useRef, useState } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import PropTypes from 'prop-types'
import SearchInput from '../SearchForm'

export default function RootPage({ datasets }) {
  const headlineRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState()
  const [isSearching, setIsSearching] = useState()

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  useEffect(() => {
    searchTerm &&
      setSearchResults(
        datasets.filter((dataset) =>
          dataset.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
  }, [searchTerm, datasets])

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={headlineRef} />
      <SearchInput setSearchTerm={setSearchTerm} hasInput={setIsSearching} />
      <DatasetList
        datasets={isSearching && searchResults ? searchResults : datasets}
        headlineRef={headlineRef}
        headline={isSearching ? 'Suche' : 'Datensätze'}
      />
    </>
  )
}

RootPage.propTypes = {
  datasets: PropTypes.array.isRequired,
}
