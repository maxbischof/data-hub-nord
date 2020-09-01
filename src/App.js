import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import welcomeImage from './images/sea.jpg'
import styled from "styled-components"

function App() {
  return (
    <>
      <Header/>
      <WelcomeSection>
        <Headline>Entdecke Open Data in Norddeutschland</Headline>
        <SubHeadline>Visualisierung und Zugang zu den wichtigsten Daten</SubHeadline>
        <Button>Daten anzeigen</Button>
      </WelcomeSection>
      <DatasetList></DatasetList>
      <Footer/>
    </>
  )
}

export default App

const DatasetList = styled.div`
flex: 1 0 auto;
`

const WelcomeSection = styled.section`
  height: 500px;
  background: url('${welcomeImage}'); 
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headline = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: 100;
  text-align: center;
  margin: 120px 0 10px 0;
`

const SubHeadline = styled.h2`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin: 0 0 50px 0;
`

const Button = styled.button`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background-color: #e63946;
  text-align: center;
  border: none;
  border-radius: 2px;
  height: 36px;
  width: 146px;
  padding: 0 16px;
  text-align: center;
  cursor: pointer;
`