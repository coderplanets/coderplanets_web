import { FC, memo } from 'react'

import { AS_STATE } from '@/constant'

import type { TProps as TArticleStateBadgeProps } from './index'

import {
  Wrapper,
  NoBgWrapper,
  WipIcon,
  TODOIcon,
  DoneIcon,
  ResolveIcon,
  LockIcon,
} from './styles/state'

type TProps = Pick<
  TArticleStateBadgeProps,
  'state' | 'type' | 'articleInfoLayout'
>

const State: FC<TProps> = ({ state, type, articleInfoLayout }) => {
  switch (state) {
    case AS_STATE.DONE: {
      return (
        <Wrapper type={type}>
          <DoneIcon type={type} />
        </Wrapper>
      )
    }

    case AS_STATE.WIP: {
      return (
        <Wrapper type={type}>
          <WipIcon type={type} />
        </Wrapper>
      )
    }

    case AS_STATE.TODO: {
      return (
        <Wrapper type={type}>
          <TODOIcon type={type} />
        </Wrapper>
      )
    }

    case AS_STATE.RESOLVE: {
      return (
        <NoBgWrapper>
          <ResolveIcon type={type} articleInfoLayout={articleInfoLayout} />
        </NoBgWrapper>
      )
    }

    case AS_STATE.LOCK: {
      return (
        <NoBgWrapper>
          <LockIcon type={type} articleInfoLayout={articleInfoLayout} />
        </NoBgWrapper>
      )
    }

    default: {
      return null
    }
  }
}

export default memo(State)
