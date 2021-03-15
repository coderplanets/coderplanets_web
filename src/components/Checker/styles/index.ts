import styled from 'styled-components'

import type { TActive } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

import { getIconSize, getFontSize, getBorderRadius } from './metric'

type TItem = { checked: boolean; size: string }

export const Wrapper = styled.div<TActive>`
  ${css.flex('align-center')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`
export const IconWrapper = styled.div<TItem>`
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
export const Icon = styled(Img)<TItem>`
  position: absolute;
  fill: #327faf;
  display: ${({ checked }) => (checked ? 'block' : 'none')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  top: -1px;
  left: -1px;
  cursor: pointer;
`
export const ChildWrapper = styled.div<TItem>`
  color: ${theme('thread.articleDigest')};
  opacity: ${({ checked }) => (checked ? 1 : 0.9)};
  font-size: ${({ size }) => getFontSize(size)};
  margin-left: 6px;
  cursor: pointer;
`
