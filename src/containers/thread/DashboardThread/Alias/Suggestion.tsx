import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import { Wrapper, Hint, List, Item } from '../styles/alias/suggestion'

type TProps = {
  items: string[]
  onChange: (item: string) => void
}

const Suggestion: FC<TProps> = ({ items, onChange }) => {
  if (isEmpty(items)) return null

  return (
    <Wrapper>
      <Hint>常用别名:</Hint>
      <List>
        {items.map((item) => (
          <Item key={item} size="tiny" ghost onClick={() => onChange(item)}>
            {item}
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default memo(Suggestion)
