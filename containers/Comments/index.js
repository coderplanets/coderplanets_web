/*
 *
 * Comments
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { connectStore, makelogger } from '@utils'

import Modal from '@components/Modal'
import CommentEditor from './CommentEditor'
import CommentsList from './CommentsList'
import CommentReplyEditor from './CommentReplyEditor'
import LockedMessage from './LockedMessage'

import { Wrapper } from './styles'
import { useInit, createComment, onReplyEditorClose } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:Comments')

const CommentsContainer = ({ comments, ssr, locked, onCreate }) => {
  useInit(comments, ssr, locked)

  const {
    pagedCommentsData,
    referUsersData,
    accountInfo,
    showReplyBox,
    showReplyEditor,
    showReplyPreview,
    mentionListData,
    isEdit,
  } = comments

  return (
    <Wrapper>
      <Modal show={showReplyBox} onClose={onReplyEditorClose}>
        {showReplyBox && (
          <CommentReplyEditor
            isEdit={isEdit}
            show={showReplyEditor}
            accountInfo={accountInfo}
            referUsers={referUsersData}
            restProps={{ ...comments }}
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
          restProps={{ ...comments }}
        />
      )}

      <CommentsList
        accountInfo={accountInfo}
        pagedComments={pagedCommentsData}
        restProps={{ ...comments }}
      />
    </Wrapper>
  )
}

/*
class CommentsContainer extends React.Component {
  // need constructor here for draft.js issue
  constructor(props) {
    super(props)
    const { comments, ssr } = props
    logic.init(comments, ssr)
  }

  componentDidMount() {
    const { comments } = this.props
    logic.init(comments, false)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  onCreate() {
    const { onCreate } = this.props
    logic.createComment()
    onCreate()
  }

  render() {
    const { comments, locked } = this.props
    const {
      pagedCommentsData,
      referUsersData,
      accountInfo,
      showReplyBox,
      showReplyEditor,
      showReplyPreview,
      mentionListData,
      isEdit,
    } = comments

    return (
      <Wrapper>
        <Modal show={showReplyBox} onClose={logic.onReplyEditorClose}>
          {showReplyBox && (
            <CommentReplyEditor
              isEdit={isEdit}
              show={showReplyEditor}
              accountInfo={accountInfo}
              referUsers={referUsersData}
              restProps={{ ...comments }}
              mentionList={mentionListData}
              showReplyPreview={showReplyPreview}
            />
          )}
        </Modal>

        {locked ? (
          <LockedMessage />
        ) : (
          <CommentEditor
            onCreate={this.onCreate.bind(this)}
            accountInfo={accountInfo}
            referUsers={referUsersData}
            mentionList={mentionListData}
            restProps={{ ...comments }}
          />
        )}

        <CommentsList
          accountInfo={accountInfo}
          pagedComments={pagedCommentsData}
          restProps={{ ...comments }}
        />
      </Wrapper>
    )
  }
}
*/

CommentsContainer.propTypes = {
  onCreate: PropTypes.func,
  ssr: PropTypes.bool,
  comments: PropTypes.any.isRequired,
  locked: PropTypes.bool,
}

CommentsContainer.defaultProps = {
  onCreate: log,
  ssr: false,
  locked: false,
}

export default connectStore(CommentsContainer)
