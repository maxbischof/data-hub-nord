import React from 'react'
import renderer from 'react-test-renderer'
import DataList from './DatasetList'
import { datasets } from './testDatasets'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders correctly', () => {
  function returnRef(ref) {}

  const tree = renderer.create(
    <Router>
      <DataList datasets={datasets} setRef={returnRef} />
    </Router>
  )
  expect(tree).toMatchSnapshot()
})
