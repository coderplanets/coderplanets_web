/*
 *
 * UserBrief
 *
 */
import { FC, memo } from 'react'

import type { TUser, TView } from '@/spec'
import { VIEW, EVENT, TYPE } from '@/constant'

import { buildLog } from '@/utils/logger'
import { send } from '@/utils/helper'
import { Br, SpaceGrow } from '@/widgets/Common'

// import SocialIcons from './SocialIcons'
import ExtraInfo from './ExtraInfo'
import Operators from './Operators'
import Footer from './Footer'
// import CommunityEditorInfo from './CommunityEditorInfo'

import Avatar from './Avatar'

import {
  Wrapper,
  BriefTextWrapper,
  UserTitle,
  WomanIcon,
  ShortBio,
  Bio,
  // UserDesc,
  Divider,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:UserBrief')

type TProps = {
  user: TUser
  view?: TView
}

const UserBrief: FC<TProps> = ({ user, view = VIEW.DESKTOP }) => {
  return (
    <Wrapper>
      <Avatar user={user} />
      <BriefTextWrapper>
        <UserTitle>
          <div>{user.nickname}</div>
          <WomanIcon />
          <SpaceGrow />
          <Operators
            passport="owner"
            ownerId={user.id}
            onEdit={() => {
              send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.ACCOUNT_EDIT })
            }}
          />
        </UserTitle>
        <ShortBio>开发者@coderplanets</ShortBio>
        <Br top={15} />
        <Bio>{user.bio}</Bio>
        <Br top={30} />
        <Divider />
        <ExtraInfo user={user} />

        {/* {user.editableCommunities.length > 0 && <Divider />} */}
        {/* <CommunityEditorInfo user={user} /> */}
        <Divider />
        <Footer user={user} />
      </BriefTextWrapper>
    </Wrapper>
  )
}

export default memo(UserBrief)
