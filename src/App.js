import React, { useEffect, useState, useRef } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import welcomeImage from "./images/sea.jpg"
import styled from "styled-components"
import { datasets } from "./settings"
import DatasetTeaser from "./components/DatasetTeaser"
import { Link, Route } from "react-router-dom"
import BackButton from "./components/ui/BackButton"
import DatasetDetails from "./components/DatasetDetails"
import Button from "./components/ui/Button"

function App() {
  return (
    <>
      <Header />
      <Route
        exact
        path="/"
        render={() => (
          <>
            <WelcomeSection>
              <Headline>Entdecke Open Data in Norddeutschland</Headline>
              <SubHeadline>
                Visualisierung und Zugang zu den wichtigsten Daten
              </SubHeadline>
              <Button color="#e63946" linkPath="#datensaetze">Daten anzeigen</Button>
            </WelcomeSection>
            <DatasetList>
              <h2>Datensätze</h2>
              {datasets.map((dataset) => (
                <Link
                  to={`/datensaetze/${dataset.name.replace(" ", "-")}-${dataset.id}`}
                  key={dataset.id}
                >
                  <DatasetTeaser
                    imagePath={dataset.imageUrl}
                    titel={dataset.name}
                    description={dataset.description}
                  />
                </Link>
              ))}
            </DatasetList>
          </>
        )}
      />
      {datasets.map((dataset) => (
        <Route
          exact
          key={dataset.id}
          path={`/datensaetze/${dataset.name.replace(" ", "-")}-${dataset.id}`}
          render={() => (
            <>
              <BackButton />
              <DatasetDetails {...dataset} />
            </>
          )}
        />
      ))}
      <Footer />
    </>
  )
}

export default App

const DatasetList = styled.section`
  flex: 1 0 auto;
  padding: 50px 37px 30px 37px;

  h2 {
    font-size: 25px;
    padding: 0 0 5px 0;
    border-bottom: 1px solid var(--grey);
    display: inline-block;
    margin: 0 0 30px 0;
  }
`

const WelcomeSection = styled.section`
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