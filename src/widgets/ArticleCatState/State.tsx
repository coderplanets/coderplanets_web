import { FC, memo } from 'react'

import { ARTICLE_STATE } from '@/constant'

import type { TProps as TArticleStateBadgeProps } from './index'

import {
  Wrapper,
  NoBgWrapper,
  WipIcon,
  TODOIcon,
  DoneIcon,
  ResolveIcon,
  LockIcon,
  //
  NoBgIcon,
} from './styles/state'

type TProps = Pick<TArticleStateBadgeProps, 'state' | 'cat' | 'smaller'>

const State: FC<TProps> = ({ state, cat, smaller }) => {
  switch (state) {
    case ARTICLE_STATE.DONE: {
      return (
        <Wrapper cat={cat} smaller={smaller}>
          <DoneIcon cat={cat} smaller={smaller} />
        </Wrapper>
      )
    }

    case ARTICLE_STATE.WIP: {
      return (
        <Wrapper cat={cat} smaller={smaller}>
          <WipIcon cat={cat} smaller={smaller} />
        </Wrapper>
      )
    }

    case ARTICLE_STATE.TODO: {
      return (
        <Wrapper cat={cat} smaller={smaller}>
          <TODOIcon cat={cat} smaller={smaller} />
        </Wrapper>
      )
    }

    case ARTICLE_STATE.RESOLVE: {
      return (
        <NoBgWrapper>
          <ResolveIcon smaller={smaller} />
        </NoBgWrapper>
      )
    }

    case ARTICLE_STATE.LOCK: {
      return (
        <NoBgWrapper>
          <LockIcon smaller={smaller} />
        </NoBgWrapper>
      )
    }

    default: {
      const Icon = NoBgIcon[cat]
      if (!Icon) return null

      return (
        <NoBgWrapper>
          <Icon />
        </NoBgWrapper>
      )
    }
  }
}

export default memo(State)
