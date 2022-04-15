import { FC, useRef, Fragment } from 'react'

import type { TBlog, TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'

// import { Comments } from '@/containers/dynamic'
// import ArticleFooter from '@/containers/unit/ArticleFooter'
import ArtimentBody from '@/widgets/ArtimentBody'
import Comments from '@/containers/unit/Comments'
import Linker from '@/widgets/Linker'
import ViewportTracker from '@/widgets/ViewportTracker'

import {
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from '../../styles/desktop_view/blog_layout/article_tab'

import { checkAnchor } from '../../logic'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent')

type TProps = {
  metric: TMetric
  article: TBlog
}

const ArticleTab: FC<TProps> = ({ metric, article }) => {
  const ref = useRef()

  return (
    <Fragment>
      <ViewportTracker
        onEnter={() => checkAnchor(ref?.current)}
        onLeave={() => checkAnchor(ref?.current)}
      />
      <MainWrapper metric={metric}>
        <ArticleWrapper ref={ref}>
          <Linker src={article.linkAddr} right={10} bottom={25} hint="原文:" />
          <ArtimentBody document={article.document} />
          {/* <ArticleFooter metric={metric} /> */}
        </ArticleWrapper>

        <ViewportTracker
          onEnter={() => checkAnchor(ref?.current)}
          onLeave={() => checkAnchor(ref?.current)}
        />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </MainWrapper>
    </Fragment>
  )
}

export default ArticleTab
