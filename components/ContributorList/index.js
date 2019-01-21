/*
 *
 * ContributorList
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import AvatarAdder from 'containers/AvatarAdder'
import { makeDebugger } from 'utils'
import Maybe from '../Maybe'
import Popover from '../Popover'
import GithubUserCard from '../GithubUserCard'

import { Wrapper, AvatarLink, Avatar, CardWrapper } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ContributorList:index')

const ContributorList = ({ users, showAdder, addContributor }) => (
  <Wrapper>
    {users.map(user => (
      <Popover
        content={
          <CardWrapper>
            <GithubUserCard user={user} />
          </CardWrapper>
        }
        placement="bottom"
        trigger="hover"
        key={user.id}
      >
        <AvatarLink>
          <Avatar src={user.avatar} />
        </AvatarLink>
      </Popover>
    ))}

    <Maybe test={showAdder}>
      <AvatarAdder onConfirm={addContributor} />
    </Maybe>
  </Wrapper>
)

ContributorList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string,
      bio: PropTypes.string,
      company: PropTypes.string,
      location: PropTypes.string,
      htmlUrl: PropTypes.string,
    })
  ).isRequired,
  addContributor: PropTypes.func,
  showAdder: PropTypes.bool,
}

ContributorList.defaultProps = {
  addContributor: debug,
  showAdder: false,
}

export default ContributorList
