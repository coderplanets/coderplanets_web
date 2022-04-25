import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div`
  ${css.flexGrow('align-center')};
  transition: all 0.5s;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 20px;
  margin-top: -6px;

  ${css.media.mobile`
    width: 30px;
    margin-top: -2px;
  `};
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(20)};
  border-radius: 5px;

  ${css.media.mobile`
    width: 32px;
    height: 32px;
  `};
`
export const CommunityInfo = styled.div`
  ${css.flexColumn('justify-center')};

  margin-top: -6px;
  margin-left: 14px;

  ${css.media.mobile`
    margin-left: 3px;
  `};
`
export const TitleWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  margin-right: 10px;
  font-size: 18px;
  letter-spacing: 0.03em;
  font-weight: 600;
  color: #333;
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
