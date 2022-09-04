/*
 * ArticleViewer
 */

import { FC, memo, Fragment, useCallback, useState } from 'react'

import type { TBlog, TBlogRSS } from '@/spec'
import { buildLog } from '@/utils/logger'

import ViewportTracker from '@/widgets/ViewportTracker'
import { ArticleContentLoading } from '@/widgets/Loading'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import FixedHeader from './FixedHeader'
import Header from './Header'
import ArticleInfo from './ArticleInfo'

import Content from './Content'

import { Wrapper, BodyWrapper, Title } from '../styles/blog_viewer'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  article: TBlog
  loading: boolean
  tab: string
  blogRssInfo: TBlogRSS
}

const BlogViewer: FC<TProps> = ({ article, loading, tab, blogRssInfo }) => {
  const [fixedHeaderVisible, setFixedHeaderVisible] = useState(false)

  const hideFixedHeader = useCallback(() => setFixedHeaderVisible(false), [])
  const showFixedHeader = useCallback(() => setFixedHeaderVisible(true), [])

  return (
    <Fragment>
      <FixedHeader article={article} visible={fixedHeaderVisible} />
      <Wrapper>
        <Header article={article} />
        <Title>{article.title}</Title>
        <ArticleInfo article={article} tab={tab} />
        <ViewportTracker onEnter={hideFixedHeader} onLeave={showFixedHeader} />

        {loading && (
          <ArticleContentLoading num={1} top={15} bottom={30} left={-50} />
        )}
        {!loading && (
          <BodyWrapper>
            <Content article={article} blogRssInfo={blogRssInfo} tab={tab} />
          </BodyWrapper>
        )}
        <ArticleFooter />
      </Wrapper>
    </Fragment>
  )
}

export default memo(BlogViewer)
