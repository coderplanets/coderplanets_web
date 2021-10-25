/*
 *
 * UserBrief
 *
 */
import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'

import { buildLog } from '@/utils/logger'
import { Br } from '@/widgets/Common'

import SocialIcons from './SocialIcons'
import ExtraInfo from './ExtraInfo'
import Operators from './Operators'
import NumbersPad from './NumbersPad'
import CommunityEditorInfo from './CommunityEditorInfo'

import Avatar from './Avatar'

import {
  Wrapper,
  BriefTextWrapper,
  UserTitle,
  Bio,
  UserDesc,
  Divider,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:UserBrief')

const UserBrief = ({ user, view, onEdit, onLogout, viewingType }) => {
  return (
    <Wrapper>
      <Avatar user={user} view={view} />
      <BriefTextWrapper view={view}>
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
        <Bio>{user.bio}</Bio>
        <Br top={30} />
        <NumbersPad
          user={user}
          listFollowers={() => console.log('TODO: listFollowers')}
          listFollowings={() => console.log('TODO: listFollowings')}
        />
        <Br top={30} />
        <ExtraInfo user={user} />

        {user.editableCommunities.length > 0 && <Divider />}
        <CommunityEditorInfo user={user} />
        <Divider />
        <UserDesc>
          <SocialIcons user={user} />
        </UserDesc>
      </BriefTextWrapper>
    </Wrapper>
  )
}

UserBrief.propTypes = {
  user: T.object.isRequired,
  view: T.oneOf([VIEW.DESKTOP, VIEW.DRAWER]),
  viewingType: T.oneOf(['account', 'user']),
  onEdit: T.func,
  onLogout: T.func,
}

UserBrief.defaultProps = {
  view: VIEW.DESKTOP,
  viewingType: 'user',
  onEdit: log,
  onLogout: log,
}

export default React.memo(UserBrief)
