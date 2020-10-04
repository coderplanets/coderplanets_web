import styled from 'styled-components'

import { theme, cs } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

import { BaseBanner } from '../../index'

const getMinHeight = (noSocial, mobile) => {
  if (mobile) {
    return noSocial ? '112px' : '140px'
  }

  return noSocial ? '128px' : '150px'
}
export const Wrapper = styled(BaseBanner)`
  min-height: ${({ descExpand, noSocial, mobile }) =>
    descExpand ? '300px' : getMinHeight(noSocial, mobile)};
`
export const InnerWrapper = styled.div`
  ${cs.flex('justify-center')};
  padding-top: 20px;
  min-height: ${({ descExpand, noSocial, mobile }) =>
    descExpand ? '300px' : getMinHeight(noSocial, mobile)};
  width: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  transition: min-height 0.25s;
`
export const BaseBannerContent = styled.div`
  ${cs.flexColumn('align-center')};
  width: 100%;
  padding: 0 8.5vw;

  ${cs.media.laptopL`
    padding: 0 7.5vw;
  `};

  ${cs.media.mobile`
    padding-left: 6%;
    padding-right: 5.5%;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  ${cs.flexColumn('justify-between')};
  align-items: ${({ descExpand }) => (descExpand ? 'flex-start' : 'center')};
`
export const BannerContainer = styled(BaseBanner)`
  /* min-height: 125px; */
`
export const TabBarWrapper = styled.div`
  ${cs.flex()};
  width: 100%;

  ${cs.media.tablet`
    padding-left: calc(2%);
  `};

  ${cs.media.mobile`
    padding-left: 0;
    margin-left: -10px;
  `};
`
export const CommunityBaseInfo = styled.div`
  ${cs.flex('justify-between')};
  width: 100%;
`
export const CommunityWrapper = styled.div`
  ${cs.flexGrow('align-center')};
  align-items: ${({ descExpand }) => (descExpand ? 'flex-start' : 'center')};
  transition: all 0.5s;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 55px;
  /*  TODO:  use new logo */
  margin-top: ${({ raw }) => (raw === 'home' ? '-10px' : 0)};

  @media (max-height: 800px) {
    margin-top: ${({ raw }) => (raw === 'home' ? '-8px' : 0)};
  }
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  width: ${({ small }) => (small ? '45px' : '55px')};
  height: ${({ small }) => (small ? '45px' : '55px')};
  border-radius: 5px;

  ${cs.media.mobile`
    width: 42px;
    height: 42px;
  `};
`
export const CommunityInfo = styled.div`
  ${cs.flexColumn('justify-center')};

  margin-top: -6px;
  margin-left: 12px;

  ${cs.media.mobile`
    margin-left: ${({ descExpand }) => (descExpand ? '12px' : '3px')};
  `};
`
export const TitleWrapper = styled.div`
  ${cs.flex('align-center')};
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
