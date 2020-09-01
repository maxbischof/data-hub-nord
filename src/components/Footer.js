import React from 'react'
import styled from "styled-components"
import {ReactComponent as TwitterIcon} from '../icons/twitter.svg'
import {ReactComponent as LinkedInIcon} from '../icons/linkedin.svg'

export default function Footer() {

  return <StyledFooter>
      <a href="https://twitter.com/datahubnord">
        <TwitterIcon />
        <span>Twitter</span>
      </a>
    
      <a href="https://www.linkedin.com/in/maxbischof/">
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>
  </StyledFooter>
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px solid var(--grey);
  margin-top: 30px;

  span {
    font-size: 12px;
    margin-top: 6px;
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 15px 0 15px;
    text-decoration: none;
  }

  a:visited {
    color: var(--grey);
  }
`
