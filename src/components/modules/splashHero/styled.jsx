import styled, { keyframes, css } from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white } = colours
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const StyledContainer = styled.section`
  align-items: center;
  background-color: ${white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -1;
  ${respondTo.S`
    justify-content: flex-end;
    padding: 0 24px 100px;
    height: 100vh;
  `}
`

export const StyledSliderSection = styled.section`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
  ${({ introAnimation }) =>
    introAnimation &&
    css`
      animation: ${fadeIn} 2s ease-in-out 2s forwards;
      opacity: 0;
    `}
`

export const StyledImg = styled(Img)`
  display: block;
  width: 100vw;
  height: calc(100vh - 80px);
  ${respondTo.S`
    width: 100vw;
    height: auto;
  `}
`

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 1;
  ${({ introAnimation }) =>
    introAnimation &&
    css`
      animation: ${fadeIn} 2s ease-in-out forwards;
      opacity: 0;
    `}
`

export const StyledLinkSpacer = styled.div`
  padding-top: 24px;
  ${({ introAnimation }) =>
    introAnimation &&
    css`
      animation: ${fadeIn} 2s ease-in-out 4s forwards;
      opacity: 0;
    `}
`

export const StyledSpacer = styled.div`
  margin-bottom: calc(100vh - 80px);
  ${respondTo.S`
    margin-bottom: calc(100vh - 60px);
  `}
`
