/*
 *
 * Comments
 *
 */

import { FC } from 'react'

import { ANCHOR } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

// import NoticeBar from '@/components/NoticeBar'

import Editor from './Editor'
import List from './List'
// import LockedMessage from './LockedMessage'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Comments')

type TProps = {
  comments?: TStore
  locked?: boolean
}

const CommentsContainer: FC<TProps> = ({ comments: store, locked = false }) => {
  useInit(store, locked)
  const {
    mode,
    commentsCount,
    pagedCommentsData,
    foldState,
    editState,
    repliesState,
    loading,
  } = store

  return (
    <Wrapper id={ANCHOR.COMMENTS_ID}>
      <Editor editState={editState} />

      {/* <br />
      <NoticeBar
        type="lock"
        content="关闭了讨论: 已解决"
        timestamp={new Date().toLocaleDateString()}
        user={{ nickname: 'Bot' }}
        isArticleAuthor={false}
      /> */}

      <List
        totalCommentsCount={commentsCount}
        mode={mode}
        foldState={foldState}
        pagedComments={pagedCommentsData}
        repliesState={repliesState}
        loading={loading}
      />
    </Wrapper>
  )
}

export default pluggedIn(CommentsContainer) as FC<TProps>
