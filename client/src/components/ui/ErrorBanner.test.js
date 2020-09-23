import React from 'react'
import ErrorBanner from './ErrorBanner'
import renderer from 'react-test-renderer'

it('renders ErrorBanner component', () => {
  const renderedErrorBanner = renderer
    .create(<ErrorBanner text={'Houston we have a problem!'} />)
    .toJSON()
  expect(renderedErrorBanner).toMatchSnapshot()
})
