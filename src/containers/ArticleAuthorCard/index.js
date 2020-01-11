/*
 *
 * ArticleAuthorCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@utils'

import UserInfo from './UserInfo'
// import ReactionNumbers from './ReactionNumbers'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleAuthorCard')

const ArticleAuthorCardContainer = ({ articleAuthorCard, user }) => {
  useInit(articleAuthorCard, user)

  const { isSelfViewing } = articleAuthorCard

  return (
    <Wrapper>
      <UserInfo user={user} isSelfViewing={isSelfViewing} />
      {/* <ReactionNumbers user={user} /> */}
    </Wrapper>
  )
}

ArticleAuthorCardContainer.propTypes = {
  // later
  articleAuthorCard: T.object.isRequired,
  user: T.shape({
    id: T.string,
    login: T.string,
    avatar: T.string,
    nickname: T.string,
    bio: T.string,

    achievement: T.shape({
      reputation: T.number,
      followersCount: T.number,
      followingsCount: T.number,
    }),
  }).isRequired,
}

ArticleAuthorCardContainer.defaultProps = {}

export default connectStore(ArticleAuthorCardContainer)
