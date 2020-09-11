import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'


export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Router>
        <Story />
      </Router>
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}