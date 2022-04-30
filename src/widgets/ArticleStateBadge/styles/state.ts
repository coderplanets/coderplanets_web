import styled from 'styled-components'

import type { TASType } from '@/spec'
import { AS_TYPE } from '@/constant'

import css, { theme } from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'
import ResolveSVG from '@/icons/Checked'
import LockSVG from '@/icons/Lock'

type TType = { type: TASType }

export const Wrapper = styled.div<TType>`
  ${css.size(18)};
  ${css.flex('align-both')};
  background: ${({ type }) =>
    type === AS_TYPE.BUG ? theme('gtdBadge.bugBg') : theme('gtdBadge.featBg')};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-right: -4px;
`
export const NoBgWrapper = styled.div`
  margin-right: 2px;
  ${css.flex('align-both')};
`
export const WipIcon = styled(GtdWipSVG)<TType>`
  ${css.size(9)};
  fill: ${({ type }) =>
    type === AS_TYPE.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const DoneIcon = styled(GtdDoneSVG)<TType>`
  ${css.size(10)};
  fill: ${({ type }) =>
    type === AS_TYPE.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const TODOIcon = styled(GtdTodoSVG)<TType>`
  ${css.size(10)};
  fill: ${({ type }) =>
    type === AS_TYPE.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const ResolveIcon = styled(ResolveSVG)<{ articleInfoLayout: boolean }>`
  ${({ articleInfoLayout }) =>
    articleInfoLayout ? css.size(18) : css.size(16)};
  fill: ${theme('baseColor.green')};
  margin-top: 1px;
`
export const LockIcon = styled(LockSVG)<{ articleInfoLayout: boolean }>`
  ${({ articleInfoLayout }) =>
    articleInfoLayout ? css.size(13) : css.size(11)};
  fill: ${theme('thread.extraInfo')};
  margin-top: 1px;
  margin-right: 2px;
`
