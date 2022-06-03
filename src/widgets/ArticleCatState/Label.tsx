import { FC, memo } from 'react'

import type { TProps as TArticleStateBadgeProps } from './index'

import { ARTICLE_STATE, ARTICLE_CAT } from '@/constant'

import {
  Wrapper,
  BugWrapper,
  QuestionWrapper,
  LockWrapper,
  OtherWrapper,
} from './styles/label'

type TProps = Pick<
  TArticleStateBadgeProps,
  'cat' | 'kanbanLayout' | 'smaller' | 'state'
>

const Label: FC<TProps> = ({ cat, state, kanbanLayout, smaller }) => {
  switch (cat) {
    case ARTICLE_CAT.FEATURE: {
      return (
        <Wrapper kanbanLayout={kanbanLayout} state={state} smaller={smaller}>
          功能建议
        </Wrapper>
      )
    }

    case ARTICLE_CAT.BUG: {
      return (
        <BugWrapper kanbanLayout={kanbanLayout} state={state} smaller={smaller}>
          Bug / 吐槽
        </BugWrapper>
      )
    }

    case ARTICLE_CAT.QUESTION: {
      if (state === ARTICLE_STATE.RESOLVE) {
        return <QuestionWrapper smaller={smaller}>已解决</QuestionWrapper>
      }

      return <OtherWrapper>问题 / 求助</OtherWrapper>
    }

    case ARTICLE_CAT.LOCK: {
      return <LockWrapper smaller={smaller}>重复问题</LockWrapper>
    }

    default:
      return <OtherWrapper>其它</OtherWrapper>
  }
}

export default memo(Label)
