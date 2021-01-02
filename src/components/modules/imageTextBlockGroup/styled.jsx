import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${white};
  color: ${midnight};
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  text-align: center;
  ${respondTo.S`
    padding: 64px 24px;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
