import React from 'react'
import R from 'ramda'
import Comments from '../Comments'
// import Header from './Header'

import ArticleBodyHeader from '../ArticleBodyHeader'
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

import { THREAD } from '../../utils'
import * as logic from './logic'

// <Header data={data} />
const PostViewer = ({ data, loading }) => {
  const tagTitleList = R.pluck('title', data.tags)

  return (
    <React.Fragment>
      <ArticleHeader
        data={data}
        author={data.author}
        onReaction={logic.onReaction}
        onListReactionUsers={logic.onListReactionUsers}
      />

      <BodyWrapper>
        <ArticleBodyHeader data={data} thread={THREAD.POST} />
        <ArticleTitle>{data.title}</ArticleTitle>
        <Maybe test={!loading} loading={<ArticleContentLoading num={2} />}>
          <ArticleBody>
            <MarkDownRender body={data.body} />
          </ArticleBody>
        </Maybe>
        <Footer>
          <Labeler
            onTagSelect={logic.onTagSelect}
            onTagUnselect={logic.onTagUnselect}
            selected={tagTitleList}
          />
        </Footer>
      </BodyWrapper>

      <CommentsWrapper>
        <Comments onCreate={logic.onCommentCreate} />
      </CommentsWrapper>
    </React.Fragment>
  )
}

export default PostViewer
