import styled from 'styled-components'

import { theme, css, WIDTH } from '@/utils'

import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

import { BaseBanner } from '../../index'

const getMinHeight = (noSocial, isMobile) => {
  if (isMobile) {
    return noSocial ? '112px' : '140px'
  }

  return noSocial ? '128px' : '150px'
}
export const Wrapper = styled(BaseBanner)`
  min-height: ${({ descExpand, noSocial, isMobile }) =>
    descExpand ? '300px' : getMinHeight(noSocial, isMobile)};
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  padding-top: 20px;
  min-height: ${({ descExpand, noSocial, isMobile }) =>
    descExpand ? '300px' : getMinHeight(noSocial, isMobile)};
  width: 100%;
  // if use margin-left will cause horizontal scrollbar
  padding-left: ${WIDTH.COMMUNITY.CONTENT_OFFSET};
  ${({ metric }) => css.fitPageWidth(metric)};
  transition: min-height 0.25s;
`
export const BaseBannerContent = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  max-width: ${WIDTH.COMMUNITY.CONTENT};

  ${css.media.mobile`
    padding-left: 6%;
    padding-right: 5.5%;
  `};
`
export const BannerContentWrapper = styled(BaseBannerContent)`
  ${css.flexColumn('justify-between')};
  align-items: ${({ descExpand }) => (descExpand ? 'flex-start' : 'center')};
`
export const BannerContainer = styled(BaseBanner)`
  /* min-height: 125px; */
`
export const TabBarWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  margin-left: -16px;

  ${css.media.tablet`
    padding-left: calc(2%);
  `};

  ${css.media.mobile`
    padding-left: 0;
    margin-left: -10px;
  `};
`
export const CommunityBaseInfo = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
`
export const CommunityWrapper = styled.div`
  ${css.flexGrow('align-center')};
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

  ${css.media.mobile`
    width: 45px;
    margin-top: -2px;
  `};
`
export const CommunityLogo = styled(CommunityFaceLogo)`
  width: ${({ small }) => (small ? '35px' : '45px')};
  height: ${({ small }) => (small ? '35px' : '45px')};
  border-radius: 5px;

  ${css.media.mobile`
    width: 36px;
    height: 36px;
  `};
`
export const CommunityInfo = styled.div`
  ${css.flexColumn('justify-center')};

  margin-top: -6px;
  margin-left: 12px;

  ${css.media.mobile`
    margin-left: ${({ descExpand }) => (descExpand ? '12px' : '3px')};
  `};
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div`
  ${css.flex('align-baseline')};
  font-size: ${({ descExpand }) => (descExpand ? '21px' : '18px')};
  color: ${theme('banner.title')};
`
export const TitleText = styled.span`
  margin-right: 10px;
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
