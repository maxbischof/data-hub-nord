import React from 'react'

export default function SearchForm({ searchTerm, setSearchTerm }) {
  let timeout = null

  function handleChange(event) {
    const searchTerm = event.target.value
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      setSearchTerm(searchTerm)
    }, 1000)
  }

  return (
    <form>
      <label>
        Suche
        <input type="text" onChange={handleChange} />{' '}
      </label>
    </form>
  )
}
