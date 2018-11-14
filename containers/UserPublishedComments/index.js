/*
 *
 * UserPublishedComments
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ThreadSelector } from '../../components'
import { ThreadWrapper } from './styles'

import CommentsToContent from './CommentsToContent'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserPublishedComments')
/* eslint-enable no-unused-vars */

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
          onTitleSelect={logic.onTitleSelect}
        />
      </div>
    )
  }
}

export default inject(storePlug('userPublishedComments'))(
  observer(UserPublishedCommentsContainer)
)
