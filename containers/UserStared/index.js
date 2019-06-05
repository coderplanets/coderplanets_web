/*
 *
 * UserStared
 *
 */

import React from 'react'

import { connectStore, buildLog, THREAD } from '@utils'

import PagedContents from '@components/PagedContents'
import ThreadSelector from '@components/ThreadSelector'
import { ThreadWrapper } from './styles'

import { useInit, onThreadChange, onReload, onPreview } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserStared')

const UserStaredContainer = ({ userStared }) => {
  useInit(userStared)

  const { pagedData, curView, curThread, viewingUser, accountInfo } = userStared
  const { totalCount } = pagedData

  return (
    <React.Fragment>
      <ThreadWrapper>
        <ThreadSelector
          active={curThread}
          onSelect={onThreadChange}
          totalCount={totalCount}
          lookLike="box"
          options={[THREAD.POST, THREAD.JOB, THREAD.VIDEO]}
        />
      </ThreadWrapper>

      <PagedContents
        data={pagedData}
        thread={curThread}
        curView={curView}
        accountInfo={accountInfo}
        emptyPrefix={`未找到 ${viewingUser.nickname} 喜欢的`}
        onPageChange={onReload}
        onPreview={onPreview}
      />
    </React.Fragment>
  )
}

export default connectStore(UserStaredContainer)
