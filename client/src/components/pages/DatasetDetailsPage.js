import React, { useEffect, useState } from 'react'
import BackButton from '../ui/BackButton'
import DatasetDetails from '../DatasetDetails'
import { useParams } from 'react-router-dom'

export default function DatasetDetailsPage() {
  const { datasetid } = useParams()
  const [dataset, setDataset] = useState()

  useEffect(() => {
    fetch('/datasets/' + datasetid)
      .then((response) => response.json())
      .then((result) => setDataset(result))
  }, [datasetid])

  return (
    <>
      <BackButton />
      {dataset && <DatasetDetails {...dataset} />}
    </>
  )
}
