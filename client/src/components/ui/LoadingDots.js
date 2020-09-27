import React from 'react'
import styled from 'styled-components'

export default function LoadingDots({ progress }) {
  return (
    <>
      <DotsContainer>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </DotsContainer>
      {progress && <CenterParagraph>{progress}%</CenterParagraph>}
    </>
  )
}

const CenterParagraph = styled.p`
  place-self: center;
`

const DotsContainer = styled.div`
  margin: auto;
  width: 150px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Dot = styled.span`
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  animation-duration: 2s;
  animation-name: pulsating;
  animation-iteration-count: infinite;
  margin: 5px;

  &:nth-child(2) {
    animation-delay: 0.25s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  @keyframes pulsating {
    from {
      height: 5px;
      width: 5px;
      background-color: lightgrey;
    }

    50% {
      height: 15px;
      width: 15px;
      background-color: var(--cyan);
    }

    to {
      height: 5px;
      width: 5px;
      background-color: lightgrey;
    }
  }
`
