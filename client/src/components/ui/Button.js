import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Button({
  styleType,
  children,
  onClick,
  onClickParameter,
  className,
}) {
  const buttonStyles = {
    more: {
      color: 'var(--cyan)',
      background: 'white',
      border: '1px solid var(--cyan)',
    },
    action: {
      color: 'white',
      background: 'var(--red)',
    },
  }

  const renderStyle = buttonStyles[styleType]

  return (
    <StyledButton
      onClick={() => onClick && onClick(onClickParameter)}
      buttonStyle={renderStyle}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: ${(props) => props.buttonStyle.fontsize || '15px'};
  font-weight: ${(props) => props.buttonStyle.fontweight || '700'};
  text-decoration: none;
  color: ${(props) => props.buttonStyle.color};
  background-color: ${(props) => props.buttonStyle.background};
  text-align: center;
  border: ${(props) => props.buttonStyle.border || 'none'};
  border-radius: ${(props) => props.buttonStyle.borderradius || '2px'};
  text-align: center;
  cursor: pointer;
  display: ${(props) => props.buttonStyle.display || 'inline-block'};
  align-self: ${(props) => props.buttonStyle.alignself || ''};
  margin: ${(props) => props.buttonStyle.margin || '0'};
  padding: 10px 16px;
`

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  reference: PropTypes.object,
}
