import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33">
        <g id="Icon_feather-database" data-name="Icon feather-database" transform="translate(-3 -1.5)">
          <path id="Pfad_4" data-name="Pfad 4" d="M31.5,7.5C31.5,9.985,25.456,12,18,12S4.5,9.985,4.5,7.5,10.544,3,18,3,31.5,5.015,31.5,7.5Z" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          <path id="Pfad_5" data-name="Pfad 5" d="M31.5,18c0,2.49-6,4.5-13.5,4.5S4.5,20.49,4.5,18" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          <path id="Pfad_6" data-name="Pfad 6" d="M4.5,7.5v21c0,2.49,6,4.5,13.5,4.5s13.5-2.01,13.5-4.5V7.5" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
        </g>
      </svg>
      DataHubNord
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  color: #333;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 26px 0 30px 22px;

  svg {
    margin: 0 12px 0 0;
  }
`

