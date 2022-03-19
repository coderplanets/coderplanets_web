import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

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
  ${css.size(20)};
  margin-left: 10px;
  margin-right: 10px;
`
export const SiteLogo = styled(Img)`
  ${css.size(30)};
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
export const WeixinWrapper = styled(OptionWrapper)<TActive>`
  color: ${({ active }) => (active ? '#3eb64b' : theme('thread.articleTitle'))};
  display: ${({ show }) => (show ? 'block' : 'none')};
`
export const AliWrapper = styled(OptionWrapper)<TActive>`
  color: ${({ active }) => (active ? '#42abe1' : theme('thread.articleTitle'))};
  display: ${({ show }) => (show ? 'block' : 'none')};
`
export const Holder = styled.div<{ margin?: string }>`
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
  ${css.size(16)};
`
export const QuestionIcon = styled(PaymentIcon)`
  fill: ${theme('thread.articleDigest')};
`
