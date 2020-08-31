import React from 'react'
import styled from "styled-components"

export default function Footer() {

  return <StyledFooter>
      <a href="https://twitter.com/datahubnord">
        <svg xmlns="http://www.w3.org/2000/svg" width="20.836" height="20.836" viewBox="0 0 20.836 20.836">
          <path id="Icon_awesome-twitter-square" data-name="Icon awesome-twitter-square" d="M18.6,2.25H2.232A2.233,2.233,0,0,0,0,4.482V20.854a2.233,2.233,0,0,0,2.232,2.232H18.6a2.233,2.233,0,0,0,2.232-2.232V4.482A2.233,2.233,0,0,0,18.6,2.25ZM16.329,9.636c.009.13.009.265.009.4A8.619,8.619,0,0,1,7.66,18.71a8.639,8.639,0,0,1-4.683-1.367,6.426,6.426,0,0,0,.735.037,6.116,6.116,0,0,0,3.786-1.3,3.054,3.054,0,0,1-2.851-2.116,3.288,3.288,0,0,0,1.377-.056,3.051,3.051,0,0,1-2.442-3v-.037a3.048,3.048,0,0,0,1.377.386A3.044,3.044,0,0,1,3.6,8.719,3.012,3.012,0,0,1,4.014,7.18,8.661,8.661,0,0,0,10.3,10.37a3.057,3.057,0,0,1,5.2-2.786,5.977,5.977,0,0,0,1.935-.735A3.042,3.042,0,0,1,16.1,8.529a6.07,6.07,0,0,0,1.758-.474A6.421,6.421,0,0,1,16.329,9.636Z" transform="translate(0 -2.25)" fill="#333"/>
        </svg>
        <span>Twitter</span>
      </a>
    
      <a href="https://www.linkedin.com/in/maxbischof/">
        <svg xmlns="http://www.w3.org/2000/svg" width="21.128" height="21.128" viewBox="0 0 21.128 21.128">
          <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M19.619,2.25H1.5A1.516,1.516,0,0,0,0,3.773V21.855a1.516,1.516,0,0,0,1.5,1.523H19.619a1.52,1.52,0,0,0,1.509-1.523V3.773A1.52,1.52,0,0,0,19.619,2.25ZM6.386,20.36H3.254V10.277H6.39V20.36ZM4.82,8.9A1.816,1.816,0,1,1,6.636,7.084,1.816,1.816,0,0,1,4.82,8.9Zm13.3,11.46H14.993v-4.9c0-1.17-.024-2.674-1.627-2.674-1.632,0-1.882,1.273-1.882,2.589v4.99H8.352V10.277h3v1.377H11.4a3.3,3.3,0,0,1,2.966-1.627c3.169,0,3.759,2.089,3.759,4.806Z" transform="translate(0 -2.25)" fill="#333"/>
        </svg>
        <span>LinkedIn</span>
      </a>
  </StyledFooter>
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px solid #333;
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
    color: #333;
  }
`
