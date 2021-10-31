import { FC, memo } from 'react'

import type { TBlogRSS, TBlog } from '@/spec'
import FeedItem from './FeedItem'
import RSSItem from './TheRSSItem'

import {
  Wrapper,
  Inputer,
  Hint,
  ListWrapper,
} from '../styles/content/feed_list'
import { inputOnChange } from '../logic'

type TProps = {
  rssInfo: TBlogRSS
  filterTitle: string
  activeBlog: TBlog
}

const FeedList: FC<TProps> = ({ rssInfo, filterTitle, activeBlog }) => {
  return (
    <Wrapper>
      <RSSItem left={8} bottom={14} rssInfo={rssInfo} />
      <Inputer
        value={filterTitle}
        placeholder="// 按标题搜索"
        onChange={(e) => inputOnChange(e, 'filterTitle')}
      />
      <Hint>请选择你要提交的博客, 可使用标题搜索</Hint>
      <ListWrapper>
        {rssInfo.historyFeed.map((item) => (
          <FeedItem
            key={item.id}
            item={item}
            active={activeBlog.id === item.id}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

export default memo(FeedList)
