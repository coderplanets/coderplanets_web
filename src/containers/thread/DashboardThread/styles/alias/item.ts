import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import Input from '@/widgets/Input'
import ArrowSVG from '@/icons/ArrowSolid'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  border-bottom: 1px solid;
  border-bottom-color: ${theme('border')};
  padding: 15px 0;
  width: 100%;
`
export const Title = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  width: 130px;
`
export const Header = styled.div`
  ${css.flex('align-center')};
`
export const ArrowWrapper = styled.div`
  ${css.flex('align-center')};
  flex-grow: 1;
  padding-right: 50px;
`
export const ArrowLine = styled.div`
  border-top: 1px dashed;
  border-top-color: ${theme('thread.articleDigest')};
  flex-grow: 1;
  opacity: 0.8;
  height: 1px;
  margin-right: 6px;
`
export const ArrowIcon = styled(ArrowSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  opacity: 0.7;
`
export const InputWrapper = styled.div`
  width: 180px;
  margin-left: -10px;
`
export const Inputer = styled(Input)`
  height: 28px;
`
export const Footer = styled.div`
  ${css.flex('align-center')};
  height: 40px;
`
