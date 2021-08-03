/*
 *
 * UserStared
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import PagedArticles from '@/components/PagedArticles'
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
    <React.Fragment>
      <ThreadWrapper>
        <ThreadSelector
          active={curThread}
          onSelect={onThreadChange}
          totalCount={totalCount}
          lookLike="box"
          options={[THREAD.POST, THREAD.JOB]}
        />
      </ThreadWrapper>

      <PagedArticles
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

export default pluggedIn(UserStaredContainer)
