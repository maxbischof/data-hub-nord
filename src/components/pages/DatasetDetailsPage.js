import React from 'react'
import BackButton from '../ui/BackButton'
import DatasetDetails from '../DatasetDetails'
import PropTypes from 'prop-types'

export default function DatasetDetailsPage({ dataset }) {
  return <>
    <BackButton />
    <DatasetDetails {...dataset} />
  </>
}

DatasetDetailsPage.propTypes = {
  dataset: PropTypes.object.isRequired,
}
