import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'
import { ICON, ICON_CMD } from '@/config'

import AvatarsRow from '@/components/AvatarsRow'
import { SpaceGrow } from '@/components/Common'

import {
  Wrapper,
  ExpandWrapper,
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
  referUsers: TUser[]
}

const EditorHeader: FC<TProps> = ({
  accountInfo,
  showInputEditor,
  referUsers,
}) => {
  if (showInputEditor) {
    return (
      <ExpandWrapper>
        <UserAvatar src={accountInfo.avatar} />
        <LeaveResponseUsername>{accountInfo.nickname}:</LeaveResponseUsername>
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
      </ExpandWrapper>
    )
  }
  return (
    <Wrapper>
      <UserAvatar src={accountInfo.avatar || `${ICON}/edit/publish-pen.svg`} />
      <LeaveResponseText onClick={openInputBox}>参与讨论</LeaveResponseText>
    </Wrapper>
  )
}

export default memo(EditorHeader)
