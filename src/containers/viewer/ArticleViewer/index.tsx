/*
 *
 * ArticleViewer
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Comments from '@/containers/unit/Comments'

// TODO: remove
// TODO: remove
// import ArticleViewerHeader from '@/containers/unit/ArticleViewerHeader'

import Viewer from './Viewer'

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
  const { viewingArticle, loading } = store

  return (
    <Wrapper testid={testid}>
      <Viewer article={viewingArticle} loading={loading} />
      {/* <CommentsWrapper>
        <Comments onCreate={console.log} />
      </CommentsWrapper> */}
    </Wrapper>
  )
}

export default pluggedIn(ArticleViewerContainer) as FC<TProps>
