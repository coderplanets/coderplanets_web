/*
 *
 * CommentSticker
 *
 */

import { FC, memo } from 'react'

import type { TCommentsState } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import NotifyButton from '@/widgets/Buttons/NotifyButton'
import Tooltip from '@/widgets/Tooltip'
import ImgFallback from '@/widgets/ImgFallback'
import UserCard from '@/widgets/Cards/UserCard'

import {
  Wrapper,
  Title,
  TotalNum,
  UsersWrapper,
  Avatar,
  MoreUserWrapper,
  MoreIcon,
  Divider,
} from './styles/comment_sticker'

/* eslint-disable-next-line */
const log = buildLog('w:CommentSticker:index')

type TProps = {
  show: boolean
  commentsState: TCommentsState
}

const CommentSticker: FC<TProps> = ({ show, commentsState }) => {
  const { participants, participantsCount, isViewerJoined } = commentsState
  return (
    <Wrapper show={show}>
      <Title>
        共<TotalNum highlight={isViewerJoined}>{participantsCount}</TotalNum>
        人参与讨论
      </Title>
      {participantsCount !== 0 && (
        <UsersWrapper>
          {participants.map((user) => (
            <Tooltip
              key={user.login}
              placement="bottom"
              content={<UserCard user={user} />}
            >
              <Avatar
                src={user.avatar}
                alt={`@${user.nickname}`}
                fallback={
                  <ImgFallback user={user} size={20} right={10} bottom={6} />
                }
              />
            </Tooltip>
          ))}

          {participants.length > participantsCount && (
            <MoreUserWrapper>
              <MoreIcon src={`${ICON}/shape/more.svg`} />
            </MoreUserWrapper>
          )}
        </UsersWrapper>
      )}
      <Divider />
      <NotifyButton />
    </Wrapper>
  )
}

export default memo(CommentSticker)
