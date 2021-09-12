/*
 *
 * CommentSticker
 *
 */

import { FC, memo, useEffect } from 'react'

import type { TArticle, TPagedUsers } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import NotifyButton from '@/components/Buttons/NotifyButton'
import Tooltip from '@/components/Tooltip'
import ImgFallback from '@/components/ImgFallback'
import UserCard from '@/components/Cards/UserCard'

import {
  Wrapper,
  Title,
  JoinCount,
  UsersWrapper,
  Avatar,
  MoreUserWrapper,
  MoreIcon,
  Divider,
} from './styles/comment_sticker'
import { loadPagedCommentsParticipants } from './logic'

/* eslint-disable-next-line */
const log = buildLog('c:CommentSticker:index')

type TProps = {
  show: boolean
  participants: TPagedUsers
}

const CommentSticker: FC<TProps> = ({ show, participants }) => {
  useEffect(() => {
    if (show) loadPagedCommentsParticipants()
  }, [show])

  return (
    <Wrapper show={show}>
      <Title>
        共<JoinCount>{participants.totalCount}</JoinCount>
        人参与讨论
      </Title>
      {participants.totalCount !== 0 && (
        <UsersWrapper>
          {participants.entries.map((user) => (
            <Tooltip
              key={user.login}
              placement="bottom"
              content={<UserCard item={user} />}
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

          {participants.pageNumber > 1 && (
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
