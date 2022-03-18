import { FC, memo } from 'react'

import type { TProps as TGTDBadgeProps } from './index'

import { GTD_TYPE } from '@/constant'

import { Wrapper, BugWrapper } from './styles/label'

type TProps = Pick<TGTDBadgeProps, 'type'>

const Label: FC<TProps> = ({ type }) => {
  switch (type) {
    case GTD_TYPE.FEATURE: {
      return <Wrapper>功能需求</Wrapper>
    }

    case GTD_TYPE.BUG: {
      return <BugWrapper>缺陷/吐槽</BugWrapper>
    }

    default:
      return null
  }
}

export default memo(Label)
