/*
 *
 * UserStared
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ThreadWrapper } from './styles'
import { ThreadSelector, PagedContents } from '../../components'
import { makeDebugger, storePlug, THREAD } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserStared')
/* eslint-enable no-unused-vars */

class UserStaredContainer extends React.Component {
  constructor(props) {
    super(props)

    const { userStared } = props
    logic.init(userStared)
  }

  render() {
    const { userStared } = this.props
    const { pagedData, curView, curThread, viewingUser } = userStared

    const { totalCount } = pagedData

    return (
      <React.Fragment>
        <ThreadWrapper>
          <ThreadSelector
            active={curThread}
            onSelect={logic.onThreadChange}
            totalCount={totalCount}
            lookLike="box"
            options={[THREAD.POST, THREAD.JOB, THREAD.VIDEO]}
          />
        </ThreadWrapper>

        <PagedContents
          data={pagedData}
          thread={curThread}
          curView={curView}
          emptyPrefix={`未找到 ${viewingUser.nickname} 喜欢的`}
          onPageChange={logic.reload}
          onTitleSelect={logic.onTitleSelect}
        />
      </React.Fragment>
    )
  }
}

export default inject(storePlug('userStared'))(observer(UserStaredContainer))
