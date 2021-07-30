/* eslint-disable react/display-name */

import { Fragment, memo } from 'react'
import { isEmpty } from 'ramda'

import { THREAD, TYPE } from '@/constant'
import { Trans } from '@/utils'

import EmptyThread from '@/components/EmptyThread'
import EmptyLabel from '@/components/EmptyLabel'

import PostsList from './PostsList'
import JobsList from './JobsList'
// import ReposList from './ReposList'

const ArticleList = (props) => {
  const { thread, resState, community, emptyPrefix } = props

  if (resState === TYPE.RES_STATE.EMPTY) {
    return (
      <Fragment>
        {isEmpty(emptyPrefix) ? (
          <EmptyThread community={community} thread={thread} />
        ) : (
          <EmptyLabel
            text={`${emptyPrefix}${Trans(thread)}信息`}
            size="large"
          />
        )}
      </Fragment>
    )
  }

  switch (thread) {
    case THREAD.JOB:
      return <div>..</div> // <JobsList {...props} />

    // case THREAD.REPO:
    //   return <ReposList {...props} />

    default:
      return <PostsList {...props} />
  }
}

export default memo(ArticleList)
