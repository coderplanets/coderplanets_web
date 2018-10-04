import React from 'react'
import Comments from '../Comments'
// import Header from './Header'
import Body from './Body'

import { ArticleHeader } from '../../components'
import { CommentsWrapper } from './styles/body'

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
    <Body data={data} loading={loading} thread={THREAD.POST} />
    <CommentsWrapper>
      <Comments />
    </CommentsWrapper>
  </React.Fragment>
)

export default PostViewer
