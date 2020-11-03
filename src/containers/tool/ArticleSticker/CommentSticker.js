/*
 *
 * CommentSticker
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { NotifyButton } from '@/components/Buttons'
import Tooltip from '@/components/Tooltip'
import AvatarFallback from '@/components/AvatarFallback'

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

const CommentSticker = ({
  show,
  data: { pagedCommentsParticipators: users },
}) => {
  return (
    <Wrapper show={show}>
      <Title>
        共<JoinCount>{users.totalCount}</JoinCount>人参与
      </Title>
      {users.totalCount !== 0 && (
        <UsersWrapper>
          {users.entries.slice(0, 10).map((user) => (
            <Tooltip
              key={user.id}
              placement="bottom"
              content={<PopInfo>{user.nickname}</PopInfo>}
            >
              <Avatar
                src={user.avatar}
                alt={`@${user.nickname}`}
                fallback={
                  <AvatarFallback
                    width={20}
                    title={`${user.nickname}`}
                    right="10px"
                    bottom="6px"
                  />
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

CommentSticker.propTypes = {
  show: T.bool.isRequired,
  data: T.shape({
    communities: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        logo: T.string,
        raw: T.string,
      }),
    ),
    pagedCommentsParticipators: T.shape({
      entries: T.array,
      totalCount: T.number,
    }),
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        color: T.string,
        raw: T.string,
      }),
    ),
  }),
}

CommentSticker.defaultProps = {
  data: {
    communities: [],
    tags: [],
    pagedCommentsParticipators: {
      entries: [],
      totalCount: 0,
    },
  },
}

export default React.memo(CommentSticker)
