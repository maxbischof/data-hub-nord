import React from 'react'
import { render } from '@testing-library/react'
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

it('returns ref', async () => {
  let reference = null
  function returnRef(ref) {
    reference = ref
  }
  const { container } = render(
    <Router>
      <DataList datasets={datasets} setRef={returnRef} />
    </Router>
  )
  expect(container.querySelector('p')).toBeInTheDocument()
  expect(String(reference.current.innerHTML)).toBe('Datensätze')
})
