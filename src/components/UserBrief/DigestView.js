import React from 'react'
import { either, isNil, isEmpty } from 'ramda'

import { ICON_CMD } from '@/config'

import {
  UserDesc,
  DescIconLabel,
  DetailToggleLabel,
  ToggleText,
} from './styles'

import BackgroundList from './BackgroundList'

const emptyBacgrounds = either(isNil, isEmpty)

const DigestView = ({ user, toggleDetail }) => (
  <React.Fragment>
    <UserDesc>
      <DescIconLabel src={`${ICON_CMD}/profile_bio.svg`} />{' '}
      <div>{user.bio}</div>
    </UserDesc>
    <UserDesc>
      <DescIconLabel src={`${ICON_CMD}/profile_location.svg`} />{' '}
      <div>{user.location}</div>
    </UserDesc>
    <UserDesc hide={emptyBacgrounds(user.workBackgrounds)}>
      <DescIconLabel src={`${ICON_CMD}/profile_company.svg`} />{' '}
      <BackgroundList type="work" user={user} first />
    </UserDesc>
    <UserDesc hide={emptyBacgrounds(user.educationBackgrounds)}>
      <DescIconLabel src={`${ICON_CMD}/profile_education.svg`} />{' '}
      <BackgroundList type="education" user={user} first />
    </UserDesc>
    <UserDesc onClick={toggleDetail.bind(this)} clickable>
      <DetailToggleLabel src={`${ICON_CMD}/profile_arrow.svg`} reverse />
      <ToggleText>查看详细资料</ToggleText>
    </UserDesc>
  </React.Fragment>
)

export default React.memo(DigestView)
