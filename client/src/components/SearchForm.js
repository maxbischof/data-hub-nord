import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../icons/search.svg'

export default function SearchForm({ setSearchTerm, hasInput }) {
  let timeout = null

  function handleChange(event) {
    const searchTerm = event.target.value
    searchTerm.length < 2 && hasInput(true)
    searchTerm.length === 0 && hasInput(false)

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      setSearchTerm(searchTerm)
    }, 1000)
  }

  return (
    <Form>
      <Label>
        <SearchIcon />
        <Input type="text" onChange={handleChange} />{' '}
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
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  &:focus {
    outline: none;
  }
`
