import React, { useState } from 'react'

export function useErrorMessage(errorCode) {
  const [hasError, setHasError] = useState()

  const messages = {
    geocode:
      'Die Spalten der Tabelle konnten evtl. teilweise nicht in geographische Koordinaten übersetzt werden.',
  }

  const errorMessage = messages[errorCode]

  return { errorMessage, setHasError }
}
