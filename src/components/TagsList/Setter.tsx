import { FC, memo } from 'react'

import type { TCommunity, TThread } from '@/spec'
import { setArticleTag } from '@/utils/helper'
import {
  Wrapper,
  EmptyWrapper,
  SettingIcon,
  HashIcon,
  Title,
} from './styles/setter'

type TProps = {
  noEmpty?: boolean
  community: TCommunity
  thread: TThread
}

const Setter: FC<TProps> = ({ community, thread, noEmpty = false }) => {
  if (noEmpty) {
    return (
      <Wrapper onClick={() => setArticleTag(community, thread)}>
        <SettingIcon />
        <Title>设置</Title>
      </Wrapper>
    )
  }

  return (
    <EmptyWrapper onClick={() => setArticleTag(community, thread)}>
      <HashIcon />
      <Title>设置标签</Title>
    </EmptyWrapper>
  )
}

export default memo(Setter)
