import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'
import { ReactComponent as ProblemIcon } from '../../icons/problem.svg'

export default function ErrorBanner({
  text = 'Es ist ein Fehler passiert. Bitte versuche es erneut.',
}) {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      <BannerContainer isVisible={showBanner}>
        <Banner>
          <StyledProblemIcon />
          <span>{text}</span>
          <StyledCloseIcon onClick={() => setShowBanner(false)} />
        </Banner>
      </BannerContainer>
    </>
  )
}

const BannerContainer = styled.div`
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${(props) => !props.isVisible && CssAnimation}
`

const Keyframes = keyframes`
  from {
    top: 0;
  }

  to {
    top: -150px;
  }
`

const CssAnimation = css`
  animation-duration: 3s;
  animation-name: ${Keyframes};
  animation-fill-mode: forwards;
`

const Banner = styled.div`
  height: 77px;
  background-color: var(--red);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-shrink: 0;

  span {
    margin: 0 30px 0 0;
  }
`

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const StyledProblemIcon = styled(ProblemIcon)`
  margin: 0 20px;
`
