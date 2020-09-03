import React from "react"
import DatasetTeaserComponent from "../components/DatasetTeaser"
import { datasets } from "../settings.js"

export default {
  title: "DatasetTeaser",
  component: DatasetTeaserComponent,
}

const Template = (args) => <DatasetTeaserComponent {...args} />

export const DatasetTeaserTable = Template.bind({})
DatasetTeaserTable.args = {
  description: datasets[0].description,
  imagePath: datasets[0].imageUrl, 
  title: datasets[0].name
}
