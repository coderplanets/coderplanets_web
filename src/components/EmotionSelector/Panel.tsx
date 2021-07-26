import { FC, memo } from 'react'

import { ICON } from '@/config'
import { Wrapper, EIcon } from './styles/panel'

const emotions = ['downvote', 'heart', 'confused', 'beer', 'popcorn', 'pill']

const EmojiPanel: FC = () => {
  return (
    <Wrapper>
      {emotions.map((item) => (
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
