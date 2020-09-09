import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Button({ color, children, onClick, reference }) {
  return (
    <StyledButton onClick={() => onClick(reference)} color={color}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background-color: ${(props) => props.color};
  text-align: center;
  border: none;
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
