/*
 *
 * Comments
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { Modal } from '../../components'
import CommentEditor from './CommentEditor'
import CommentsList from './CommentsList'
import CommentReplyEditor from './CommentReplyEditor'
import LockedMessage from './LockedMessage'

import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Comments')

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
    } = comments

    return (
      <Wrapper>
        <Modal show={showReplyBox}>
          {/* NOTE: this is used for react-clickouside */}
          {showReplyBox ? (
            <CommentReplyEditor
              accountInfo={accountInfo}
              referUsers={referUsersData}
              restProps={{ ...comments }}
              show={showReplyEditor}
              showReplyPreview={showReplyPreview}
            />
          ) : (
            <div />
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

CommentsContainer.propTypes = {
  onCreate: PropTypes.func,
  ssr: PropTypes.bool,
  comments: PropTypes.any.isRequired,
  locked: PropTypes.bool,
}

CommentsContainer.defaultProps = {
  onCreate: debug,
  ssr: false,
  locked: false,
}

export default inject(storePlug('comments'))(observer(CommentsContainer))
