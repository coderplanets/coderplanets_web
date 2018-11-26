import React from 'react'

import { ICON_CMD } from '../../config'
import { AvatarsRow, SpaceGrow } from '../../components'
import WordsCounter from './WordsCounter'

import {
  Wrapper,
  UserAvatar,
  LeaveResponseText,
  LeaveResponseUsername,
  ReplyAvatars,
  ReferToIcon,
} from './styles/editor_header'

import { openInputBox } from './logic'
// import { Wrapper } from './styles'

const DEFAULT_USER_ICON = `${ICON_CMD}/alien_user3.svg`

const EditorHeader = ({
  accountInfo,
  showInputEditor,
  showInputPreview,
  countCurrent,
  referUsers,
}) => {
  if (showInputEditor) {
    return (
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
        ) : null}
        <SpaceGrow />
        <WordsCounter countCurrent={countCurrent} />
      </Wrapper>
    )
  }
  if (showInputPreview) {
    return (
      <Wrapper>
        <UserAvatar src={accountInfo.avatar} />
        <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <UserAvatar src={accountInfo.avatar || DEFAULT_USER_ICON} />
      <LeaveResponseText onClick={openInputBox}>
        来都来了, 留条评论吧...
      </LeaveResponseText>
    </Wrapper>
  )
}

export default EditorHeader
