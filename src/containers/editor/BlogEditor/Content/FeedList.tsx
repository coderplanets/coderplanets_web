import { FC, memo } from 'react'

import type { TBlog } from '@/spec'
import FeedItem from './FeedItem'
import RSSItem from './RSSItem'

import { Wrapper, Inputer, Hint } from '../styles/content/feed_list'

type TProps = {
  rss: string
  feeds: TBlog[]
}

const FeedList: FC<TProps> = ({ rss, feeds }) => {
  return (
    <Wrapper>
      <RSSItem left={12} bottom={14} rss={rss} />
      <Inputer placeholder="// 按标题搜索" />
      <Hint>请选择你要提交的博客, 可使用标题搜索</Hint>
      {feeds.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default memo(FeedList)
