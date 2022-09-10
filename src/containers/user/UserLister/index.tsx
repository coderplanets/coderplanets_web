/*
 *
 * UserLister
 *
 */

import { FC } from 'react'

import { TYPE } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import EmptyLabel from '@/widgets/EmptyLabel'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import type { TStore } from './store'
import HeaderInfo from './HeaderInfo'
import List from './List'

import { Wrapper, MsgWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UserLister')

const renderContent = (type, curView, pagedUsersData) => {
  switch (curView) {
    case TYPE.LOADING:
      return (
        <MsgWrapper>
          <LavaLampLoading />
        </MsgWrapper>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <MsgWrapper>
          <EmptyLabel text="没有找到你要找的人呢" />
        </MsgWrapper>
      )

    default:
      return <List type={type} data={pagedUsersData} />
  }
}

type TProps = {
  userLister?: TStore
  type: string
}

const UserListerContainer: FC<TProps> = ({ userLister: store, type }) => {
  useInit(store, type)

  const { curView, pagedUsersData, curCommunity } = store

  return (
    <Wrapper>
      <HeaderInfo
        type={type}
        totalCount={pagedUsersData.totalCount}
        curCommunity={curCommunity}
      />

      {renderContent(type, curView, pagedUsersData)}
    </Wrapper>
  )
}

export default bond(UserListerContainer, 'userLister') as FC<TProps>
