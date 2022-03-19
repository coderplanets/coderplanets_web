import styled from 'styled-components'

import type { TGtdType } from '@/spec'
import { GTD_TYPE } from '@/constant'

import css from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'

export const Wrapper = styled.div<{ type: TGtdType }>`
  ${css.size(18)};
  ${css.flex('align-both')};
  background: ${({ type }) => (type === GTD_TYPE.BUG ? '#eb6a6a' : '#3871e0')};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`
export const WipIcon = styled(GtdWipSVG)`
  ${css.size(9)};
  fill: white;
  /* fill: #3871e0; */
`
export const DoneIcon = styled(GtdDoneSVG)`
  ${css.size(10)};
  fill: white;
  /* fill: #3871e0; */
`
export const TODOIcon = styled(GtdTodoSVG)`
  ${css.size(10)};
  fill: white;
  /* fill: #3871e0; */
`
