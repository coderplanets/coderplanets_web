import styled from 'styled-components'

import { theme, Animate } from '../../../utils'

export const BaseBanner = styled.nav`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`

export const BaseBannerContent = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 8%;
`

export const BaseTabber = styled.div`
  position: absolute;
  bottom: -16px;
  width: 80vw;
  display: flex;
`

export const NumbersWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: -2.1em;
`
export const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ dead }) => (dead ? '' : theme('banner.numberHoverBg'))};
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : theme('banner.active'))};
    text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
    animation: ${Animate.pulse} 0.4s linear;
  }
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : theme('banner.active'))};
    text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
    animation: ${Animate.pulse} 0.4s linear;
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
