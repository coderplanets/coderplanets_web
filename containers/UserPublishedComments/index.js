/*
 *
 * UserPublishedComments
 *
 */

import React from 'react'

import { connectStore, makelogger } from '@utils'

import ThreadSelector from '@components/ThreadSelector'
import CommentsToContent from './CommentsToContent'

import { ThreadWrapper } from './styles'
import { useInit, threadOnChange } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:UserPublishedComments')

const UserPublishedCommentsContainer = ({ userPublishedComments }) => {
  useInit(userPublishedComments)

  const { curThread, curView, pagedCommentsData } = userPublishedComments
  const { totalCount } = pagedCommentsData

  return (
    <div>
      <ThreadWrapper>
        <ThreadSelector
          active={curThread}
          onSelect={threadOnChange}
          totalCount={totalCount}
          lookLike="box"
        />
      </ThreadWrapper>
      <CommentsToContent
        thread={curThread}
        curView={curView}
        data={pagedCommentsData}
      />
    </div>
  )
}

export default connectStore(UserPublishedCommentsContainer)
