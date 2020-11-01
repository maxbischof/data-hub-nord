import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DatasetTeaser from './DatasetTeaser'
import PropTypes from 'prop-types'
import Button from './ui/Button'

export default function DataList({
  datasets,
  headlineRef,
  headline,
  loadMore,
  showMoreButton,
}) {
  return (
    <>
      <DatasetListHeadline ref={headlineRef}>{headline}</DatasetListHeadline>
      <StyledDatasetList>
        {datasets.map((dataset) => (
          <Link to={`/datensaetze/${dataset.id}`} key={dataset.id}>
            <DatasetTeaser
              title={dataset.title}
              description={dataset.description}
            />
          </Link>
        ))}
      </StyledDatasetList>

      {showMoreButton && (
        <Button onClick={loadMore} styleType={'more'}>
          Mehr laden
        </Button>
      )}
    </>
  )
}

DataList.propTypes = {
  datasets: PropTypes.array.isRequired,
  headlineRef: PropTypes.func,
  headline: PropTypes.string.isRequired,
  loadMore: PropTypes.func,
  showMoreButton: PropTypes.bool.isRequired,
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
