import { FC, memo } from 'react'

import {
  Wrapper,
  Avatar,
  NotifyIcon,
  SubscribeButton,
  // SearchIcon,
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

      <NotifyIcon />
      <Avatar src={`${mockUsers(1)[0].avatar}`} />
    </Wrapper>
  )
}

export default memo(AccountUnit)
