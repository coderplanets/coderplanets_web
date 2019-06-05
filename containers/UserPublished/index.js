/*
 *
 * UserPublished
 *
 */

import React from 'react'

import { connectStore, makelogger } from '@utils'

import PagedContents from '@components/PagedContents'
import ThreadSelector from '@components/ThreadSelector'

import { ThreadWrapper } from './styles'
import { useInit, onThreadChange, onReload, onPreview } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:UserPublished')

const UserPublishedContainer = ({ userPublished }) => {
  useInit(userPublished)

  const {
    pagedData,
    curView,
    curThread,
    viewingUser,
    accountInfo,
  } = userPublished

  const { totalCount } = pagedData

  return (
    <React.Fragment>
      <ThreadWrapper>
        <ThreadSelector
          active={curThread}
          onSelect={onThreadChange}
          totalCount={totalCount}
          lookLike="box"
        />
      </ThreadWrapper>

      <PagedContents
        data={pagedData}
        thread={curThread}
        curView={curView}
        accountInfo={accountInfo}
        emptyPrefix={`未找到 ${viewingUser.nickname} 发布的`}
        onPageChange={onReload}
        onPreview={onPreview}
      />
    </React.Fragment>
  )
}

export default connectStore(UserPublishedContainer)
