/*
 *
 * Comments
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import Modal from '@/components/Modal'
import CommentEditor from './CommentEditor'
import CommentsList from './CommentsList'
import CommentReplyEditor from './CommentReplyEditor'
import LockedMessage from './LockedMessage'

import { Wrapper } from './styles'
import { useInit, createComment, onReplyEditorClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Comments')

const CommentsContainer = ({ comments: store, ssr, locked, onCreate }) => {
  useInit(store, ssr, locked)

  const {
    pagedCommentsData,
    referUsersData,
    accountInfo,
    showReplyBox,
    showReplyEditor,
    showReplyPreview,
    mentionListData,
    isEdit,
  } = store

  return (
    <Wrapper>
      <Modal show={showReplyBox} onClose={onReplyEditorClose}>
        {showReplyBox && (
          <CommentReplyEditor
            isEdit={isEdit}
            show={showReplyEditor}
            accountInfo={accountInfo}
            referUsers={referUsersData}
            restProps={{ ...store }}
            mentionList={mentionListData}
            showReplyPreview={showReplyPreview}
          />
        )}
      </Modal>

      {locked ? (
        <LockedMessage />
      ) : (
        <CommentEditor
          onCreate={createComment(onCreate)}
          accountInfo={accountInfo}
          referUsers={referUsersData}
          mentionList={mentionListData}
          restProps={{ ...store }}
        />
      )}

      <CommentsList
        accountInfo={accountInfo}
        pagedComments={pagedCommentsData}
        restProps={{ ...store }}
      />
    </Wrapper>
  )
}

CommentsContainer.propTypes = {
  onCreate: T.func,
  ssr: T.bool,
  comments: T.any.isRequired,
  locked: T.bool,
}

CommentsContainer.defaultProps = {
  onCreate: log,
  ssr: false,
  locked: false,
}

export default connectStore(CommentsContainer)
