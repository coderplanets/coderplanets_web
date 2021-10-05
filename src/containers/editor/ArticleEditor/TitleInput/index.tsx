import { FC, memo } from 'react'

import { Wrapper, Inputer } from '../styles/title_input'

const TitleInput: FC = () => {
  return (
    <Wrapper>
      <Inputer placeholder="// 帖子标题" behavior="textarea" />
    </Wrapper>
  )
}

export default memo(TitleInput)
