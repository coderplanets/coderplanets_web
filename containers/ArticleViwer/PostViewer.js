import React from 'react'
import Comments from '../Comments'
// import Header from './Header'

import {
  Maybe,
  ArticleHeader,
  MarkDownRender,
  ArticleContentLoading,
} from '../../components'

import Labeler from '../Labeler'

import {
  BodyWrapper,
  CommentsWrapper,
  ArticleTitle,
  ArticleBody,
  Footer,
} from './styles/body'

import BodyHeader from './BodyHeader'

import { THREAD } from '../../utils'
import * as logic from './logic'

// <Header data={data} />
const PostViewer = ({ data, loading }) => (
  <React.Fragment>
    <ArticleHeader
      data={data}
      author={data.author}
      onReaction={logic.onReaction}
    />

    <BodyWrapper>
      <BodyHeader thread={THREAD.POST} />
      <ArticleTitle>{data.title}</ArticleTitle>
      <Maybe test={!loading} loading={<ArticleContentLoading num={2} />}>
        <ArticleBody>
          <MarkDownRender body={data.body} />
        </ArticleBody>
      </Maybe>
      <Footer>
        <Labeler />
      </Footer>
    </BodyWrapper>

    <CommentsWrapper>
      <Comments />
    </CommentsWrapper>
  </React.Fragment>
)

export default PostViewer
