/*
 *
 * UserLister
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Modal from '../../components/Modal'
import SearchingLabel from '../../components/SearchingLabel'
import EmptyLabel from '../../components/EmptyLabel'

import HeaderInfo from './HeaderInfo'
import UserList from './UserList'

import { Wrapper, MsgWrapper } from './styles'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UserLister')

const renderContent = (curView, pagedUsersData, accountInfo) => {
  switch (curView) {
    case TYPE.LOADING: {
      return (
        <MsgWrapper>
          <SearchingLabel />
        </MsgWrapper>
      )
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <MsgWrapper>
          <EmptyLabel text="没有找到你要找的人呢" />
        </MsgWrapper>
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
  componentDidMount() {
    const { userLister } = this.props
    logic.init(userLister)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { userLister } = this.props
    const {
      curView,
      show,
      type,
      brief,
      pagedUsersData,
      accountInfo,
      curCommunity,
    } = userLister

    return (
      <Modal width="700px" show={show} showCloseBtn onClose={logic.onClose}>
        <Wrapper>
          <HeaderInfo
            type={type}
            brief={brief}
            totalCount={pagedUsersData.totalCount}
            curCommunity={curCommunity}
          />

          {renderContent(curView, pagedUsersData, accountInfo)}
        </Wrapper>
      </Modal>
    )
  }
}

export default inject(storePlug('userLister'))(observer(UserListerContainer))
