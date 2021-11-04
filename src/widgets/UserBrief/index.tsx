/*
 *
 * UserBrief
 *
 */
import { FC, memo } from 'react'

import type { TUser, TView } from '@/spec'
import { VIEW } from '@/constant'

import { buildLog } from '@/utils/logger'
import { Br } from '@/widgets/Common'

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
  viewingType?: 'account' | 'user'
  onEdit?: () => void
  onLogout?: () => void
}

const UserBrief: FC<TProps> = ({
  user,
  view = VIEW.DESKTOP,
  onEdit = log,
  onLogout = log,
  viewingType = 'user',
}) => {
  return (
    <Wrapper>
      <Avatar user={user} view={view} />
      <BriefTextWrapper>
        <UserTitle>
          {user.nickname}
          {viewingType === 'account' && (
            <Operators
              passport="owner"
              ownerId={user.id}
              onEdit={onEdit}
              onLogout={onLogout}
            />
          )}
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
