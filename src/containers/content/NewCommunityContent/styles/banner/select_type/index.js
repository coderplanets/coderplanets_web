import styled from 'styled-components'

import { theme, cs } from '@utils'

import Img from '@Img'

export const IntroWraper = styled.div`
  position: relative;
  ${cs.flexColumn('align-both')};
  color: ${theme('thread.articleDigest')};
  /* background-image: linear-gradient(#043B49, #022A35); */
  background-image: ${theme('banner.linearGradient')};
  width: 100%;
  height: 340px;
`
export const IntroTitle = styled.div`
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
export const AddNewIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 18px;
  height: 18px;
  display: block;
  margin-right: 10px;
  transform: rotate(-90deg);
  margin-top: -1px;
`
export const Title = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
`
export const NextBtn = styled.div`
  position: absolute;
  bottom: 5px;
`
