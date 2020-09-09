import React, { useState } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import PropTypes from 'prop-types'

export default function RootPage({ datasets }) {
  const [datasetListRef, setDatasetListRef] = useState()

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={datasetListRef} />
      <DatasetList datasets={datasets} setRef={setDatasetListRef} />
    </>
  )
}

RootPage.propTypes = {
  datasets: PropTypes.array.isRequired,
}
