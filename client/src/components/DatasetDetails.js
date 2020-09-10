import React from 'react'
import styled from 'styled-components'
import Table from './Table'
import PropTypes from 'prop-types'
import DatasetImage from './DatasetImage'
import { useCSV } from '../hooks/useCSV'

export default function DatasetDetails({
  imageUrl,
  name,
  description,
  license,
  publisher,
  url,
  keys,
  seperator,
}) {
  const tableData = useCSV(url, keys, seperator)

  return (
    <main>
      <DetailsDescription>
        <DatasetImage path={imageUrl} />
        <Headline>{name}</Headline>
        <Paragraph>{description}</Paragraph>
        <br />
        <Headline3>Lizenz</Headline3>
        <Paragraph>{license}</Paragraph>
        <br />
        <Headline3>Herausgeber</Headline3>
        <Paragraph>{publisher}</Paragraph>
      </DetailsDescription>

      <Headline2>Tabelle</Headline2>
      <Table data={tableData}></Table>
    </main>
  )
}

DatasetDetails.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  license: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  keys: PropTypes.array,
  seperator: PropTypes.string,
}

const DetailsDescription = styled.div`
  margin: 0 37px 30px 37px;
`

const Headline = styled.h1`
  font-size: 25px;
  margin: 30px 0 10px 0;
  padding: 0;
`

const Headline2 = styled.h2`
  font-size: 22px;
  padding: 0;
  margin: 30px 37px 0 37px;
`

const Headline3 = styled.h3`
  font-size: 17px;
  margin: 0;
  padding: 0;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`