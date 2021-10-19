import { FC, memo } from 'react'

import type { TAccount } from '@/spec'

import {
  Wrapper,
  UserAvatar,
  LeaveResponseUsername,
} from '../styles/editor/reply_header'

type TProps = {
  accountInfo: TAccount
}

const ReplyHeader: FC<TProps> = ({ accountInfo }) => {
  return (
    <Wrapper>
      <UserAvatar src={accountInfo.avatar} />
      <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
    </Wrapper>
  )
}

export default memo(ReplyHeader)
