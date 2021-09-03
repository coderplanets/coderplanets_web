import { FC, memo } from 'react'
import { isEmpty } from 'ramda'
import type { TTag } from '@/spec'

import { Wrapper, Tag, Dot, Title } from './styles/tag_list'

type TProps = {
  items: TTag[]
}

const TagList: FC<TProps> = ({ items }) => {
  if (isEmpty(items)) return null

  return (
    <Wrapper>
      {items.map((item) => (
        <Tag key={item.raw}>
          <Dot color={item.color} />
          <Title>{item.title}</Title>
        </Tag>
      ))}
    </Wrapper>
  )
}

export default memo(TagList)
