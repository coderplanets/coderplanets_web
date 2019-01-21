/*
 *
 * UserPublished
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import PagedContents from 'components/PagedContents'
import ThreadSelector from 'components/ThreadSelector'

import { makeDebugger, storePlug } from 'utils'
import { ThreadWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UserPublished')

class UserPublishedContainer extends React.Component {
  componentDidMount() {
    const { userPublished } = this.props
    logic.init(userPublished)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { userPublished } = this.props
    const {
      pagedData,
      curView,
      curThread,
      viewingUser,
      accountInfo,
    } = userPublished

    const { totalCount } = pagedData

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

        <PagedContents
          data={pagedData}
          thread={curThread}
          curView={curView}
          accountInfo={accountInfo}
          emptyPrefix={`未找到 ${viewingUser.nickname} 发布的`}
          onPageChange={logic.reload}
          onPreview={logic.onPreview}
        />
      </React.Fragment>
    )
  }
}

export default inject(storePlug('userPublished'))(
  observer(UserPublishedContainer)
)
