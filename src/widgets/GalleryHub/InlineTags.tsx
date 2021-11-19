import { FC, memo } from 'react'

import { Wrapper, Tag } from './styles/inline_tags'

type TProps = {
  items: string[]
}

const InlineTags: FC<TProps> = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </Wrapper>
  )
}

export default memo(InlineTags)
