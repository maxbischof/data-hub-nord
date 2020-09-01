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
      <DatasetList>
        <h2>Datensätze</h2>
      </DatasetList>
      <Footer/>
    </>
  )
}

export default App

const DatasetList = styled.main`
flex: 1 0 auto;

h2 {
  font-size: 25px;
  margin: 50px 0 30px 37px;
  padding: 0 0 5px 0;
  border-bottom: 1px solid var(--grey);
  display: inline-block;
}
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