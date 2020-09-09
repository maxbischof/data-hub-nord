import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackArrow } from '../../icons/backarrow.svg'
import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <StyledLink to="/">
      <BackArrow />
      Zurück
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 0 30px 37px;

  svg {
    margin: 0 12px 0 0;
  }
`
