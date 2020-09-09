import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

it('renders datahubnord text', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  )
  expect(getByText('DataHubNord')).toBeInTheDocument()
})

it('renders header with rootpage style ', () => {
  const { container, getByRole } = render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  )
  const link = getByRole('link')
  expect(link).toHaveStyle('color: white')

  const svg = container.querySelector('svg')
  expect(svg).toHaveStyle('stroke: white')

  const header = container.querySelector('header')
  expect(header).toHaveStyle('position: absolute')
})

it('renders header with datasetdetails style ', () => {
  const { container, getByRole } = render(
    <MemoryRouter initialEntries={[`/datensaetze/Arbeitslosigkeit-Kiel-1`]}>
      <Header />
    </MemoryRouter>
  )
  const link = getByRole('link')
  expect(link).toHaveStyle('color: var(--grey)')

  const svg = container.querySelector('svg')
  expect(svg).toHaveStyle('stroke: var(--grey)')

  const header = container.querySelector('header')
  expect(header).toHaveStyle('position: static')
})
