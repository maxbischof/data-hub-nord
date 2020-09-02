import React from 'react'
import styled from 'styled-components'
import {ReactComponent as BackArrow} from '../../icons/backarrow.svg'
import { Link } from 'react-router-dom'

export default function BackButton() {

  return (
    <Button>
      <Link to="/">
        <BackArrow />
        Zurück
      </Link>
    </Button>
  )
}

const Button = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px 37px;

  svg {
    margin: 0 12px 0 0;
  }
`