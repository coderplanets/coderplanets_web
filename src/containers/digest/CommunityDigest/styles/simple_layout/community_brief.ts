import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  transition: all 0.2s;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 20px;
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(18)};
`
export const CommunityInfo = styled.div`
  ${css.flexColumn('justify-center')};
  margin-left: 10px;
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  font-size: 18px;
  font-weight: 600;
`
export const TitleText = styled.span`
  margin-right: 10px;
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
