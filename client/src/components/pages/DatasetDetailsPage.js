import React from 'react'
import BackButton from '../ui/BackButton'
import DatasetDetails from '../DatasetDetails'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

export default function DatasetDetailsPage({ datasets }) {
  const { datasetid } = useParams()
  const dataset = datasets.find((dataset) => dataset.id === parseInt(datasetid))
  return (
    <>
      <BackButton />
      <DatasetDetails {...dataset} />
    </>
  )
}

DatasetDetailsPage.propTypes = {
  datasets: PropTypes.array.isRequired,
}
