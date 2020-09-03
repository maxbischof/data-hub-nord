import React from "react"
import { render } from "@testing-library/react"
import renderer from 'react-test-renderer'
import DatasetTeaser from "./DatasetTeaser"

it("has title and description < 70 characters", () => {
  const { getByText } = render(
    <DatasetTeaser
      imagePath="/Users/student/neuefische/data-hub-nord/src/images/sea.jpg"
      title="Seehundbänke an der Nordsee"
      description="Lage der Seehundbänke in der westlichen Deutschen Bucht erfasst durch mehrere Forschungsschiffe"
    />
  )

  const title = getByText("Seehundbänke an der Nordsee")
  expect(title).toBeInTheDocument()

  const description = getByText("Lage der Seehundbänke in der westlichen Deutschen Bucht erfasst dur...")
  expect(description).toBeInTheDocument()
})

it('renders correctly', () => {
  const tree = renderer.create(
    <DatasetTeaser
      imagePath="/Users/student/neuefische/data-hub-nord/src/images/sea.jpg"
      title="Seehundbänke an der Nordsee"
      description="Lage der Seehundbänke in der westlichen Deutschen Bucht erfasst durch mehrere Forschungsschiffe"
    />
  )
  expect(tree).toMatchSnapshot()
})