/*
 *
 * UserLister
 *
 */

import React from 'react'

import { TYPE } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import EmptyLabel from '@/widgets/EmptyLabel'
import Modal from '@/widgets/Modal'
import SearchingLabel from '@/widgets/SearchingLabel'

import HeaderInfo from './HeaderInfo'
import UserList from './UserList'

import { Wrapper, MsgWrapper } from './styles'
import { useInit, onClose, onPageChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserLister')

const renderContent = (curView, pagedUsersData, accountInfo) => {
  switch (curView) {
    case TYPE.LOADING:
      return (
        <MsgWrapper>
          <SearchingLabel />
        </MsgWrapper>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <MsgWrapper>
          <EmptyLabel text="没有找到你要找的人呢" />
        </MsgWrapper>
      )

    default:
      return (
        <UserList
          data={pagedUsersData}
          accountInfo={accountInfo}
          onPageChange={onPageChange}
        />
      )
  }
}

const UserListerContainer = ({ userLister: store }) => {
  useInit(store)

  const {
    curView,
    show,
    type,
    brief,
    pagedUsersData,
    accountInfo,
    curCommunity,
  } = store

  return (
    <Modal width="700px" show={show} showCloseBtn onClose={onClose}>
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

export default pluggedIn(UserListerContainer)
