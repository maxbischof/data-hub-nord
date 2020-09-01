import React from "react"
import DatasetDetails from "./DatasetDetails"
import renderer from "react-test-renderer"
import { datasets } from "../settings.js"

it("renders datasetdetails component", () => {
  const renderedDatasetDetails = renderer
    .create(<DatasetDetails datasetDescription={datasets[0]}/>)
    .toJSON()
  expect(renderedDatasetDetails).toMatchSnapshot()
})
