import { FC, memo } from 'react'

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
}

const Setter: FC<TProps> = ({ noEmpty = false }) => {
  if (noEmpty) {
    return (
      <Wrapper onClick={setArticleTag}>
        <SettingIcon />
        <Title>设置</Title>
      </Wrapper>
    )
  }

  return (
    <EmptyWrapper onClick={setArticleTag}>
      <HashIcon />
      <Title>设置标签</Title>
    </EmptyWrapper>
  )
}

export default memo(Setter)
