import styled from 'styled-components'

import { theme, css } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 100%;
  transition: all 0.5s;
  margin-top: 18px;
  margin-bottom: 5px;
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(35)};
  margin-right: 12px;
  border-radius: 5px;
`
export const CommunityInfo = styled.div`
  ${css.flexColumn('justify-center')};
  margin-top: 12px;
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
`
export const TitleText = styled.span`
  font-size: 18px;
  ${css.cutRest('140px')};
  color: ${theme('banner.title')};
`
export const LogoHolder = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 50px;
  height: 50px;
  @media (max-height: 800px) {
    width: 40px;
    height: 40px;
  }
  opacity: 0.6;
  margin-top: 3px;
`
