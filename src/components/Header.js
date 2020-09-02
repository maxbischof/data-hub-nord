import React from 'react'
import styled from 'styled-components'
import Logo from '../icons/datahubnord_logo.js'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const isRootPath = useLocation().pathname === "/"
  const color = isRootPath ? "white" : "var(--grey)"
  const position = isRootPath ? "absolute" : "static"

  return (
    <StyledHeader color={color} position={position}>
      <a href="/">
        <Logo color={color}/>
        <span>DataHubNord</span>
      </a>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: ${props => props.position};
  
  span {
    margin: 0 0 0 12px;
  }

  a {
    color: ${props => props.color};
    font-weight: 700;
    padding: 26px 0 30px 22px;
    display: flex;
    align-items: center;
  }

  a:visited {
    color: ${props => props.color};
  }
`

