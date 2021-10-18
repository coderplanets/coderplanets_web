import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'
import { ICON_CMD } from '@/config'

import { SpaceGrow } from '@/components/Common'
import AvatarsRow from '@/components/AvatarsRow'

import {
  Wrapper,
  UserAvatar,
  LeaveResponseUsername,
  ReplyAvatars,
  ReferToIcon,
} from './styles/reply_editor_header'

type TProps = {
  accountInfo: TAccount
  referUsers: TUser[]
}

const ReplyEditorHeader: FC<TProps> = ({ accountInfo, referUsers }) => (
  <Wrapper>
    <UserAvatar src={accountInfo.avatar} />
    <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
    {referUsers.length > 0 && (
      <div style={{ display: 'flex' }}>
        <ReferToIcon src={`${ICON_CMD}/refer.svg`} />
        <ReplyAvatars>
          <AvatarsRow users={referUsers} total={referUsers.length} />
        </ReplyAvatars>
      </div>
    )}
    <SpaceGrow />
  </Wrapper>
)

export default memo(ReplyEditorHeader)
