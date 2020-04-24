import React from 'react'

import { ICON_CMD } from '@config'

import { SpaceGrow } from '@components/Common'
import AvatarsRow from '@components/AvatarsRow'

import WordsCounter from './WordsCounter'

import {
  Wrapper,
  UserAvatar,
  LeaveResponseUsername,
  ReplyAvatars,
  ReferToIcon,
} from './styles/reply_editor_header'

const ReplyEditorHeader = ({
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
          <AvatarsRow
            users={referUsers}
            total={referUsers.length}
            height="20px"
          />
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
