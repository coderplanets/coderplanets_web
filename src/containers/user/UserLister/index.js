/*
 *
 * UserLister
 *
 */

import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { TYPE } from '@constant'
import { connectStore, buildLog } from '@utils'

import EmptyLabel from '@components/EmptyLabel'
import Modal from '@components/Modal'
import SearchingLabel from '@components/SearchingLabel'

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

const UserListerContainer = ({ userLister }) => {
  useInit(userLister)

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
    <Modal width="700px" show={show} showCloseBtn onClose={onClose}>
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'scroll', autoHideDelay: 200 } }}
      >
        <Wrapper>
          <HeaderInfo
            type={type}
            brief={brief}
            totalCount={pagedUsersData.totalCount}
            curCommunity={curCommunity}
          />

          {renderContent(curView, pagedUsersData, accountInfo)}
        </Wrapper>
      </OverlayScrollbarsComponent>
    </Modal>
  )
}

export default connectStore(UserListerContainer)
