import React from "react"
import WelcomeSection from "./WelcomeSection"
import renderer from "react-test-renderer"

it("renders correctly", () => {
  const datasetListRef = null

  const scrollToRef = (ref) => {
    console.log("scroll")
    window.scrollTo(0, ref.current.offsetTop)
  }

  const tree = renderer
    .create(<WelcomeSection onClickButton={scrollToRef} scrollTo={datasetListRef}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
