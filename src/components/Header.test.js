import React from "react"
import Header from "./Header"
import renderer from "react-test-renderer"

it("renders header component", () => {
  const renderedHeader = renderer
    .create(<Header />)
    .toJSON()
  expect(renderedHeader).toMatchSnapshot()
})
