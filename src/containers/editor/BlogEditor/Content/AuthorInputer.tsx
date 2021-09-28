import { FC, memo } from 'react'

import RSSItem from './RssItem'
import FeedItem from './FeedItem'

import {
  Wrapper,
  Hint,
  InputerWrapper,
  Inputer,
  InputMask,
} from '../styles/content/author_inputer'

const item = {
  id: '1',
  title: 'HTML slot 插槽元素深入',
  digest:
    '本文应该是目前最深入最细致的介绍 HTML slot 插槽元素的文章了，如果您对Web 组件开发感兴趣，则本文内容不容错过。',
  link_addr: 'https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/',
  published: 'Sun, 15 Aug 2021 04:40:49 +0000',
}

const AuthorInputer: FC = () => {
  return (
    <Wrapper>
      <RSSItem bottom={20} />
      <FeedItem item={item} withSelector={false} withEdit />
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
