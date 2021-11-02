import { FC, memo } from 'react'

import { Wrapper, Inputer } from '../styles/title_input'
import { editOnChange } from '../logic'

type TProps = {
  title: string
  placeholder: string
}

const TitleInput: FC<TProps> = ({ title, placeholder }) => {
  return (
    <Wrapper>
      <Inputer
        value={title}
        placeholder={placeholder}
        behavior="textarea"
        onChange={(e) => editOnChange(e, 'title')}
      />
    </Wrapper>
  )
}

export default memo(TitleInput)
