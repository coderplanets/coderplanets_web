import { FC, useRef, Fragment } from 'react'

import type { TWorks, TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'

import { ArticleFooter, Comments } from '@/containers/dynamic'
import ArtimentBody from '@/widgets/ArtimentBody'

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
  article: TWorks
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
          <ArtimentBody document={article.document} />
          <ArticleFooter metric={metric} />
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
