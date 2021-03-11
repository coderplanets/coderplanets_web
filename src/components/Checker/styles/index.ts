import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { getIconSize, getFontSize, getBorderRadius } from './metric'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  visibility: ${({ show }) => (show ? 'visiable' : 'hidden')};
`
export const IconWrapper = styled.div`
  position: relative;
  background: ${({ checked }) => (checked ? '#114759' : '#00262F')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  ${css.flex('align-both')};
  border: 1px solid;
  border-color: ${({ checked }) => (checked ? 'transparent' : '#114759')};

  border-radius: ${({ size }) => getBorderRadius(size)};

  transition: all 0.2s;
`
export const Icon = styled(Img)`
  position: absolute;
  fill: #327faf;
  display: ${({ checked }) => (checked ? 'block' : 'none')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  top: -1px;
  left: -1px;
  cursor: pointer;
`
export const ChildWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  opacity: ${({ checked }) => (checked ? 1 : 0.9)};
  font-size: ${({ size }) => getFontSize(size)};
  margin-left: 6px;
  cursor: pointer;
`
