import styled from 'styled-components'

import { theme, cs } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

import { BaseBanner } from '../../index'

export const Wrapper = styled(BaseBanner)`
  ${cs.flexColumn('justify-start')};
  position: relative;
  width: 280px;
  height: ${({ isHeaderFixed }) =>
    isHeaderFixed ? 'calc(100vh - 70px)' : 'calc(100vh - 80px)'};
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 5px;
  transition: height 0.25s linear;
`
export const ContentWrapper = styled.div`
  padding: 10px 20px;
  padding-bottom: 20px;
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  height: 100%;
`
export const BaseBannerContent = styled.div`
  ${cs.flexColumn('align-start')};
  width: 100%;
  height: 100%;

  ${cs.media.mobile`
    display: none;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  /* align-items: ${({ descExpand }) =>
    descExpand ? 'flex-start' : 'center'}; */
`
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
  ${cs.flex('align-center', 'justify-center')};
  width: 100%;
  transition: all 0.5s;
  margin-top: 16px;
  margin-bottom: 30px;
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: -8px;
  border-radius: 5px;
`
export const CommunityInfo = styled.div`
  ${cs.flexColumn('justify-center')};
`
export const TitleWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 8px;
`
export const Title = styled.div`
  ${cs.flex('align-baseline')};
  font-size: ${({ descExpand }) => (descExpand ? '21px' : '18px')};
  color: ${theme('banner.title')};
`
export const TitleText = styled.span`
  margin-right: 10px;
`
export const GroupsIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-left: 8px;
  width: 18px;
  height: 18px;
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
