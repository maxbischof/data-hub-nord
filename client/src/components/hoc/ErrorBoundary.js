import React, { Component } from 'react'
import RootPage from '../pages/RootPage'
import ErrorBanner from '../ui/ErrorBanner'

export default class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    return { error: error }
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <ErrorBanner />
          <RootPage />
        </>
      )
    }
    return this.props.children
  }
}
