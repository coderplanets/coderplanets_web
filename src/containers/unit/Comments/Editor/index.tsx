import { FC, Fragment, memo } from 'react'

import Modal from '@/widgets/Modal'

import ReplyEditor from './ReplyEditor'
import UpdateEditor from './UpdateEditor'

import type { TEditState } from '../spec'
import { closeUpdateEditor, onReplyEditorClose } from '../logic'

type TProps = {
  editState: TEditState
}

const CommentEditor: FC<TProps> = ({ editState }) => {
  const {
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
    </Fragment>
  )
}

export default memo(CommentEditor)
