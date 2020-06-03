import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
`
export const IntroWrapper = styled.div`
  ${cs.flex('justify-around', 'align-center')};
  background: #01262f;
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: ${cs.MAX_CONTENT_WIDTH};
  padding: 0 8vw;
  padding-left: 7vw;
  z-index: 1;
`
export const BrandWrapper = styled.div`
  ${cs.flexColumnGrow()};
  /* width: 45%; */
  margin-top: -30px;
  z-index: 2;
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
  z-index: 3;
  background: linear-gradient(transparent, #072a34);
`
