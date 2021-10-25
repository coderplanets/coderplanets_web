/*
 *
 * UserPublished
 *
 */

import React from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import PagedArticles from '@/widgets/PagedArticles'
import ThreadSelector from '@/widgets/ThreadSelector'

import { ThreadWrapper } from './styles'
import { useInit, onThreadChange, onReload, onPreview } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserPublished')

const UserPublishedContainer = ({ userPublished: store }) => {
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
        />
      </ThreadWrapper>

      <PagedArticles
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

export default pluggedIn(UserPublishedContainer)
