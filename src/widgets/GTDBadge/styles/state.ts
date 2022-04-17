import styled from 'styled-components'

import type { TGtdType } from '@/spec'
import { GTD_TYPE } from '@/constant'

import css, { theme } from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'

type TType = { type: TGtdType }

export const Wrapper = styled.div<TType>`
  ${css.size(18)};
  ${css.flex('align-both')};
  background: ${({ type }) =>
    type === GTD_TYPE.BUG ? theme('gtdBadge.bugBg') : theme('gtdBadge.featBg')};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-right: -4px;
`
export const WipIcon = styled(GtdWipSVG)<TType>`
  ${css.size(9)};
  fill: ${({ type }) =>
    type === GTD_TYPE.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const DoneIcon = styled(GtdDoneSVG)<TType>`
  ${css.size(10)};
  fill: ${({ type }) =>
    type === GTD_TYPE.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const TODOIcon = styled(GtdTodoSVG)<TType>`
  ${css.size(10)};
  fill: ${({ type }) =>
    type === GTD_TYPE.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
