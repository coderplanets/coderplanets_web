/*
 *
 * ArticleAuthorCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@utils'

import Header from './Header'
import UserInfo from './UserInfo'
import ReactionNumbers from './ReactionNumbers'

import { Wrapper, Divider } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleAuthorCard')

const ArticleAuthorCardContainer = ({
  articleAuthorCard,
  introTitle,
  user,
}) => {
  useInit(articleAuthorCard, user)

  const { userData, isSelfViewing } = articleAuthorCard

  return (
    <Wrapper>
      <Header
        title={introTitle}
        user={userData}
        isSelfViewing={isSelfViewing}
      />
      <Divider />
      <UserInfo user={user} />
      <ReactionNumbers user={user} />
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
  introTitle: T.string,
}

ArticleAuthorCardContainer.defaultProps = {
  introTitle: '关于作者',
}

export default connectStore(ArticleAuthorCardContainer)
