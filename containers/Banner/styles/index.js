import styled from 'styled-components'
// import ReactSVG from 'react-svg'

import { theme } from '../../../utils'

export const BaseBanner = styled.div`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
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
  bottom: -17px;
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
    background: ${theme('banner.number_hover_bg')};
    cursor: pointer;
  }
`
export const NumberTitle = styled.div`
  color: ${theme('banner.number_desc')};
`
export const NumberItem = styled.div`
  font-size: 1.5em;
  color: ${theme('banner.number')}; #5c868b;
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.number_divider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
