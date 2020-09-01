import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from '../icons/datahubnord_logo.svg'

export default function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <Logo />
        DataHubNord
      </a>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  svg {
    margin: 0 12px 0 0;
  }

  a {
    color: var(--grey);
    font-weight: 700;
    margin: 26px 0 30px 22px;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`

