import React from 'react'
import Comments from '../Comments'
import Header from './Header'
import Body from './Body'

import { CommentsWrapper } from './styles/body'
import { THREAD } from '../../utils'

const JobViewer = ({ data, loading, accountInfo }) => (
  <React.Fragment>
    <Header data={data} />
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
