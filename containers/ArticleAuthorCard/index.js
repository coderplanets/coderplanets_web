/*
 *
 * ArticleAuthorCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import Header from './Header'
import UserInfo from './UserInfo'
import ReactionNumbers from './ReactionNumbers'

import { Wrapper, Divider } from './styles'

import * as logic from './logic'
import { makeDebugger, storePlug } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleAuthorCard')
/* eslint-enable no-unused-vars */

class ArticleAuthorCardContainer extends React.Component {
  componentDidMount() {
    const { articleAuthorCard } = this.props
    logic.init(articleAuthorCard)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { introTitle, user } = this.props

    return (
      <Wrapper>
        <Header title={introTitle} />
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
