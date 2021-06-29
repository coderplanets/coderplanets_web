import styled from 'styled-components'

import { theme, css } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

import { BaseBanner } from '../../index'

export const Wrapper = styled(BaseBanner)<{ isHeaderFixed: boolean }>`
  background: transparent;

  ${css.flexColumn('justify-start')};
  position: relative;
  width: 150px;
  margin-top: 10px;
`
export const ContentWrapper = styled.div`
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  height: 100%;
`
export const BaseBannerContent = styled.div`
  ${css.flexColumn('align-start')};
  width: 100%;
  height: 100%;

  ${css.media.mobile`
    display: none;
  `};
`
/* align-items: ${({ descExpand }) =>
    descExpand ? 'flex-start' : 'center'}; */
export const BannerContentWrapper = styled(BaseBannerContent)``
export const BannerContainer = styled(BaseBanner)`
  min-height: 125px;
`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #014758;
  margin-top: 18px;
  margin-bottom: 18px;
`
export const CommunityWrapper = styled.div`
  ${css.flexColumn('align-start', 'justify-center')};
  width: 100%;
  transition: all 0.5s;
  margin-top: 10px;
  margin-bottom: 30px;
`
export const LogoWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
`
export const CommunityLogo = styled(CommunityFaceLogo)`
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
export const Title = styled.div<{ descExpand: boolean }>`
  ${css.flex('align-baseline')};
  font-size: ${({ descExpand }) => (descExpand ? '21px' : '18px')};
  color: ${theme('banner.title')};
`
export const TitleText = styled.span`
  ${css.cutRest('140px')};
`
export const GroupsIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-left: 8px;
  ${css.size(18)};
  margin-top: 5px;
  opacity: 0;
  &:hover {
    cursor: pointer;
    fill: ${theme('banner.title')};
  }
  ${BannerContainer}:hover & {
    fill: ${theme('banner.title')};
    opacity: 1;
  }
  transition: opacity 0.2s;
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
