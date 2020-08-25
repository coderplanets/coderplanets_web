import styled from 'styled-components'

import { theme, cs } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

import { BaseBanner } from '../../index'

export const Wrapper = styled(BaseBanner)`
  ${cs.flexColumn('justify-start')};
  width: 275px;
  height: calc(100vh - 80px);
  padding: 10px 22px;
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 5px;
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  height: 100%;
  padding: 0 8px;
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
export const CommunityWrapper = styled.div`
  ${cs.flexColumn('align-center')};
  transition: all 0.5s;
  ${cs.media.mobile`
    margin-left: 5%;
`};
`
export const LogoWrapper = styled.div`
  ${cs.flex('align-both')};
  position: relative;
  width: 95px;
  height: 95px;
  background: #072d3a;
  border-radius: 100%;
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  width: 55px;
  height: 55px;
  border-radius: 5px;
`
export const CommunityInfo = styled.div`
  ${cs.flexColumn('justify-center')};
  width: 100%;
  margin-top: 22px;
  margin-bottom: 20px;
`
export const TitleWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 10px;
`
export const Title = styled.div`
  ${cs.flex('align-baseline')};
  font-size: ${({ descExpand }) => (descExpand ? '21px' : '18px')};
  color: ${theme('banner.title')};
`
export const TitleText = styled.span`
  margin-right: 10px;
`
export const SubTitle = styled.div`
  font-size: 14px;
  color: ${theme('banner.title')};
  margin-bottom: 12px;
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
