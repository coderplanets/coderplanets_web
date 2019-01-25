import React from 'react'

import { ICON_CMD, DEFAULT_USER_AVATAR } from 'config'

import AvatarsRow from 'components/AvatarsRow'
import { SpaceGrow } from 'components/BaseStyled'

import WordsCounter from './WordsCounter'

import {
  Wrapper,
  UserAvatar,
  LeaveResponseText,
  LeaveResponseUsername,
  RefUsersWrapper,
  RefUserList,
  AtSignIcon,
} from './styles/editor_header'

import { openInputBox } from './logic'
// import { Wrapper } from './styles'

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
        {referUsers.length > 0 && (
          <RefUsersWrapper>
            <AtSignIcon src={`${ICON_CMD}/typewriter_mention.svg`} />
            <RefUserList>
              <AvatarsRow
                users={referUsers}
                total={referUsers.length}
                height="20px"
                limit={10}
                reverse={false}
              />
            </RefUserList>
          </RefUsersWrapper>
        )}
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
      <UserAvatar src={accountInfo.avatar || DEFAULT_USER_AVATAR} />
      <LeaveResponseText onClick={openInputBox}>
        来都来了, 说点什么吧 ...
      </LeaveResponseText>
    </Wrapper>
  )
}

export default EditorHeader
