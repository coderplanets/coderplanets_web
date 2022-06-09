import styled from 'styled-components'

import type { TColorName } from '@/spec'
import { COLORS } from '@/constant'
import css from '@/utils/css'

import { BaseSection } from '.'

export const Wrapper = styled(BaseSection)``

export const Label = styled.div<{ color: TColorName }>`
  ${css.flex('align-both')};
  width: 100px;
  height: 30px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ color }) => COLORS[color]};
  cursor: pointer;
`
export const TheColor = styled.div<{ color: TColorName }>`
  width: 92px;
  height: 22px;
  border-radius: 6px;
  background-color: ${({ color }) => COLORS[color]};
`
