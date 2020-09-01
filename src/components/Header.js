import React from 'react'
import styled from 'styled-components'
import Logo from '../icons/datahubnord_logo.js'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const pathname = useLocation().pathname
  const color = pathname === "/" ? "white" : "#333"

  return (
    <StyledHeader color={color}>
      <a href="/">
        <Logo color={color}/>
        DataHubNord
      </a>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: absolute;
  
  svg {
    margin: 0 12px 0 0;
  }

  a {
    color: ${props => props.color};
    font-weight: 700;
    padding: 26px 0 30px 22px;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a:visited {
    color: ${props => props.color};
  }
`

