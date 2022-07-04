import { FC, memo } from 'react'

import { EVENT, THREAD } from '@/constant'
import { send } from '@/utils/helper'

import {
  Wrapper,
  Avatar,
  NotifyIcon,
  DashboardIcon,
  SubscribeButton,
} from '../styles/classic_layout/account_unit'
import { mockUsers } from '@/utils/mock'
// import { onShowEditorList, onShowSubscriberList, setViewport } from '../logic'

const AccountUnit: FC = () => {
  // return <Wrapper>登入 / 注册</Wrapper>
  return (
    <Wrapper>
      <SubscribeButton type="primary" ghost size="small">
        订阅
      </SubscribeButton>

      <DashboardIcon
        onClick={() =>
          send(EVENT.COMMUNITY_THREAD_CHANGE, { data: THREAD.DASHBOARD })
        }
      />

      <NotifyIcon />
      <Avatar src={`${mockUsers(1)[0].avatar}`} />
    </Wrapper>
  )
}

export default memo(AccountUnit)
