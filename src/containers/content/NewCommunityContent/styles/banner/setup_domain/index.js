import styled from 'styled-components'

import { theme, cs } from '@utils'

import Img from '@Img'

export const Wrapper = styled.div`
  position: relative;
  ${cs.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 280px;
`
export const IntroTitle = styled.div`
  position: relative;
  ${cs.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
`
export const SlogenTextWrapper = styled.div`
  margin-left: 3px;
  margin-right: 3px;

  font-weight: ${({ highlight }) => (highlight ? 'bold' : '')};
  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
`
export const TitleIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 18px;
  height: 18px;
  display: block;
  margin-right: 10px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
export const StepHint = styled.div`
  position: absolute;
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  top: -35px;
  left: 41%;
  opacity: 0.5;
`
export const NextBtn = styled.div`
  position: absolute;
  ${cs.flex('align-center', 'justify-around')};
  width: 200px;
  bottom: 5px;
  margin-left: -2px;
`
