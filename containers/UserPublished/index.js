/*
 *
 * UserPublished
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ThreadSelector, Pagi } from '../../components'

import { ThreadWrapper } from './styles'
import PublishedContents from './PublishedContents'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserPublished')
/* eslint-enable no-unused-vars */

class UserPublishedContainer extends React.Component {
  componentWillMount() {
    const { userPublished } = this.props
    logic.init(userPublished)
  }

  render() {
    const { userPublished } = this.props
    const { pagedData, curView, curThread } = userPublished

    const { entries, totalCount, pageNumber, pageSize } = pagedData

    return (
      <React.Fragment>
        <ThreadWrapper>
          <ThreadSelector
            active={curThread}
            onSelect={logic.onThreadChange}
            totalCount={totalCount}
            lookLike="box"
          />
        </ThreadWrapper>

        <PublishedContents
          entries={entries}
          curView={curView}
          thread={curThread}
        />

        <Pagi
          left="-20px"
          pageNumber={pageNumber}
          pageSize={pageSize}
          totalCount={totalCount}
          onChange={logic.reload}
        />
      </React.Fragment>
    )
  }
}

export default inject(storePlug('userPublished'))(
  observer(UserPublishedContainer)
)
