/*
 *
 * UserBrief
 *
 */
import { FC, memo, Fragment } from 'react'

import type { TUser, TPagedWorks, TPagedCommunities } from '@/spec'
import { EVENT, TYPE } from '@/constant'

import { buildLog } from '@/utils/logger'
import { send } from '@/utils/helper'
import { Br, SpaceGrow } from '@/widgets/Common'

import ExtraInfo from './ExtraInfo'
import Operators from './Operators'
import WorksBadge from './WorksBadge'
import VolunteersBadge from './VolunteersBadge'
import Footer from './Footer'
import Avatar from './Avatar'

import { Wrapper, UserTitle, WomanIcon, ShortBio, Bio, Divider } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:UserBrief')

type TProps = {
  user: TUser
  works: TPagedWorks
  editableCommunities: TPagedCommunities
}

const UserBrief: FC<TProps> = ({ user, works, editableCommunities }) => {
  return (
    <Wrapper>
      <Avatar user={user} />
      <Br top={35} />
      <UserTitle>
        <div>{user.nickname}</div>
        {user.sex === 'girl' && <WomanIcon />}
        <SpaceGrow />
        <Operators
          passport="owner"
          ownerId={user.id}
          onEdit={() => {
            send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.ACCOUNT_EDIT })
          }}
        />
      </UserTitle>
      <ShortBio>{user.shortbio}</ShortBio>
      <Br top={15} />
      <Bio>{user.bio}</Bio>
      <Divider top={25} />
      <ExtraInfo user={user} />
      {works.totalCount !== 0 && (
        <Fragment>
          <Divider bottom={15} />
          <WorksBadge works={works} />
        </Fragment>
      )}
      <Divider bottom={30} />
      {editableCommunities.totalCount > 0 && (
        <Fragment>
          <VolunteersBadge communities={editableCommunities} />
          <Divider bottom={30} />
        </Fragment>
      )}
      <Footer user={user} />
    </Wrapper>
  )
}

export default memo(UserBrief)
