/*
 *
 * UserLister
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Modal, SearchingLabel } from '../../components'
import { Wrapper, SearchingWrapper } from './styles'

import { makeDebugger, storePlug, TYPE } from '../../utils'

import HeaderInfo from './HeaderInfo'
import UserList from './UserList'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UserLister')
/* eslint-enable no-unused-vars */

const renderContent = (curView, pagedUsersData, accountInfo) => {
  switch (curView) {
    case TYPE.LOADING: {
      return (
        <SearchingWrapper>
          <SearchingLabel />
        </SearchingWrapper>
      )
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <SearchingWrapper>
          <SearchingLabel text="empty" />
        </SearchingWrapper>
      )
    }
    default: {
      return (
        <UserList
          data={pagedUsersData}
          accountInfo={accountInfo}
          onPageChange={logic.onPageChange}
        />
      )
    }
  }
}

class UserListerContainer extends React.Component {
  componentWillMount() {
    const { userLister } = this.props
    logic.init(userLister)
  }

  render() {
    const { userLister } = this.props
    const { curView, show, type, pagedUsersData, accountInfo } = userLister

    return (
      <Modal width="700px" show={show} showCloseBtn onClose={logic.onClose}>
        <Wrapper>
          <HeaderInfo type={type} totalCount={pagedUsersData.totalCount} />

          {renderContent(curView, pagedUsersData, accountInfo)}
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('userLister'))(observer(UserListerContainer))
