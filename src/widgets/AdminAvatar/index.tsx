/*
 *
 * AdminAvatar
 *
 */

import { FC, memo } from 'react'

import type { TUser, TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'

import { Wrapper, Avatar, BadgeWrapper, BadgeIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:AdminAvatar:index')

type TProps = {
  testid?: string
  user: TUser
} & TSpace

const AdminAvatar: FC<TProps> = ({
  testid = 'admin-avatar',
  user,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} {...restProps}>
      <Avatar src={user.avatar} />
      <BadgeWrapper>
        <BadgeIcon />
      </BadgeWrapper>
    </Wrapper>
  )
}

export default memo(AdminAvatar)
