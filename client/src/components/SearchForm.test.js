import React from 'react'
import SearchForm from './SearchForm'
import renderer from 'react-test-renderer'

it('renders SearchForm component', () => {
  const renderedSearchForm = renderer.create(<SearchForm />).toJSON()
  expect(renderedSearchForm).toMatchSnapshot()
})
