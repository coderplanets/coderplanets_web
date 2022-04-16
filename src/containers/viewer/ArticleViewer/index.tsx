/*
 *
 * ArticleViewer
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Comments from '@/containers/unit/Comments'

import Viewer from './Viewer'

import type { TStore } from './store'
import { Wrapper, CommentsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

const CollectionFolder = dynamic(
  () => import('@/containers/tool/CollectionFolder'),
  {
    ssr: false,
  },
)

type TProps = {
  articleViewer?: TStore
  testid?: string
}

const ArticleViewerContainer: FC<TProps> = ({
  articleViewer: store,
  testid = 'article-viewer',
}) => {
  useInit(store)
  const { viewingArticle, documentData, loading, tab, blogRssInfoData } = store
  const article = Object.assign(viewingArticle, { document: documentData })

  return (
    <Wrapper testid={testid}>
      {/* @ts-ignore */}
      <CollectionFolder />
      <Viewer
        article={article}
        loading={loading}
        tab={tab}
        blogRssInfo={blogRssInfoData}
      />
      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </Wrapper>
  )
}

export default bond(ArticleViewerContainer, 'articleViewer') as FC<TProps>
