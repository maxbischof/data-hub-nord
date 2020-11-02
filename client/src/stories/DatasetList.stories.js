import React from 'react'
import DatasetListComponent from '../components/DatasetList'
import { datasets } from '../components/testDatasets.js'

export default {
  title: 'DatasetList',
  component: DatasetListComponent,
}
function setRef() {}
export const DatasetList = () => (
  <DatasetListComponent datasets={datasets} setRef={setRef} />
)
