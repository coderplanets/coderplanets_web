import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 440px;
`
export const IntroTitle = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: -10px;
`
export const SloganTextWrapper = styled.div<{ highlight: boolean }>`
  margin-left: 3px;
  margin-right: 3px;

  font-weight: ${({ highlight }) => (highlight ? 'bold' : '')};
  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
`
export const AddNewIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(18)};
  margin-right: 10px;
  transform: rotate(-90deg);
  margin-top: -1px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
export const NextBtn = styled.div`
  ${css.flex('justify-center')};
  position: absolute;
  width: 280px;
  bottom: 5px;
`
export const ErrorMsg = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 45px;
  color: ${theme('baseColor.red')};
  font-size: 13px;
`
export const InfoMsg = styled(ErrorMsg)`
  color: ${theme('button.primary')};
  bottom: 35px;
`
