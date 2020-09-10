import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

it('renders datahubnord text', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  )
  expect(getByText('DataHubNord')).toBeInTheDocument()
})

it('renders header with rootpage style ', () => {
  const renderedHeader = renderer
    .create(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )
    .toJSON()

  expect(renderedHeader).toMatchSnapshot()
})

it('renders header with datasetdetails style ', () => {
  const renderedHeader = renderer
    .create(
      <MemoryRouter initialEntries={[`/datensaetze/Arbeitslosigkeit-Kiel-1`]}>
        <Header />
      </MemoryRouter>
    )
    .toJSON()

  expect(renderedHeader).toMatchSnapshot()
})
