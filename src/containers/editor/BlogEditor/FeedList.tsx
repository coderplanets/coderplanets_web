import { FC, memo } from 'react'

import { Wrapper, Item, Title, Digest } from './styles/feed_list'

const FeedList: FC = () => {
  return (
    <Wrapper>
      <Item>
        <Title>HTML slot 插槽元素深入</Title>
        <Digest>
          本文应该是目前最深入最细致的介绍 HTML slot 插槽元素的文章了，如果您对
          Web 组件开发感兴趣，则本文内容不容错过。
        </Digest>
      </Item>
    </Wrapper>
  )
}

export default memo(FeedList)
