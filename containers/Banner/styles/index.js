import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { theme } from '../../../utils'

export const Banner = styled.div`
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
export const TopHalf = styled.div`
  display: flex;
`
export const CommunityWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: -2em;
`

export const LeftPadding = styled.div`
  width: 11vw;
`
export const RightPadding = styled.div`
  width: 10vw;
`
export const CommunityLogo = styled(ReactSVG)`
  width: 70px;
  height: 70px;
  @media (max-height: 800px) {
    width: 60px;
    height: 60px;
  }
`
export const CommunityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -6px;
  margin-left: 1em;
`

export const Title = styled.div`
  font-size: 1.6em;
  color: ${theme('font')};
  @media (max-height: 800px) {
    font-size: 1.4em;
  }
`
// color: ${theme('font')};
export const Desc = styled.div`
  font-size: 1.2em;
  color: ${theme('banner.desc')};
  @media (max-height: 800px) {
    font-size: 1.1em;
  }
`

export const BannerLogo = styled(ReactSVG)`
  margin-top: 1em;
  width: 60px;
  // height: 80px;
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
  border: ${theme('banner.number_divider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`

export const TabberWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  width: 80vw;
  display: flex;
`
