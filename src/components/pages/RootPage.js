import React, { useRef } from 'react'
import DatasetTeaser from "../DatasetTeaser"
import { Link } from "react-router-dom"
import styled from "styled-components"
import WelcomeSection from '../WelcomeSection'

export default function RootPage({datasets}) {
  const datasetSectionRef = useRef(null)
  const scrollToRef = (ref) => {
    console.log("scroll")
    window.scrollTo(0, ref.current.offsetTop)
  }
  
  return (
    <>
      <WelcomeSection onClickButton={scrollToRef} scrollTo={datasetSectionRef}/>
      <DatasetList>
        <h2 ref={datasetSectionRef}>Datensätze</h2>
        {datasets.map((dataset) => (
          <Link
            to={`/datensaetze/${dataset.name.replace(" ", "-")}-${dataset.id}`}
            key={dataset.id}
          >
            <DatasetTeaser
              imagePath={dataset.imageUrl}
              title={dataset.name}
              description={dataset.description}
            />
          </Link>
        ))}
      </DatasetList>
    </>
  )
}

const DatasetList = styled.section`
  flex: 1 0 auto;
  padding: 50px 37px 30px 37px;

  h2 {
    font-size: 25px;
    padding: 0 0 5px 0;
    border-bottom: 1px solid var(--grey);
    display: inline-block;
    margin: 0 0 30px 0;
  }
`