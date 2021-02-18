/*
 *
 * UserPublishedComments
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'

import ThreadSelector from '@/components/ThreadSelector'
import CommentsToContent from './CommentsToContent'

import { ThreadWrapper } from './styles'
import { useInit, threadOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserPublishedComments')

const UserPublishedCommentsContainer = ({ userPublishedComments: store }) => {
  useInit(store)

  const { curThread, curView, pagedCommentsData } = store
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

export default pluggedIn(UserPublishedCommentsContainer)
