/*
 *
 * ArticleAuthorCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'
import Header from './Header'
import UserInfo from './UserInfo'
import ReactionNumbers from './ReactionNumbers'

import { Wrapper, Divider } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:ArticleAuthorCard')

class ArticleAuthorCardContainer extends React.Component {
  componentDidMount() {
    const { articleAuthorCard, user } = this.props
    logic.init(articleAuthorCard, user)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { introTitle, user } = this.props
    const { articleAuthorCard } = this.props
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
}

ArticleAuthorCardContainer.propTypes = {
  // later
  articleAuthorCard: PropTypes.object.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    login: PropTypes.string,
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    bio: PropTypes.string,

    achievement: PropTypes.shape({
      reputation: PropTypes.number,
      followersCount: PropTypes.number,
      followingsCount: PropTypes.number,
    }),
  }).isRequired,
  introTitle: PropTypes.string,
}

ArticleAuthorCardContainer.defaultProps = {
  introTitle: '关于作者',
}

export default inject(storePlug('articleAuthorCard'))(
  observer(ArticleAuthorCardContainer)
)
