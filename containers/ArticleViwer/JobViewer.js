import React from 'react'
import Comments from '../Comments'

import { ArticleHeader } from '../../components'

import { CommentsWrapper } from './styles/body'
import Body from './Body'

import { THREAD } from '../../utils'
import * as logic from './logic'

const JobViewer = ({ data, loading, accountInfo }) => (
  <React.Fragment>
    <ArticleHeader
      data={data}
      author={data.author}
      onReaction={logic.onReaction}
      THREAD={THREAD.JOB}
    />
    <Body
      data={data}
      loading={loading}
      accountInfo={accountInfo}
      thread={THREAD.JOB}
    />
    <CommentsWrapper>
      <Comments />
    </CommentsWrapper>
  </React.Fragment>
)

export default JobViewer
