/*
 *
 * UserStared
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import PagedContents from '@/components/PagedContents'
import ThreadSelector from '@/components/ThreadSelector'

import { ThreadWrapper } from './styles'
import { useInit, onThreadChange, onReload, onPreview } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserStared')

const UserStaredContainer = ({ userStared: store }) => {
  useInit(store)

  const { pagedData, curView, curThread, viewingUser, accountInfo } = store
  const { totalCount } = pagedData

  return (
    <>
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
    </>
  )
}

export default connectStore(UserStaredContainer)
