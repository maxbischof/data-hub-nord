import React from 'react'
import styled from 'styled-components'
import welcomeImage from "../images/sea.jpg"
import WelcomeButton from "./ui/WelcomeButton"
import PropTypes from 'prop-types'

export default function WelcomeSection({ onClickButton, scrollTo }) {
  return (
    <StyledWelcomeSection>
      <Headline>Entdecke Open Data in Norddeutschland</Headline>
      <SubHeadline>
        Visualisierung und Zugang zu den wichtigsten Daten
      </SubHeadline>
      <WelcomeButton color="#e63946" onClick={onClickButton} reference={scrollTo}>Daten anzeigen</WelcomeButton>
    </StyledWelcomeSection>
  )
}

WelcomeSection.propTypes = {
  onClickButton: PropTypes.func,
  scrollTo: PropTypes.object
}

const StyledWelcomeSection = styled.section`
  height: 500px;
  background: url("${welcomeImage}");
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`

const Headline = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: 100;
  text-align: center;
  padding: 0 10px 0 10px;
  margin: 120px 0 10px 0;
`

const SubHeadline = styled.h2`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin: 0 0 50px 0;
  padding: 0 10px 0 10px;
`