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
import UpdateEditor from './Editor/UpdateEditor'
// import LockedMessage from './LockedMessage'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, onReplyEditorClose, closeUpdateEditor } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Comments')

type TProps = {
  comments?: TStore
  ssr?: boolean
  locked?: boolean
}

const CommentsContainer: FC<TProps> = ({
  comments: store,
  ssr = false,
  locked = false,
}) => {
  useInit(store, ssr, locked)

  const {
    mode,
    viewingArticle,
    pagedCommentsData,
    accountInfo,
    showReplyBox,
    showReplyEditor,
    isEdit,
    commentBody,
    updateId,
    updateBody,
    submitState,
    showEditor,
    showUpdateEditor,
    foldState,
  } = store

  return (
    <Wrapper id={ANCHOR.COMMENTS_ID}>
      <Modal
        show={showUpdateEditor}
        width="680px"
        onClose={closeUpdateEditor}
        showCloseBtn
      >
        {showUpdateEditor && (
          <UpdateEditor
            id={updateId}
            body={updateBody}
            submitState={submitState}
          />
        )}
      </Modal>

      <Modal show={showReplyBox} onClose={onReplyEditorClose}>
        {showReplyBox && (
          <ReplyEditor
            isEdit={isEdit}
            body={commentBody}
            show={showReplyEditor}
            accountInfo={accountInfo}
            submitState={submitState}
          />
        )}
      </Modal>

      <Editor
        body={commentBody}
        showEditor={showEditor}
        accountInfo={accountInfo}
        submitState={submitState}
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
        foldState={foldState}
        pagedComments={pagedCommentsData}
        restProps={{ ...store }}
      />
    </Wrapper>
  )
}

export default pluggedIn(CommentsContainer) as FC<TProps>
