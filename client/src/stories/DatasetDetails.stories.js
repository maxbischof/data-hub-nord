import React from 'react'
import DatasetDetailsComponent from '../components/DatasetDetails'
import { datasets } from '../components/testDatasets.js'
import { ReactComponent as BackArrow } from '../icons/backarrow.svg'
import styled from 'styled-components'

export default {
  title: 'DatasetDetails',
  component: DatasetDetailsComponent,
}

const Template = (args) => <DatasetDetailsComponent {...args} />

export const DatasetDetailsTable = Template.bind({})
DatasetDetailsTable.args = { ...datasets[0] }

export const BackButton = () => (
  <StyledLink to="/">
    <BackArrow />
    Zurück
  </StyledLink>
)

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px 37px;

  svg {
    margin: 0 12px 0 0;
  }
`
