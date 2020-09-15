import React, { useEffect, useRef, useState } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import PropTypes from 'prop-types'
import SearchInput from '../SearchForm'

export default function RootPage({ datasets }) {
  const headlineRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  useEffect(() => {
    setSearchResults(
      datasets.filter((dataset) =>
        dataset.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm, datasets])

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={headlineRef} />
      <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {searchResults && (
        <DatasetList datasets={searchResults} headlineRef={headlineRef} />
      )}
      <DatasetList datasets={datasets} headlineRef={headlineRef} />
    </>
  )
}

RootPage.propTypes = {
  datasets: PropTypes.array.isRequired,
}
