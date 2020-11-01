import React, { useRef } from 'react'
import renderer from 'react-test-renderer'
import DataList from './DatasetList'
import { datasets } from './testDatasets'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <DataList
        datasets={datasets}
        headline={'Alle Datensätze'}
        showMoreButton={true}
      />
    </Router>
  )
  expect(tree).toMatchSnapshot()
})
