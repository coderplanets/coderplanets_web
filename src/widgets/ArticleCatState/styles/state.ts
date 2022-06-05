import styled from 'styled-components'

import type { TArticleCat } from '@/spec'
import { ARTICLE_CAT } from '@/constant'

import css, { theme } from '@/utils/css'

import GtdWipSVG from '@/icons/GtdWip'
import GtdDoneSVG from '@/icons/GtdDone'
import GtdTodoSVG from '@/icons/GtdTodo'
import ResolveSVG from '@/icons/Hook'
import LockSVG from '@/icons/Lock'

import LightSVG from '@/icons/Light'
import BugSVG from '@/icons/Bug'
import QuestionSVG from '@/icons/Question'

type TType = { cat: TArticleCat; smaller: boolean }

export const Wrapper = styled.div<TType>`
  ${({ smaller }) => (smaller ? css.size(14) : css.size(18))};
  ${css.flex('align-both')};
  background: ${({ cat }) =>
    cat === ARTICLE_CAT.BUG
      ? theme('gtdBadge.bugBg')
      : theme('gtdBadge.featBg')};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-right: ${({ smaller }) => (smaller ? '-3px' : '-5px')};
`
export const NoBgWrapper = styled.div`
  margin-right: 2px;
  ${css.flex('align-both')};
`
export const WipIcon = styled(GtdWipSVG)<TType>`
  ${({ smaller }) => (smaller ? css.size(7) : css.size(9))};
  fill: ${({ cat }) =>
    cat === ARTICLE_CAT.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const DoneIcon = styled(GtdDoneSVG)<TType>`
  ${({ smaller }) => (smaller ? css.size(8) : css.size(10))};
  fill: ${({ cat }) =>
    cat === ARTICLE_CAT.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const TODOIcon = styled(GtdTodoSVG)<TType>`
  ${({ smaller }) => (smaller ? css.size(8) : css.size(10))};
  fill: ${({ cat }) =>
    cat === ARTICLE_CAT.BUG ? theme('gtdBadge.bug') : theme('gtdBadge.feat')};
`
export const ResolveIcon = styled(ResolveSVG)<{ smaller: boolean }>`
  ${({ smaller }) => (smaller ? css.size(12) : css.size(17))};
  margin-right: 2px;
  fill: ${theme('baseColor.green')};
`
export const LockIcon = styled(LockSVG)<{ smaller: boolean }>`
  ${({ smaller }) => (smaller ? css.size(11) : css.size(13))};
  fill: ${theme('thread.extraInfo')};
  margin-right: 3px;
`
const LightIcon = styled(LightSVG)`
  ${css.size(12)};
  fill: ${theme('thread.extraInfo')};
`

const BugIcon = styled(BugSVG)`
  ${css.size(12)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 2px;
`
const QuestionIcon = styled(QuestionSVG)`
  ${css.size(9)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 2px;
  margin-top: -1px;
`

export const NoBgIcon = {
  [ARTICLE_CAT.FEATURE]: LightIcon,
  [ARTICLE_CAT.BUG]: BugIcon,
  [ARTICLE_CAT.QUESTION]: QuestionIcon,
}
