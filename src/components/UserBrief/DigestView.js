import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '@/config'

import {
  UserDesc,
  DescIconLable,
  DetailToggleLabel,
  ToggleText,
} from './styles'

import BackgroundList from './BackgroundList'

const emptyBacgrounds = R.either(R.isNil, R.isEmpty)

const DigestView = ({ user, toggleDetail }) => (
  <React.Fragment>
    <UserDesc>
      <DescIconLable src={`${ICON_CMD}/profile_bio.svg`} />{' '}
      <div>{user.bio}</div>
    </UserDesc>
    <UserDesc>
      <DescIconLable src={`${ICON_CMD}/profile_location.svg`} />{' '}
      <div>{user.location}</div>
    </UserDesc>
    <UserDesc hide={emptyBacgrounds(user.workBackgrounds)}>
      <DescIconLable src={`${ICON_CMD}/profile_company.svg`} />{' '}
      <BackgroundList type="work" user={user} first />
    </UserDesc>
    <UserDesc hide={emptyBacgrounds(user.educationBackgrounds)}>
      <DescIconLable src={`${ICON_CMD}/profile_education.svg`} />{' '}
      <BackgroundList type="education" user={user} first />
    </UserDesc>
    <UserDesc onClick={toggleDetail.bind(this)} clickable>
      <DetailToggleLabel src={`${ICON_CMD}/profile_arrow.svg`} reverse />
      <ToggleText>查看详细资料</ToggleText>
    </UserDesc>
  </React.Fragment>
)

export default React.memo(DigestView)
