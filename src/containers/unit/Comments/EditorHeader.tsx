import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'
import { ICON, ICON_CMD } from '@/config'

import AvatarsRow from '@/components/AvatarsRow'
import { SpaceGrow } from '@/components/Common'

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

type TProps = {
  accountInfo: TAccount
  showInputEditor: boolean
  showInputPreview: boolean
  countCurrent: number
  referUsers: TUser[]
}

const EditorHeader: FC<TProps> = ({
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
      <UserAvatar src={accountInfo.avatar || `${ICON}/edit/publish-pen.svg`} />
      <LeaveResponseText onClick={openInputBox}>发表看法</LeaveResponseText>
    </Wrapper>
  )
}

export default memo(EditorHeader)
