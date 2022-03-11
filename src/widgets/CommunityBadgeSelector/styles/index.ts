import styled from 'styled-components'

import css, { theme } from '@/utils/css'
// import Img from '@/Img'
import ArrowSVG from '@/icons/ArrowSolid'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

export const Wrapper = styled.div`
  ${css.flex('justify-center')};
  width: 280px;
  height: 116px;
  padding-left: 25px;
`
export const BadgeWrapper = styled.div`
  ${css.flex('align-center')};
  padding-bottom: 33px;
`
export const Logo = styled(CommunityFaceLogo)`
  ${css.size(14)};
  margin-right: 8px;
  margin-left: 2px;
  filter: saturate(0.8);
`
export const ArrowLogo = styled(ArrowSVG)`
  fill: ${theme('button.primary')};
  ${css.size(10)};
  cursor: pointer;
  margin-left: 3px;
  transform: rotate(90deg);
`
export const Intro = styled.div`
  /* margin-left: 10px; */
`
export const PubHint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 2px;
  opacity: 0.85;
  margin-bottom: 8px;
`
export const Title = styled.div`
  position: relative;
  ${css.flex('align-center')};
  font-size: 16px;
  color: ${theme('thread.articleTitle')};
  margin-bottom: 5px;
`
export const ChangeBtn = styled.div`
  ${css.flex('align-center')};
  position: absolute;
  top: 4px;
  right: -45px;
  color: ${theme('button.primary')};
  font-size: 12px;
  margin-left: 10px;
  opacity: 0;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    opacity: 0.85;
  }
`
