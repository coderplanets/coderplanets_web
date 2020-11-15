import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  position: relative;
  ${css.flexColumn()};
  padding: 10px 30px;
  color: ${theme('thread.articleDigest')};
  min-height: ${({ first }) => (first ? '130px' : '100px')};
  border-left: 3px solid;
  border-left-color: #103d46;

  padding-top: ${({ first }) => (first ? '40px' : '10px')};
`
export const IconWrapper = styled.div`
  position: absolute;
  top: ${({ first }) => (first ? '43px' : '13px')};
  left: -13px;
  ${css.circle('23px')};
  ${css.flex('align-both')};
  background: #033d45;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 14px;
  height: 14px;
  display: block;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  padding-top: 4px;
`
