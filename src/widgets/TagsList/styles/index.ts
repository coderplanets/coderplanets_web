import styled from 'styled-components'

import type { TSIZE_TSM } from '@/spec'
import css, { theme } from '@/utils/css'

import { getIconSize, getTitleSize } from './metric'

export const Wrapper = styled.div<{ mLeft?: number }>`
  ${css.flex('align-center')};
  margin-left: ${({ mLeft }) => (mLeft ? `${mLeft}px` : 0)};
  position: relative;
  margin-top: 1px;
`
export const Tag = styled.div`
  ${css.flex('align-center')};
  margin-right: 5px;
  min-width: 40px;
`
type THashSign = { color: string; size: TSIZE_TSM }
export const DotSign = styled.div<THashSign>`
  background: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  ${({ size }) => css.size(getIconSize(size))};
  border-radius: 100%;
  margin-right: 2px;
`
export const Title = styled.div<{ size: TSIZE_TSM }>`
  color: ${theme('thread.extraInfo')};
  font-size: ${({ size }) => getTitleSize(size)};
  margin-left: 3px;
  word-break: keep-all;
  font-weight: 700;
  letter-spacing: 0.06em;
`
export const SolidTitle = styled.div<{ size: TSIZE_TSM; color: string }>`
  color: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  font-size: ${({ size }) => getTitleSize(size)};
  background: ${({ color }) => theme(`baseColor.${color.toLowerCase()}Bg`)};
  margin-left: 3px;
  word-break: keep-all;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 2px 6px;
  border-radius: 5px;
`
export const More = styled.div`
  color: ${theme('thread.extraInfo')};
  font-weight: bold;
  cursor: pointer;
  margin-top: -3px;
`

export const PopoverInfo = styled.div``
