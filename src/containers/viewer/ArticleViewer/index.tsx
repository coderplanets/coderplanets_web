/*
 *
 * ArticleViewer
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Comments from '@/containers/unit/Comments'

import Viewer from './Viewer'

import type { TStore } from './store'
import { Wrapper, CommentsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  articleViewer?: TStore
  testid?: string
}

const ArticleViewerContainer: FC<TProps> = ({
  articleViewer: store,
  testid = 'article-viewer',
}) => {
  useInit(store)
  const { viewingArticle, loading, tab } = store

  return (
    <Wrapper testid={testid}>
      <Viewer article={viewingArticle} loading={loading} tab={tab} />
      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleViewerContainer) as FC<TProps>
