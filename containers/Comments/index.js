/*
 *
 * Comments
 *
 */

import React from 'react'
// import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

import { Wrapper } from './styles'

import CommentEditor from './CommentEditor'
import CommentsList from './CommentsList'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Comments')
/* eslint-enable no-unused-vars */

class CommentsContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.comments)
  }

  render() {
    const { showInputEditor } = this.props.comments
    debug('showInputEditor', showInputEditor)
    return (
      <Wrapper>
        <CommentEditor
          onInput={logic.onCommentInput}
          showInputEditor={showInputEditor}
        />
        <CommentsList />
      </Wrapper>
    )
  }
}

// CommentsContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// }

// CommentsContainer.defaultProps = {}

export default inject(storeSelector('comments'))(observer(CommentsContainer))
