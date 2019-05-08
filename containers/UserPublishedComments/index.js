/*
 *
 * UserPublishedComments
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import ThreadSelector from '@components/ThreadSelector'
import { makeDebugger, storePlug } from '@utils'
import CommentsToContent from './CommentsToContent'

import { ThreadWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UserPublishedComments')

class UserPublishedCommentsContainer extends React.Component {
  constructor(props) {
    super(props)

    const { userPublishedComments } = props
    logic.init(userPublishedComments)
  }

  render() {
    const { userPublishedComments } = this.props
    const { curThread, curView, pagedCommentsData } = userPublishedComments

    const { totalCount } = pagedCommentsData
    // debug('pagedCommentsData-->: ', pagedCommentsData)

    return (
      <div>
        <ThreadWrapper>
          <ThreadSelector
            active={curThread}
            onSelect={logic.onThreadChange}
            totalCount={totalCount}
            lookLike="box"
          />
        </ThreadWrapper>
        <CommentsToContent
          thread={curThread}
          curView={curView}
          data={pagedCommentsData}
        />
      </div>
    )
  }
}

export default inject(storePlug('userPublishedComments'))(
  observer(UserPublishedCommentsContainer)
)
