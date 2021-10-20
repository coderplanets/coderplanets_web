import { FC, Fragment, memo } from 'react'

import Modal from '@/components/Modal'

import ReplyEditor from './ReplyEditor'
import UpdateEditor from './UpdateEditor'
import PublishEditor from './PublishEditor'

import type { TEditState } from '../spec'
import { closeUpdateEditor, onReplyEditorClose } from '../logic'

type TProps = {
  editState: TEditState
}

const CommentEditor: FC<TProps> = ({ editState }) => {
  const {
    // publish
    commentBody,
    showEditor,
    accountInfo,
    // update
    showUpdateEditor,
    updateId,
    updateBody,
    // reply
    showReplyEditor,
    replyToComment,
    replyBody,
    submitState,
  } = editState

  return (
    <Fragment>
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

      <Modal
        show={showReplyEditor}
        width="680px"
        onClose={onReplyEditorClose}
        showCloseBtn
      >
        {showReplyEditor && (
          <ReplyEditor
            replyTo={replyToComment}
            body={replyBody}
            submitState={submitState}
          />
        )}
      </Modal>

      <PublishEditor
        body={commentBody}
        showEditor={showEditor}
        accountInfo={accountInfo}
        submitState={submitState}
      />
    </Fragment>
  )
}

export default memo(CommentEditor)
