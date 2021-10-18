import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'
import { ICON, ICON_CMD } from '@/config'

import AvatarsRow from '@/components/AvatarsRow'
import { SpaceGrow } from '@/components/Common'

import {
  Wrapper,
  ExpandWrapper,
  HintText,
  UserAvatar,
  LeaveResponseText,
  LeaveResponseUsername,
  PenIcon,
  RefUsersWrapper,
  RefUserList,
  AtSignIcon,
} from '../styles/editor/header'

import { openEditor } from '../logic'

type TProps = {
  accountInfo: TAccount
  showEditor: boolean
  referUsers: TUser[]
}

const EditorHeader: FC<TProps> = ({ accountInfo, showEditor, referUsers }) => {
  if (showEditor) {
    return (
      <ExpandWrapper>
        <HintText>创建评论:</HintText>
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
      </ExpandWrapper>
    )
  }
  return (
    <Wrapper onClick={openEditor}>
      <UserAvatar src={accountInfo.avatar || `${ICON}/edit/publish-pen.svg`} />
      <LeaveResponseText>参与讨论</LeaveResponseText>
      <SpaceGrow />
      <PenIcon />
    </Wrapper>
  )
}

export default memo(EditorHeader)
