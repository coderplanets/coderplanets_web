import styled from 'styled-components'

import { css, theme } from '@/utils'

import { ArrowLink } from '@/components/Buttons'
import Img from '@/Img'

import { getBorderRadius, getBannerHeight, getBackground } from './metric'

export const SmileWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  ${css.flexColumn('align-both')}
  border-radius: ${({ anchors }) => getBorderRadius(anchors)};
  width: 100%;
  height: 40vh;
  height: ${({ anchors }) => getBannerHeight(anchors)};
  /* background-image: ${theme('banner.linearGradient')}; */
  background-image: ${({ anchors }) => getBackground(anchors)};

  transform: ${({ reverse }) => (reverse ? 'rotateY(-180deg)' : '')};
  transition: border-radius 0.25s, height 0.2s;
`
export const LogosWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
  margin-top: -15px;
`
export const SponsorText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 18px;
  font-family: 'Audiowide', cursive;
`
export const SponsorLogo = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(24)};
  display: block;
`
export const SupportTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 20px;
  margin-bottom: 20px;
`

const Anchor = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 1;
`
// anchors
export const AnchorH = styled(Anchor)`
  top: 20px;
`
export const AnchorM = styled(Anchor)`
  top: 50px;
`
export const AnchorL = styled(Anchor)`
  top: 80px;
`
export const SponsorBtn = styled(ArrowLink)`
  margin-left: 20px;
  opacity: ${({ show }) => (show ? '1' : '0')};

  transition: opacity 0.25s;
  transition-delay: 0.4s;
`
export const Divider = styled.div`
  margin-top: 10px;
  width: 100px;
  height: 1px;
  background: ${theme('thread.articleDigest')};
  opacity: 0.6;
`
