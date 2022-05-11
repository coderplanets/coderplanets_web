/*
 *
 * Comments
 *
 */

import { FC } from 'react'

import { ANCHOR } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

// import NoticeBar from '@/widgets/NoticeBar'

import Editor from './Editor'
import List from './List'
// import LockedMessage from './LockedMessage'

import type { TStore } from './store'
import type { TAPIMode } from './spec'
import { API_MODE } from './constant'
import { Wrapper } from './styles'
import { useInit } from './logic'

import HeadBar from './HeadBar'

/* eslint-disable-next-line */
const log = buildLog('C:Comments')

type TProps = {
  comments?: TStore
  apiMode?: TAPIMode
  locked?: boolean
}

const CommentsContainer: FC<TProps> = ({
  comments: store,
  locked = false,
  apiMode = API_MODE.ARTICLE,
}) => {
  useInit(store, locked, apiMode)

  const {
    mode,
    pagedCommentsData,
    foldState,
    editState,
    repliesState,
    loading,
    basicState,
  } = store

  const { isAllFolded } = foldState
  const { totalCount } = pagedCommentsData

  return (
    <Wrapper id={ANCHOR.COMMENTS_ID}>
      {apiMode === API_MODE.ARTICLE && <Editor editState={editState} />}

      {/* <br />
      <NoticeBar
        type="lock"
        content="关闭了讨论: 已解决"
        timestamp={new Date().toLocaleDateString()}
        user={{ nickname: 'Bot' }}
        isArticleAuthor={false}
      /> */}

      {totalCount > 0 && (
        <HeadBar
          apiMode={apiMode}
          isAllFolded={isAllFolded}
          basicState={basicState}
          mode={mode}
          loading={loading}
          editState={editState}
        />
      )}

      <List
        mode={mode}
        apiMode={apiMode}
        foldState={foldState}
        pagedComments={pagedCommentsData}
        repliesState={repliesState}
        loading={loading}
      />
    </Wrapper>
  )
}

export default bond(CommentsContainer, 'comments') as FC<TProps>
