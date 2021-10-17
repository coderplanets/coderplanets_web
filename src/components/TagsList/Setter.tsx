import { FC, memo } from 'react'

import type { TCommunity, TThread, TTag } from '@/spec'
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
  tags: TTag[]
}

const Setter: FC<TProps> = ({ community, thread, tags, noEmpty = false }) => {
  if (noEmpty) {
    return (
      <Wrapper onClick={() => setArticleTag(community, thread, tags)}>
        <SettingIcon />
        <Title>设置</Title>
      </Wrapper>
    )
  }

  return (
    <EmptyWrapper onClick={() => setArticleTag(community, thread, tags)}>
      <HashIcon />
      <Title>设置标签</Title>
    </EmptyWrapper>
  )
}

export default memo(Setter)
