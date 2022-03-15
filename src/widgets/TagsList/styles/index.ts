import styled from 'styled-components'

import type { TSIZE_TSM } from '@/spec'

import HashTagSVG from '@/SvgIcons/HashTagSVG'
import css, { theme } from '@/utils/css'

import { getIconSize, getTitleSize } from './metric'

export const Wrapper = styled.div<{ mLeft?: number }>`
  ${css.flex('align-center')};
  margin-left: ${({ mLeft }) => (mLeft ? `${mLeft}px` : 0)};
  position: relative;
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  margin-right: 5px;
  min-width: 40px;
`
export const Title = styled.div<{ size: TSIZE_TSM }>`
  color: ${theme('thread.extraInfo')};
  font-size: ${({ size }) => getTitleSize(size)};
  margin-left: 3px;
  word-break: keep-all;
  font-weight: 700;
  letter-spacing: 0.06em;
`
export const More = styled.div`
  color: ${theme('thread.extraInfo')};
  font-weight: bold;
  cursor: pointer;
  margin-top: -3px;
`

type THashSign = { color: string; size: TSIZE_TSM }

export const HashSign = styled(HashTagSVG)<THashSign>`
  fill: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  ${({ size }) => css.size(getIconSize(size))};
  transform: rotate(18deg);
  opacity: 0.9;
`

export const PopoverInfo = styled.div``
