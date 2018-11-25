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
import CommentReplyer from './CommentReplyer'

import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Comments')
/* eslint-enable no-unused-vars */

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props)

    const { comments, ssr } = props
    logic.init(comments, ssr)
  }

  onCreate() {
    const { onCreate } = this.props
    logic.createComment()
    onCreate()
  }

  render() {
    const { comments } = this.props
    const {
      pagedCommentsData,
      referUsersData,
      accountInfo,
      showReplyBox,
      showReplyEditor,
      showReplyPreview,
    } = comments

    return (
      <Wrapper>
        <Modal show={showReplyBox}>
          {/* NOTE: this is used for react-clickouside */}
          {showReplyBox ? (
            <CommentReplyer
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

        <CommentEditor
          onCreate={this.onCreate.bind(this)}
          accountInfo={accountInfo}
          referUsers={referUsersData}
          restProps={{ ...comments }}
        />
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
}

CommentsContainer.defaultProps = {
  onCreate: debug,
  ssr: false,
}

export default inject(storePlug('comments'))(observer(CommentsContainer))
