/*
 *
 * Comments
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

import { Modal } from '../../components'
import CommentEditor from './CommentEditor'
import CommentsList from './CommentsList'
import CommentReplyer from './CommentReplyer'

import { Wrapper } from './styles'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Comments')
/* eslint-enable no-unused-vars */

class CommentsContainer extends React.Component {
  componentWillMount() {
    const { comments } = this.props
    logic.init(comments)
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

// CommentsContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// }

// CommentsContainer.defaultProps = {}

export default inject(storePlug('comments'))(observer(CommentsContainer))
