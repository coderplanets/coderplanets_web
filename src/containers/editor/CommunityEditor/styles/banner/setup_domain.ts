import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import DomainSVG from '@/icons/Domain'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 320px;
`
export const IntroTitle = styled.div`
  position: relative;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
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
export const DomainIcon = styled(DomainSVG)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  margin-right: 10px;
`
export const NextBtn = styled.div`
  position: absolute;
  ${css.flex('align-center', 'justify-around')};
  width: 200px;
  bottom: 42px;
  margin-left: -2px;
`
export const ErrorMsg = styled.div`
  position: absolute;
  bottom: 85px;
  color: ${theme('baseColor.red')};
  font-size: 13px;
`
