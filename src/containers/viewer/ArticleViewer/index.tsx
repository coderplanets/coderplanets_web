/*
 *
 * ArticleViewer
 *
 */

import { FC } from 'react'

import { pluggedIn, buildLog } from '@/utils'

import type { TStore } from './store'

import Comments from '@/containers/unit/Comments'
// TODO: remove
// import ArticleBodyHeader from '@/containers/unit/ArticleBodyHeader'
// TODO: remove
// import ArticleViewerHeader from '@/containers/unit/ArticleViewerHeader'

import Header from './Header'
import ArticleInfo from './ArticleInfo'

import { ArticleContentLoading } from '@/components/Loading'

import {
  Wrapper,
  ArticleWrapper,
  BodyWrapper,
  Title,
  ArticleBody,
  Footer,
  CommentsWrapper,
} from './styles'
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
      <ArticleWrapper>
        <Header article={viewingData} />
        <Title>{viewingData.title}</Title>
        <ArticleInfo article={viewingData} />

        <BodyWrapper>
          {loading ? (
            <ArticleContentLoading num={2} />
          ) : (
            <ArticleBody>
              <div>article body</div>
            </ArticleBody>
          )}
          <Footer>
            <div>tagger</div>
          </Footer>
        </BodyWrapper>
      </ArticleWrapper>

      <CommentsWrapper>
        <Comments onCreate={console.log} />
      </CommentsWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleViewerContainer) as FC<TProps>
