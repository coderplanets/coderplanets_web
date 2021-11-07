/*
 *
 * UserPublishedComments
 *
 */

import React from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import { ThreadWrapper } from './styles'
import { useInit, threadOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserPublishedComments')

const UserPublishedCommentsContainer = ({ userPublishedComments: store }) => {
  useInit(store)

  // const { curThread, curView, pagedCommentsData } = store
  // const { totalCount } = pagedCommentsData

  return (
    <div>
      <ThreadWrapper>hello</ThreadWrapper>
    </div>
  )
}

export default pluggedIn(UserPublishedCommentsContainer)
