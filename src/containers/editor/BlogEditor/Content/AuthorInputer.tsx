import { FC, memo } from 'react'

import type { TBlogRSS, TBlog } from '@/spec'

import RSSItem from './RSSItem'
import FeedItem from './FeedItem'

import {
  Wrapper,
  Hint,
  InputerWrapper,
  Inputer,
  InputMask,
} from '../styles/content/author_inputer'

type TProps = {
  rssInfo: TBlogRSS
  activeBlog: TBlog
}

const AuthorInputer: FC<TProps> = ({ rssInfo, activeBlog }) => {
  return (
    <Wrapper>
      <RSSItem bottom={20} rssInfo={rssInfo} />
      <FeedItem item={activeBlog} withSelector={false} withEdit />
      <Hint>
        请填写作者信息，一般位于原博客 &quot;关于&quot; 或 &quot;about&quot;
        链接内。保存后以后若添加同一作者博客将不会重复录入。
      </Hint>
      <InputerWrapper>
        <Inputer placeholder="// 作者名称" />
      </InputerWrapper>
      <InputerWrapper>
        <Inputer placeholder="// 作者简介" behavior="textarea" />
      </InputerWrapper>
      <InputerWrapper>
        <InputMask>https://twitter.com/</InputMask>
        <Inputer placeholder="// 可选" />
      </InputerWrapper>
      <InputerWrapper>
        <InputMask>https://github.com/</InputMask>
        <Inputer placeholder="// 可选" />
      </InputerWrapper>
    </Wrapper>
  )
}

export default memo(AuthorInputer)
