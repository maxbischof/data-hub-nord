import React, { useState } from 'react'
import WelcomeSection from '../WelcomeSection'
import DatasetList from '../DatasetList'

export default function RootPage({ datasets }) {
  const [datasetListRef, setDatasetListRef] = useState()

  const scrollToRef = (ref) => {
    console.log("scroll")
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={datasetListRef}/>
      <DatasetList datasets={datasets} setRef={setDatasetListRef}/>
    </>
  )
}