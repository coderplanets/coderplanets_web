import { FC, memo } from 'react'

import { GTD_STATE } from '@/constant'

import type { TProps as TGTDBadgeProps } from './index'

import { Wrapper, WipIcon, TODOIcon, DoneIcon } from './styles/state'

type TProps = Pick<TGTDBadgeProps, 'state' | 'type'>

const State: FC<TProps> = ({ state, type }) => {
  switch (state) {
    case GTD_STATE.DONE: {
      return (
        <Wrapper type={type}>
          <DoneIcon type={type} />
        </Wrapper>
      )
    }

    case GTD_STATE.WIP: {
      return (
        <Wrapper type={type}>
          <WipIcon type={type} />
        </Wrapper>
      )
    }

    case GTD_STATE.TODO: {
      return (
        <Wrapper type={type}>
          <TODOIcon type={type} />
        </Wrapper>
      )
    }

    default: {
      return null
    }
  }
}

export default memo(State)
