import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumnGrow('align-center')};
  margin-top: 10px;
`
export const CountDesc = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const DescNumber = styled.span`
  color: ${theme('banner.title')};
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
