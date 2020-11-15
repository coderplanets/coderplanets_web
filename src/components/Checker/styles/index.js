import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  ${css.size(20)};
  background: ${({ showBg }) => (showBg ? '#114759' : 'transparent')};
  border-radius: 50%;
`
export const IconWrapper = styled.div`
  ${css.size(18)};
  opacity: ${({ checked }) => (checked ? '1' : '0')};
  transition: all 0.25s;
`
export const Icon = styled(Img)`
  fill: #327faf;
  ${css.size(18)};
  display: block;
`
