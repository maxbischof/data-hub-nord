import React from 'react'
import TableComponent from '../components/Table'
import { csvToObjectsArray } from '../utils'

export const Table = () => {
  const exampleCSV = `Land;Stadt;Kategorie;Merkmal;Jahr;Unterbsch�ftigte;Unterbsch�ftigtenquote
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2009;18918;15,1
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2010;18414;14,4
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2011;18469;14,6
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2012;17565;13,5
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2013;17457;13,2
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2014;17468;13
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2015;17278;12,7
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2016;18633;13,5
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2017;17496;12,3
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2018;16608;11,5
  de-sh;Kiel;wirtschaft_arbeit;Unterbesch�ftigung;2019;15453;10,8
  `
  const exampleArray = csvToObjectsArray({ csv: exampleCSV, columnNames: [], seperator: ";" })

  return <TableComponent array={exampleArray}></TableComponent>
}