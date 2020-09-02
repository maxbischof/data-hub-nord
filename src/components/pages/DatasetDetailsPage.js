import React from 'react'
import BackButton from '../ui/BackButton'
import DatasetDetails from '../DatasetDetails'

export default function DatasetDetailsPage({ dataset }) {
  return<>
    <BackButton />
    <DatasetDetails {...dataset} />
  </>
}