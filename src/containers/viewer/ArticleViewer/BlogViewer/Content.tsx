import { FC, memo, Fragment } from 'react'

import type { TBlog, TBlogRSS } from '@/spec'
import { BLOG_TAB } from '@/constant'

import Linker from '@/widgets/Linker'
import BlogFeedsList from '@/widgets/BlogFeedsList'
import BlogAuthorInfo from '@/widgets/BlogAuthorInfo'
import ArticeBody from '@/widgets/ArtimentBody'

type TProps = {
  article: TBlog
  tab: string
  blogRssInfo: TBlogRSS
}

const Content: FC<TProps> = ({ article, tab, blogRssInfo }) => {
  switch (tab) {
    case BLOG_TAB.FEEDS: {
      return <BlogFeedsList items={blogRssInfo.historyFeed} />
    }
    case BLOG_TAB.AUTHOR: {
      return <BlogAuthorInfo author={blogRssInfo.author} />
    }
    default: {
      return (
        <Fragment>
          <Linker src={article.linkAddr} right={10} bottom={25} hint="原文:" />
          <ArticeBody document={article.document} />
        </Fragment>
      )
    }
  }
}

export default memo(Content)
