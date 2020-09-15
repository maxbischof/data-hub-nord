import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function DatasetTeaser({ imagePath, title, description }) {
  return (
    <StyledDatasetTeaser>
      <Title>{title}</Title>
      <hr />
      <Description>
        {description.length > 70
          ? description.substring(0, 67) + '...'
          : description}
      </Description>
    </StyledDatasetTeaser>
  )
}

DatasetTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

const StyledDatasetTeaser = styled.article`
  margin: 25px;
  max-width: 300px;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0 0 0;
`

const Description = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin: 10px 0 0 0;
  word-wrap: break-word;
`
