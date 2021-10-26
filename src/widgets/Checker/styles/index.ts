import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import CheckedSVG from '@/icons/Checked'

import { getIconSize, getFontSize, getBorderRadius } from './metric'

type TItem = { checked: boolean; size: string; disabled?: boolean }

type TWrapper = { dimWhenIdle: boolean; disabled?: boolean } & TActive
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ dimWhenIdle }) => (dimWhenIdle ? 0.7 : 1)};

  &:hover {
    fill: #00a59b;
    opacity: 1;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`
export const IconWrapper = styled.div<TItem>`
  position: relative;
  background: ${({ checked }) => (checked ? '#0d3d4e' : '#0b2631')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  ${css.flex('align-both')};

  border: ${({ disabled }) => (!disabled ? '1px solid' : 'none')};

  border-color: ${({ checked }) => (checked ? '#246b8c' : '#1c5975')};
  border-radius: ${({ size }) => getBorderRadius(size)};

  transition: all 0.2s;
`
export const CheckIcon = styled(CheckedSVG)<TItem>`
  position: absolute;
  fill: #327faf;
  display: ${({ checked }) => (checked ? 'block' : 'none')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  top: -1px;
  left: -1px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
export const ChildWrapper = styled.div<TItem>`
  color: ${({ checked }) =>
    checked ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: ${({ size }) => getFontSize(size)};
  margin-left: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
