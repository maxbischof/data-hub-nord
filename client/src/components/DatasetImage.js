import React from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'

export default function DatasetImage({ path }) {
  return <Image src={path} />
}

const Image = styled.img`
  border-radius: 5px;
  border: 1px solid var(--grey);
  width: 100%;
  margin: 0;
`

// DatasetImage.propTypes = {
//   path: PropTypes.string.isRequired,
// }
