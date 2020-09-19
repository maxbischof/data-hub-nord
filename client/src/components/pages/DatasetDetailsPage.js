import React, { useEffect, useState } from 'react'
import BackButton from '../ui/BackButton'
import DatasetDetails from '../DatasetDetails'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

export default function DatasetDetailsPage({ datasets }) {
  const { datasetid } = useParams()
  const [dataset, setDataset] = useState()

  useEffect(() => {
    fetch('/datasets/' + datasetid)
      .then((response) => response.json())
      .then((result) => setDataset(result))
  }, [])

  console.log(dataset)

  return (
    <>
      <BackButton />
      {dataset && <DatasetDetails {...dataset} />}
    </>
  )
}
