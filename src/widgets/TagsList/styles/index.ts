import styled from 'styled-components'

import type { TSIZE_TSM } from '@/spec'

import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { getIconSize, getTitleSize } from './metric'

export const Wrapper = styled.div<{ mLeft?: number }>`
  ${css.flex('align-end')};
  margin-left: ${({ mLeft }) => (mLeft ? `${mLeft}px` : 0)};
  position: relative;
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  margin-right: 5px;
  min-width: 40px;
`
export const Title = styled.div<{ size: TSIZE_TSM }>`
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => getTitleSize(size)};
  margin-left: 3px;
  word-break: keep-all;
`
export const More = styled.div`
  font-weight: bold;
  cursor: pointer;
`

type THashSign = { color: string; size: TSIZE_TSM }

export const HashSign = styled(HashTagSVG)<THashSign>`
  fill: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  ${({ size }) => css.size(getIconSize(size))};
  transform: rotate(18deg);
  opacity: 0.9;
`

export const PopoverInfo = styled.div``
