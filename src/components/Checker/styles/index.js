import styled from 'styled-components'

import Img from '@/Img'
import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-both')};
  width: 20px;
  height: 20px;
  background: ${({ showBg }) => (showBg ? '#114759' : 'transparent')};
  border-radius: 50%;
`
export const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  opacity: ${({ checked }) => (checked ? '1' : '0')};
  transition: all 0.25s;
`
export const Icon = styled(Img)`
  fill: #327faf;
  width: 18px;
  height: 18px;
  display: block;
`
