import { FC, memo } from 'react'

import type { TAccount } from '@/spec'
import { ICON } from '@/config'

import { SpaceGrow } from '@/components/Common'

import {
  Wrapper,
  ExpandWrapper,
  HintText,
  UserAvatar,
  LeaveResponseText,
  LeaveResponseUsername,
  PenIcon,
} from '../styles/editor/header'

import { openEditor } from '../logic'

type TProps = {
  accountInfo: TAccount
  showEditor: boolean
}

const EditorHeader: FC<TProps> = ({ accountInfo, showEditor }) => {
  if (showEditor) {
    return (
      <ExpandWrapper>
        <HintText>创建评论:</HintText>
        <UserAvatar src={accountInfo.avatar} />
        <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
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
