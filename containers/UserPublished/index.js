/*
 *
 * UserPublished
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ThreadSelector, PagedContents } from '../../components'
import { ThreadWrapper } from './styles'
import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserPublished')
/* eslint-enable no-unused-vars */

class UserPublishedContainer extends React.Component {
  constructor(props) {
    super(props)
    const { userPublished } = props
    logic.init(userPublished)
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
          onTitleSelect={logic.onTitleSelect}
        />
      </React.Fragment>
    )
  }
}

export default inject(storePlug('userPublished'))(
  observer(UserPublishedContainer)
)
