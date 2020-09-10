import React from 'react'
import Table from './Table'
import renderer from 'react-test-renderer'
import { csvToObjectsArray } from '../lib/csv'

const exampleCSV = `Land;Stadt;Kategorie;Merkmal;Jahr;Unterbschäftigte;Unterbschäftigtenquote
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2009;18918;15,1
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2010;18414;14,4
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2011;18469;14,6
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2012;17565;13,5
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2013;17457;13,2
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2014;17468;13
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2015;17278;12,7
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2016;18633;13,5
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2017;17496;12,3
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2018;16608;11,5
  de-sh;Kiel;wirtschaft_arbeit;Unterbeschäftigung;2019;15453;10,8
  `
const exampleArray = csvToObjectsArray({
  csv: exampleCSV,
  columnNames: [],
  seperator: ';',
})

it('renders table component', () => {
  const renderedTable = renderer
    .create(<Table data={exampleArray}></Table>)
    .toJSON()
  expect(renderedTable).toMatchSnapshot()
})
