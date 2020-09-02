import React from 'react'
import DatasetImage from './DatasetImage'
import styled from 'styled-components'

export default function DatasetTeaser ({ imagePath, titel, description }) {

  return (
    <StyledDatasetTeaser>
      <DatasetImage path={imagePath} />
      <Titel>{titel}</Titel>
      <Description>{description.length > 70 ? description.substring(0, 70) + "..." : description}</Description>
    </StyledDatasetTeaser>
  )
}

const StyledDatasetTeaser = styled.article`
  margin: 0 0 50px 0;
`

const Titel = styled.h3`
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