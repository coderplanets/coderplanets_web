/*
 *
 * ContributorList
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import { withGuardian } from '@/hoc'

import AvatarAdder from '@/containers/tool/AvatarAdder'
import Tooltip from '@/widgets/Tooltip'
import GithubUserCard from '@/widgets/GithubUserCard'

import { Wrapper, AvatarLink, Avatar, CardWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ContributorList:index')

const ContributorList = ({ users, readOnly, addContributor }) => (
  <Wrapper>
    {users.map((user) => (
      <Tooltip
        content={
          <CardWrapper>
            <GithubUserCard user={user} />
          </CardWrapper>
        }
        placement="bottom"
        key={user.avatar}
      >
        <AvatarLink href={user.htmlUrl} target="_blank">
          <Avatar src={user.avatar} />
        </AvatarLink>
      </Tooltip>
    ))}

    {!readOnly && <AvatarAdder onConfirm={addContributor} />}
  </Wrapper>
)

ContributorList.propTypes = {
  users: T.arrayOf(
    T.shape({
      avatar: T.string,
      nickname: T.string,
      bio: T.string,
      company: T.string,
      location: T.string,
      htmlUrl: T.string,
    }),
  ).isRequired,
  addContributor: T.func,
  readOnly: T.bool,
}

ContributorList.defaultProps = {
  addContributor: log,
  readOnly: false,
}

export default withGuardian(ContributorList)
