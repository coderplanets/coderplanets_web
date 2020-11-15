import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 150px;
  border-right: 1px solid;
  border-right-color: ${theme('banner.desc')};
  padding: 15px;
  padding-bottom: 0;
`
export const TransWrapper = styled.div`
  ${css.flex('align-center')};
`
export const AccountIcon = styled(Img)`
  ${css.circle(30)};
`
export const TransIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 20px;
  height: 20px;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
`
export const SiteLogo = styled(Img)`
  width: 30px;
  height: 30px;
  display: block;
  margin-top: -5px;
`

export const SelectorWrapper = styled.div`
  margin-top: 30px;
`
export const SelectorTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
export const TitleDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleTitle')};
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 0.5;
`
const OptionWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`
export const WeixinWrapper = styled(OptionWrapper)`
  color: ${({ active }) => (active ? '#3eb64b' : theme('thread.articleTitle'))};
  display: ${({ display }) => display || 'flex'};
`
export const AliWrapper = styled(OptionWrapper)`
  color: ${({ active }) => (active ? '#42abe1' : theme('thread.articleTitle'))};
  display: ${({ display }) => display || 'flex'};
`
export const Holder = styled.div`
  margin-top: ${({ margin }) => margin || '80px'};
`
export const QuestionWrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  &:hover {
    color: ${theme('thread.articeTitle')};
    cursor: pointer;
  }
`
export const OptionTitle = styled.span`
  margin-left: 6px;
`
export const FaceValueWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
`
export const FaceValueNum = styled.span`
  color: orange;
  font-weight: bold;
`
export const PaymentIcon = styled(Img)`
  width: 16px;
  height: 16px;
  display: block;
`
export const QuestionIcon = styled(PaymentIcon)`
  fill: ${theme('thread.articleDigest')};
`
