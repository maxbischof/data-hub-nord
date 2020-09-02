import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Button({ color, linkPath, children }) {
  return <Link to={linkPath}><StyledButton color={color}>{children}</StyledButton></Link>
}

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.color};
  text-align: center;
  border: none;
  border-radius: 2px;
  height: 36px;
  width: 146px;
  padding: 0 16px;
  text-align: center;
  cursor: pointer;
`