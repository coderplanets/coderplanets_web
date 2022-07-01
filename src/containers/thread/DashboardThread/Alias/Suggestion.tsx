import { FC, memo } from 'react'

import { Wrapper, Hint, List, Item } from '../styles/alias/suggestion'

type TProps = {
  testid?: string
}

const Suggestion: FC<TProps> = ({ testid = 'Suggestion' }) => {
  const words = ['讨论区', '文档', '帖子']

  return (
    <Wrapper>
      <Hint>常用:</Hint>
      <List>
        {words.map((item) => (
          <Item key={item} size="tiny" ghost>
            {item}
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default memo(Suggestion)
