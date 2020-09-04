import React from "react"
import DatasetDetails from "./DatasetDetails"
import renderer from "react-test-renderer"
import { datasets } from "./testDatasets.js"

it("renders datasetdetails component", () => {
  const renderedDatasetDetails = renderer
    .create(<DatasetDetails {...datasets[0]}/>)
    .toJSON()
  expect(renderedDatasetDetails).toMatchSnapshot()
})
