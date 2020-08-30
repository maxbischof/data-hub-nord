import React from 'react'
import styled from 'styled-components'

export default function BackButton() {

  return (
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.619" viewBox="0 0 13.503 23.619">
        <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" fill="#333" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(-11.251 -6.194)"/>
      </svg>
      Zurück
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