import { FC, memo } from 'react'
import { values } from 'ramda'

import { EMOTION } from '@/constant'
import { ICON } from '@/config'
import { Wrapper, EIcon } from './styles/panel'

const EmojiPanel: FC = () => {
  return (
    <Wrapper>
      {values(EMOTION).map((item) => (
        <EIcon
          key={item}
          src={`${ICON}/emotion/${item}.png`}
          name={item}
          noLazy
        />
      ))}
    </Wrapper>
  )
}

export default memo(EmojiPanel)
