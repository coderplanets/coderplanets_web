/*
 *
 * CommentSticker
 *
 */

import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import NotifyButton from '@/components/Buttons/NotifyButton'
import Tooltip from '@/components/Tooltip'
import ImgFallback from '@/components/ImgFallback'

import {
  Wrapper,
  Title,
  JoinCount,
  UsersWrapper,
  PopInfo,
  Avatar,
  MoreUserWrapper,
  MoreIcon,
  Divider,
} from './styles/comment_sticker'

/* eslint-disable-next-line */
const log = buildLog('c:CommentSticker:index')

type TProps = {
  show: boolean
  data?: TArticle
}

const CommentSticker: FC<TProps> = ({
  show,
  data: { commentsParticipantsCount, commentsParticipants: users },
}) => {
  // TODO: use pagedParticipants query
  return (
    <Wrapper show={show}>
      <Title>
        共<JoinCount>{commentsParticipantsCount}</JoinCount>人参与讨论
      </Title>
      {users.length !== 0 && (
        <UsersWrapper>
          {users.map((user) => (
            <Tooltip
              key={user.id}
              placement="bottom"
              content={<PopInfo>{user.nickname}</PopInfo>}
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
          <MoreUserWrapper>
            <MoreIcon src={`${ICON}/shape/more.svg`} />
          </MoreUserWrapper>
        </UsersWrapper>
      )}
      <Divider />
      <NotifyButton />
    </Wrapper>
  )
}

export default memo(CommentSticker)
