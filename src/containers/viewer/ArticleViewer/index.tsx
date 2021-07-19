/*
 *
 * ArticleViewer
 *
 */

import { FC } from 'react'

import { pluggedIn, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
import ArticleFooter from '@/containers/unit/ArticleFooter'

// TODO: remove
// import ArticleBodyHeader from '@/containers/unit/ArticleBodyHeader'
// TODO: remove
// import ArticleViewerHeader from '@/containers/unit/ArticleViewerHeader'

// import PostViewer from './PostViewer'
import WorksViewer from './WorksViewer'

import type { TStore } from './store'
import { Wrapper, CommentsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  articleViewer?: TStore
  testid: string
}

const ArticleViewerContainer: FC<TProps> = ({
  articleViewer: store,
  testid,
}) => {
  useInit(store)
  const { viewingData, loading } = store

  return (
    <Wrapper testid={testid}>
      <WorksViewer article={viewingData} loading={loading} />
      {/* <PostViewer article={viewingData} loading={loading} /> */}
      <ArticleFooter />
      <CommentsWrapper>
        <Comments onCreate={console.log} />
      </CommentsWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleViewerContainer) as FC<TProps>
