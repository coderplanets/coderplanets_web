/*
 *
 * Comments
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
/* import { Modal } from 'antd' */

import { makeDebugger, storeSelector } from '../../utils'
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
    logic.init(this.props.comments)
  }

  render() {
    const {
      /* entries, */
      entriesData,
      /* data, */
      referUsersData,
      accountInfo,
      showReplyBox,
      showReplyEditor,
      showReplyPreview,
    } = this.props.comments

    /* console.log('the fucking accountInfo --> ', accountInfo) */
    // TODO: use styledModal

    return (
      <Wrapper>
        <Modal show={showReplyBox}>
          {/* NOTE: this is used for react-clickouside */}
          {showReplyBox ? (
            <CommentReplyer
              referUsers={referUsersData}
              restProps={{ ...this.props.comments }}
              show={showReplyEditor}
              showReplyPreview={showReplyPreview}
            />
          ) : (
            <div />
          )}
        </Modal>

        <CommentEditor
          referUsers={referUsersData}
          restProps={{ ...this.props.comments }}
        />
        <CommentsList
          accountInfo={accountInfo}
          entries={entriesData}
          restProps={{ ...this.props.comments }}
        />
      </Wrapper>
    )
  }
}

// CommentsContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// }

// CommentsContainer.defaultProps = {}

export default inject(storeSelector('comments'))(observer(CommentsContainer))
