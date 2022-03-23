import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import { getAvatarSize, getUlMarginRight } from './metric'
import type { TAvatarSize } from '../spec'

export { AvatarFallback } from './real_avatar'

export const Wrapper = styled.ul<{ total: number }>`
  ${css.flex('align-center')};
  flex-direction: row-reverse;
  list-style-type: none;
  margin: auto;
  padding: 0px 8px 0px 0px;
  margin-right: ${({ total }) => getUlMarginRight(total)};
`
export const AvatarsWrapper = styled.div`
  ${css.flex()}
`
export const TotalOneOffset = styled.span`
  margin-right: 10px;
`
type TAvatarsMore = { size: TAvatarSize; total: number }
export const AvatarsMore = styled.span<TAvatarsMore>`
  ${css.flex('align-both')};
  font-size: 14px;
  border-color: ${theme('textBadge')}; // to-theme
  color: ${theme('thread.articleTitle')};
  background-color: ${theme('textBadge')}; // to-theme
  border-radius: 100px 100px 100px 100px;
  font-family: sans-serif;
  font-weight: ${({ total }) => (total >= 1000 ? 600 : 200)};

  min-width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};

  padding-left: ${({ total }) => (total >= 1000 ? '5px' : '3px')};

  &:hover {
    cursor: pointer;
  }
`
