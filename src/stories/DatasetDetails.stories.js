import React from "react"
import DatasetDetailsComponent from "../components/DatasetDetails"
import { datasets } from "../settings.js"
import BackButtonComponent from "../components/ui/BackButton"

export default {
  title: "DatasetDetails",
  component: DatasetDetailsComponent,
}

const Template = (args) => <DatasetDetailsComponent {...args} />

export const DatasetDetailsTable = Template.bind({})
DatasetDetailsTable.args = {
  datasetDescription: datasets[0],
}

export const BackButton = () => <BackButtonComponent />
