import React from "react"
import DatasetImage from "./DatasetImage"
import renderer from "react-test-renderer"

it("renders datasetimage component", () => {
  const tree = renderer
    .create(<DatasetImage path="../images/sea.jpg" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
