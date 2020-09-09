import React from 'react'
import HeaderComponent from '../components/Header'
import styled from 'styled-components'
import { ReactComponent as LogoSVG } from '../icons/datahubnord_logo.svg'

export default {
  title: 'Header',
  component: HeaderComponent,
}

const Template = (args) => (
  <StyledHeader {...args} style={{ backgroundColor: '#C4C4C4' }}>
    <a href="/">
      <Logo color={args.color} />
      <span>DataHubNord</span>
    </a>
  </StyledHeader>
)

export const HeaderWhite = Template.bind({})
HeaderWhite.args = {
  color: 'white',
  position: 'static',
}

export const HeaderGrey = Template.bind({})
HeaderGrey.args = {
  color: '#333',
  position: 'static',
}

const Logo = styled(LogoSVG)`
  stroke: ${(props) => props.color};
`

const StyledHeader = styled.header`
  position: ${(props) => props.position};

  span {
    margin: 0 0 0 12px;
  }

  a {
    color: ${(props) => props.color};
    font-weight: 700;
    padding: 26px 0 30px 22px;
    display: flex;
    align-items: center;
  }

  a:visited {
    color: ${(props) => props.color};
  }
`
