import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../icons/search.svg'

export default function SearchForm({ setSearchTerm, resetSearchResults }) {
  let timeout = null

  function handleChange(event) {
    const searchTerm = event.target.value
    resetSearchResults('')
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      setSearchTerm(searchTerm)
    }, 1000)
  }

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Label>
        <SearchIcon />
        <Input
          type="text"
          onChange={handleChange}
          placeholder="Suche nach Titel"
        />{' '}
      </Label>
    </Form>
  )
}

const Form = styled.form`
  border-radius: 20px;
  margin: 20px;
  align-self: center;
  padding: 5px;
  border: 1px solid var(--grey);
  width: 300px;
`

const Label = styled.label`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  margin-left: 5px;
  border: hidden;
  &:focus {
    outline: none;
  }
`
