import { FC, memo } from 'react'

import type { TProps as TArticleStateBadgeProps } from './index'

import { AS_TYPE } from '@/constant'

import {
  Wrapper,
  BugWrapper,
  QuestionWrapper,
  LockWrapper,
} from './styles/label'

type TProps = Pick<
  TArticleStateBadgeProps,
  'type' | 'kanbanLayout' | 'articleInfoLayout'
>

const Label: FC<TProps> = ({ type, kanbanLayout, articleInfoLayout }) => {
  switch (type) {
    case AS_TYPE.FEATURE: {
      return <Wrapper kanbanLayout={kanbanLayout}>功能建议</Wrapper>
    }

    case AS_TYPE.BUG: {
      return <BugWrapper kanbanLayout={kanbanLayout}>Bug / 吐槽</BugWrapper>
    }

    case AS_TYPE.QUESTION: {
      return (
        <QuestionWrapper articleInfoLayout={articleInfoLayout}>
          已解决
        </QuestionWrapper>
      )
    }

    case AS_TYPE.LOCK: {
      return (
        <LockWrapper articleInfoLayout={articleInfoLayout}>
          重复问题
        </LockWrapper>
      )
    }

    default:
      return null
  }
}

export default memo(Label)
