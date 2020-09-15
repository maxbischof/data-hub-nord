import React, { useRef } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'
import PropTypes from 'prop-types'

export default function RootPage({ datasets }) {
  const headlineRef = useRef(null)

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={headlineRef} />
      <DatasetList datasets={datasets} headlineRef={headlineRef} />
    </>
  )
}

RootPage.propTypes = {
  datasets: PropTypes.array.isRequired,
}
