import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumnGrow('align-center')};
  margin-top: 10px;
`
export const CountDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-bottom: 10px;
`
export const DescNumber = styled.span`
  color: #139c9e;
  font-weight: bold;
`
export const NextDesc = styled.div`
  margin-top: 15px;
  color: ${theme('thread.articleDigest')};
`
export const NextStepBtn = styled.span`
  border: 1px solid;
  border-color: ${theme('thread.articleTitle')};
  padding: 0 3px;
  border-radius: 4px;
  margin-left: 6px;
  color: ${theme('thread.articleTitle')};

  &:hover {
    color: ${theme('banner.title')};
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
`
export const PaymentPic = styled(Img)`
  width: 200px;
  height: auto;
  display: block;
`
