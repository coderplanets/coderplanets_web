/*
 *
 * GithubUserCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'

import { buildLog, nilOrEmpty } from '@utils'
import {
  Wrapper,
  PopAvatarWrapper,
  UserPopInfo,
  PopAvatar,
  Username,
  UserBio,
  UserLocation,
  UserCompany,
  LabelIcon,
  LabelText,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GithubUserCard:index')

const GithubUserCard = ({ user }) => (
  <Wrapper>
    <PopAvatarWrapper>
      <PopAvatar src={user.avatar} />
    </PopAvatarWrapper>
    <UserPopInfo>
      <Username>{user.nickname}</Username>
      {!nilOrEmpty(user.bio) && <UserBio>{user.bio}</UserBio>}
      {!nilOrEmpty(user.location) && (
        <UserLocation>
          <LabelIcon src={`${ICON_CMD}/city_map.svg`} />
          <LabelText> {user.location}</LabelText>
        </UserLocation>
      )}
      {!nilOrEmpty(user.company) && (
        <UserCompany>
          <LabelIcon src={`${ICON_CMD}/profile_company.svg`} />
          <LabelText> {user.company}</LabelText>
        </UserCompany>
      )}
    </UserPopInfo>
  </Wrapper>
)

GithubUserCard.propTypes = {
  // https://www.npmjs.com/package/prop-types
  user: T.shape({
    nickname: T.string.isRequired,
    avatar: T.string.isRequired,
    bio: T.string,
    location: T.string,
    company: T.string,
  }),
}

GithubUserCard.defaultProps = {
  user: {
    location: '',
    company: '',
    bio: '',
  },
}

export default GithubUserCard
