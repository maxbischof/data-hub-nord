import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    return { error: error }
  }

  // componentDidCatch(error, info) {
  //   // Log the error to an error reporting service
  //   logErrorToMyService(error, info)
  // }

  render() {
    if (this.state.error) {
      return <p>Something broke</p>
    }
    return this.props.children
  }
}
