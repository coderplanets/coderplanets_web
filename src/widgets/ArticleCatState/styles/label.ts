import { theme } from '@/utils'
import styled from 'styled-components'

import type { TArticleState } from '@/spec'
import { ARTICLE_STATE } from '@/constant'
import { isNoBgCase, getPadding } from './metric'
// import { theme } from '@/utils/css'

type TWrapper = {
  kanbanLayout: boolean
  state: TArticleState
  smaller: boolean
}

export const Wrapper = styled.div<TWrapper>`
  color: ${({ state }) =>
    state === ARTICLE_STATE.DEFAULT
      ? theme('thread.extraInfo')
      : theme('gtdBadge.feat')};
  background-color: ${({ kanbanLayout, state }) =>
    isNoBgCase(kanbanLayout, state) ? 'transparent' : theme('gtdBadge.featBg')};
  padding: ${({ kanbanLayout, state, smaller }) =>
    getPadding(kanbanLayout, state, smaller)}|;

  font-weight: ${({ kanbanLayout, state }) =>
    isNoBgCase(kanbanLayout, state) ? 400 : 600};
  border-radius: ${({ kanbanLayout, state }) =>
    isNoBgCase(kanbanLayout, state) ? 0 : '6px'};
  font-size: 12px;
`
export const BugWrapper = styled(Wrapper)<TWrapper>`
  color: ${({ state }) =>
    state === ARTICLE_STATE.DEFAULT
      ? theme('thread.extraInfo')
      : theme('gtdBadge.bug')};
  background-color: ${({ kanbanLayout, state }) =>
    isNoBgCase(kanbanLayout, state) ? 'transparent' : theme('gtdBadge.bugBg')};
  /* font-size: 12px; */
`
export const QuestionWrapper = styled.div<{ smaller: boolean }>`
  color: ${theme('baseColor.green')};
  font-weight: 600;
  font-size: ${({ smaller }) => (smaller ? '12px' : '13px')};
  margin-right: ${({ smaller }) => (smaller ? '0' : '6px')};
`
export const LockWrapper = styled.div<{ smaller: boolean }>`
  color: ${theme('thread.extraInfo')};
  font-size: ${({ smaller }) => (smaller ? '12px' : '14px')};
  margin-right: ${({ smaller }) => (smaller ? '0' : '6px')};
`

export const OtherWrapper = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
`
