import styled from 'styled-components'

import Img from '@components/Img'

import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`
export const IntroWrapper = styled.div`
  ${cs.flex('justify-around', 'align-center')};
  position: absolute;
  width: 100%;
  height: 300px;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 5vw;
  padding-left: 10vw;
`
export const BrandWrapper = styled.div`
  ${cs.flexColumn()};
  width: 45%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 24px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 12px;
`
export const PubButton = styled.div`
  width: 100px;
`
export const GradientMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1;
  background: linear-gradient(transparent, #072a34);
`
export const CoverImg = styled(Img)`
  width: 100%;
  height: 100%;
`
