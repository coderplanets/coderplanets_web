import { FC, memo } from 'react'

import { Wrapper, Inputer } from '../styles/title_input'
import { editOnChange } from '../logic'

type TProps = {
  title: string
}

const TitleInput: FC<TProps> = ({ title }) => {
  return (
    <Wrapper>
      <Inputer
        value={title}
        placeholder="// 帖子标题"
        behavior="textarea"
        onChange={(e) => editOnChange(e, 'title')}
      />
    </Wrapper>
  )
}

export default memo(TitleInput)
