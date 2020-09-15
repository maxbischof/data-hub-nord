import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DatasetTeaser from './DatasetTeaser'
import PropTypes from 'prop-types'

export default function DataList({ datasets, headlineRef, headline }) {
  return (
    <>
      <DatasetListHeadline ref={headlineRef}>{headline}</DatasetListHeadline>
      <StyledDatasetList>
        {datasets.map((dataset, index) => (
          <Link
            to={`/datensaetze/${dataset.title.replace(' ', '-')}-${dataset.id}`}
            key={dataset.url}
          >
            <DatasetTeaser
              imagePath={dataset.imageUrl}
              title={dataset.title}
              description={dataset.description}
            />
          </Link>
        ))}
      </StyledDatasetList>
    </>
  )
}

DataList.propTypes = {
  datasets: PropTypes.array.isRequired,
  setRef: PropTypes.func,
}

const StyledDatasetList = styled.section`
  flex: 1 0 auto;
  padding: 0 10px 30px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const DatasetListHeadline = styled.h2`
  font-size: 25px;
  padding: 0 0 5px 0;
  border-bottom: 1px solid var(--grey);
  margin: 50px 0 25px 35px;
  align-self: flex-start;
`
