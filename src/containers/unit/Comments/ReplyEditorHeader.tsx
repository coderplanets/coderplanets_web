import React, { FC } from 'react'

import type { TAccount, TUser } from '@/spec'
import { ICON_CMD } from '@/config'

import { SpaceGrow } from '@/components/Common'
import AvatarsRow from '@/components/AvatarsRow'

import WordsCounter from './WordsCounter'

import {
  Wrapper,
  UserAvatar,
  LeaveResponseUsername,
  ReplyAvatars,
  ReferToIcon,
} from './styles/reply_editor_header'

type TProps = {
  accountInfo: TAccount
  countCurrent: number
  referUsers: TUser[]
  showPreview: boolean
}

const ReplyEditorHeader: FC<TProps> = ({
  accountInfo,
  countCurrent,
  referUsers,
  showPreview,
}) => (
  <Wrapper>
    <UserAvatar src={accountInfo.avatar} />
    <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
    {referUsers.length > 0 ? (
      <div style={{ display: 'flex' }}>
        <ReferToIcon src={`${ICON_CMD}/refer.svg`} />
        <ReplyAvatars>
          <AvatarsRow users={referUsers} total={referUsers.length} />
        </ReplyAvatars>
      </div>
    ) : (
      <div />
    )}
    <SpaceGrow />
    {showPreview ? <div /> : <WordsCounter countCurrent={countCurrent} />}
  </Wrapper>
)

export default React.memo(ReplyEditorHeader)
