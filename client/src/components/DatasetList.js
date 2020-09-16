import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DatasetTeaser from './DatasetTeaser'
import PropTypes from 'prop-types'
import Button from './ui/Button'

export default function DataList({ datasets, headlineRef, headline }) {
  const [chunksCount, setChunksCount] = useState(1)
  const datasetChunks = datasets.slice(0, 10 * chunksCount)

  return (
    <>
      <DatasetListHeadline ref={headlineRef}>{headline}</DatasetListHeadline>
      <StyledDatasetList>
        {datasetChunks.map((dataset, index) => (
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

      {datasets.length > 10 * chunksCount && (
        <MoreButton
          onClick={setChunksCount}
          onClickParameter={chunksCount + 1}
          color={'transparent'}
        >
          Mehr laden
        </MoreButton>
      )}
    </>
  )
}

DataList.propTypes = {
  datasets: PropTypes.array.isRequired,
  setRef: PropTypes.func,
}

const MoreButton = styled(Button)`
  align-self: center;
  padding: 5px;
  color: var(--cyan);
  border: 1px solid var(--cyan);
`

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
