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
      border: 'none',
    },
  }

  const renderStyle = buttonStyles[styleType]

  return (
    <StyledButton
      onClick={() => onClick(onClickParameter)}
      buttonStyle={renderStyle}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.buttonStyle.color};
  background-color: ${(props) => props.buttonStyle.background};
  text-align: center;
  border: ${(props) => props.buttonStyle.border};
  border-radius: 2px;
  height: 36px;
  width: 146px;
  padding: 0 16px;
  text-align: center;
  cursor: pointer;
`

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  reference: PropTypes.object,
}
