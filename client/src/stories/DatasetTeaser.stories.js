import React from 'react'
import DatasetTeaserComponent from '../components/DatasetTeaser'

export default {
  title: 'DatasetTeaser',
  component: DatasetTeaserComponent,
}

const Template = () => (
  <DatasetTeaserComponent
    imagePath="/Users/student/neuefische/data-hub-nord/src/images/sea.jpg"
    title="Seehundbänke an der Nordsee"
    description="Lage der Seehundbänke in der westlichen Deutschen Bucht erfasst durch mehrere Forschungsschiffe"
  />
)

export const DatasetTeaserTable = Template.bind({})
