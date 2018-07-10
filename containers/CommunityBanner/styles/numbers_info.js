import styled from 'styled-components'

import { theme, Animate } from '../../../utils'

export const NumbersWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: -2rem;
`
export const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ dead }) => (dead ? '' : theme('banner.numberHoverBg'))};
  }
`
// text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : theme('banner.active'))};
    animation: ${Animate.pulse} 0.4s linear;
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
// text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : theme('banner.active'))};
    animation: ${Animate.pulse} 0.4s linear;
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
