import { FC, memo } from 'react'

import type { TProps as TGTDBadgeProps } from './index'

import { GTD_TYPE } from '@/constant'

import { Wrapper, BugWrapper } from './styles/label'

type TProps = Pick<TGTDBadgeProps, 'type' | 'noBg'>

const Label: FC<TProps> = ({ type, noBg }) => {
  switch (type) {
    case GTD_TYPE.FEATURE: {
      return <Wrapper noBg={noBg}>功能需求</Wrapper>
    }

    case GTD_TYPE.BUG: {
      return <BugWrapper noBg={noBg}>缺陷/吐槽</BugWrapper>
    }

    default:
      return null
  }
}

export default memo(Label)
