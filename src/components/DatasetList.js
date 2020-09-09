import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DatasetTeaser from './DatasetTeaser'
import PropTypes from 'prop-types'

export default function DataList({ datasets, setRef }) {
  const headlineRef = useRef(null)
  setRef(headlineRef)

  return (
    <StyledDatasetList>
      <h2 ref={headlineRef}>Datensätze</h2>
      {datasets.map((dataset) => (
        <Link
          to={`/datensaetze/${dataset.name.replace(' ', '-')}-${dataset.id}`}
          key={dataset.id}
        >
          <DatasetTeaser
            imagePath={dataset.imageUrl}
            title={dataset.name}
            description={dataset.description}
          />
        </Link>
      ))}
    </StyledDatasetList>
  )
}

DataList.propTypes = {
  datasets: PropTypes.array.isRequired,
  setRef: PropTypes.func,
}

const StyledDatasetList = styled.section`
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
