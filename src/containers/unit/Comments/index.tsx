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
import NoticeBar from '@/components/NoticeBar'
import { Button } from '@/components/Buttons'

import CommentEditor from './CommentEditor'
import List from './List'
// import CommentReplyEditor from './CommentReplyEditor'
// import LockedMessage from './LockedMessage'

import type { TStore } from './store'
import { Wrapper } from './styles'
import {
  useInit,
  createComment,
  onReplyEditorClose,
  loadComments,
} from './logic'

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
    showReplyPreview,
    mentionListData,
    isEdit,
    foldedIds,
    isAllFolded,
  } = store

  return (
    <Wrapper id={ANCHOR.COMMENTS_ID}>
      <Button onClick={() => loadComments()}>test</Button>
      <Modal show={showReplyBox} onClose={onReplyEditorClose}>
        {/* {showReplyBox && (
          <CommentReplyEditor
            isEdit={isEdit}
            show={showReplyEditor}
            accountInfo={accountInfo}
            referUsers={referUsersData}
            restProps={{ ...store }}
            mentionList={mentionListData}
            showReplyPreview={showReplyPreview}
          />
        )} */}
      </Modal>

      <CommentEditor
        onCreate={createComment(onCreate)}
        accountInfo={accountInfo}
        referUsers={referUsersData}
        mentionList={mentionListData}
        restProps={{ ...store }}
      />

      <br />
      <NoticeBar
        type="lock"
        content="关闭了评论: 已解决"
        timestamp={new Date().toLocaleDateString()}
        user={{ nickname: 'Bot' }}
        isArticleAuthor={false}
      />

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
