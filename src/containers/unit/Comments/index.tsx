/*
 *
 * Comments
 *
 */

import { FC } from 'react'

import { ANCHOR } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Modal from '@/components/Modal'
// import NoticeBar from '@/components/NoticeBar'

import Editor from './Editor'
import List from './List'
import ReplyEditor from './Editor/ReplyEditor'
// import LockedMessage from './LockedMessage'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, createComment, onReplyEditorClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Comments')

type TProps = {
  comments?: TStore
  ssr?: boolean
  locked?: boolean
  onCreate?: () => void
}

const CommentsContainer: FC<TProps> = ({
  comments: store,
  ssr = false,
  locked = false,
  onCreate = log,
}) => {
  useInit(store, ssr, locked)

  const {
    mode,
    viewingArticle,
    pagedCommentsData,
    referUsersData,
    accountInfo,
    showReplyBox,
    showReplyEditor,
    isEdit,
    foldedIds,
    isAllFolded,
  } = store

  console.log('showEditor: ', store.showEditor)

  return (
    <Wrapper id={ANCHOR.COMMENTS_ID}>
      <Modal show={showReplyBox} onClose={onReplyEditorClose}>
        {showReplyBox && (
          <ReplyEditor
            isEdit={isEdit}
            show={showReplyEditor}
            accountInfo={accountInfo}
            referUsers={referUsersData}
          />
        )}
      </Modal>

      <Editor
        onCreate={createComment(onCreate)}
        accountInfo={accountInfo}
        referUsers={referUsersData}
        restProps={{ ...store }}
      />

      {/* <br />
      <NoticeBar
        type="lock"
        content="关闭了讨论: 已解决"
        timestamp={new Date().toLocaleDateString()}
        user={{ nickname: 'Bot' }}
        isArticleAuthor={false}
      /> */}

      <List
        totalCommentsCount={viewingArticle.commentsCount}
        mode={mode}
        foldedIds={foldedIds}
        isAllFolded={isAllFolded}
        pagedComments={pagedCommentsData}
        restProps={{ ...store }}
      />
    </Wrapper>
  )
}

export default pluggedIn(CommentsContainer) as FC<TProps>
