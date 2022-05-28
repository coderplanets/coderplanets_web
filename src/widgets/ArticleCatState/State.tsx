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

type TProps = Pick<TArticleStateBadgeProps, 'state' | 'type' | 'smaller'>

const State: FC<TProps> = ({ state, type, smaller }) => {
  switch (state) {
    case ARTICLE_STATE.DONE: {
      return (
        <Wrapper type={type} smaller={smaller}>
          <DoneIcon type={type} smaller={smaller} />
        </Wrapper>
      )
    }

    case ARTICLE_STATE.WIP: {
      return (
        <Wrapper type={type} smaller={smaller}>
          <WipIcon type={type} smaller={smaller} />
        </Wrapper>
      )
    }

    case ARTICLE_STATE.TODO: {
      return (
        <Wrapper type={type} smaller={smaller}>
          <TODOIcon type={type} smaller={smaller} />
        </Wrapper>
      )
    }

    case ARTICLE_STATE.RESOLVE: {
      return (
        <NoBgWrapper>
          <ResolveIcon type={type} smaller={smaller} />
        </NoBgWrapper>
      )
    }

    case ARTICLE_STATE.LOCK: {
      return (
        <NoBgWrapper>
          <LockIcon type={type} smaller={smaller} />
        </NoBgWrapper>
      )
    }

    default: {
      const Icon = NoBgIcon[type]
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
