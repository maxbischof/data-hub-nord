import React from "react"
import PropTypes from "prop-types"
import { uid } from "react-uid"
import styled from 'styled-components'

export default function Table({ tableData }) {
  let headerRow = null
  let bodyRows = null

  if(tableData.length) {
    const columnNames = Object.keys(tableData[0])

    headerRow = (
      columnNames.map((name) => (
        <td key={name}>{name}</td>
      ))
    )

    bodyRows = (
      tableData.map((object) => (
        <tr key={uid(object)}>
          {columnNames.map((name) => (
            <td key={uid(name)}>{object[name]}</td>
          ))}
        </tr>
      ))
    )
  }

  return (
        <OverflowContainer>
          <HeaderBackground />
          <StyledTable>
            <TableHeader>
              <tr>
                {headerRow}
              </tr>
            </TableHeader>

            <TableBody>
              {bodyRows}
            </TableBody>
          </StyledTable>
        </OverflowContainer>
  )
}

Table.propTypes = {
  tableData: PropTypes.array,
}

const OverflowContainer = styled.div`
  overflow-x: scroll;
  margin: 10px 0 0 37px;
`

const StyledTable = styled.table`
  border-spacing: 0;

  td{
    padding: 10px;
  }

  tr > td:first-child{
    position: sticky;
    left: 0;
  }

  tr > td:first-child::after{
    box-shadow: 5px 0 5px -5px inset rgba(0, 0, 0, 0.20);
    right: -5px;
    content: " ";
    height: 100%;
    position: absolute;
    top: 0;
    width: 5px;
  }
`

const TableHeader = styled.thead`
  color: white;

  td{
    border: 0px solid #1D3557;
    background-color: #1D3557;
  }

  td:first-child {
    border-top-left-radius: 5px;
  }

  td:last-child {
    border-top-right-radius: 5px;
  }
`

const HeaderBackground = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: white;
`

const TableBody = styled.tbody`
  tr > td:first-child{
    background-color: white;
  }

  tr:nth-child(2n) > td:first-child{
    background: #EFF0F0;
  }

  tr:nth-child(2n) {
    background: #EFF0F0;
  }
`