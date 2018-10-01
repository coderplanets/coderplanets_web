/*
 *
 * GithubUserCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

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

import { makeDebugger, nilOrEmpty } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:GithubUserCard:index')
/* eslint-enable no-unused-vars */

const GithubUserCard = ({ user }) => (
  <Wrapper>
    <PopAvatarWrapper>
      <PopAvatar src={user.avatar} />
    </PopAvatarWrapper>
    <UserPopInfo>
      <Username>{user.nickname}</Username>
      {!nilOrEmpty(user.bio) ? <UserBio>{user.bio}</UserBio> : null}
      {!nilOrEmpty(user.location) ? (
        <UserLocation>
          <LabelIcon src={`${ICON_CMD}/city_map.svg`} />
          <LabelText> {user.location}</LabelText>
        </UserLocation>
      ) : null}
      {!nilOrEmpty(user.company) ? (
        <UserCompany>
          <LabelIcon src={`${ICON_CMD}/profile_company.svg`} />
          <LabelText> {user.company}</LabelText>
        </UserCompany>
      ) : null}
    </UserPopInfo>
  </Wrapper>
)

GithubUserCard.propTypes = {
  // https://www.npmjs.com/package/prop-types
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    bio: PropTypes.string,
    location: PropTypes.string,
    company: PropTypes.string,
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
