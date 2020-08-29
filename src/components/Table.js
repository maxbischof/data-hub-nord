import React from "react"
import PropTypes from "prop-types"
import { uid } from "react-uid"

export default function Table({ array }) {
  //console.log(array[0] && Object.keys(array[0]))
  const columnNames = Object.keys(array[0])

  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((name) => (
            <th key={name}>{name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {array.map((object) => (
          <tr key={uid(object)}>
            {columnNames.map((name) => (
              <td key={uid(name)}>{object[name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  array: PropTypes.array,
}
