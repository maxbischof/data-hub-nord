import React from 'react'
import Footer from './Footer'
import renderer from 'react-test-renderer'

it('renders footer component', () => {
  const renderedFooter = renderer.create(<Footer />).toJSON()
  expect(renderedFooter).toMatchSnapshot()
})
