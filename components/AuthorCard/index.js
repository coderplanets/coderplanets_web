/*
 *
 * AuthorCard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Divider } from './styles'

import Header from './Header'
import UserInfo from './UserInfo'
import ReactionNumbers from './ReactonNumbers'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:AuthorCard:index')
/* eslint-enable no-unused-vars */

const AuthorCard = ({ user, header }) => (
  <Wrapper>
    <Header header={header} />
    <Divider />
    <UserInfo user={user} />
    <ReactionNumbers user={user} />
  </Wrapper>
)

AuthorCard.propTypes = {
  user: PropTypes.object.isRequired,
  header: PropTypes.string,
}

AuthorCard.defaultProps = {
  header: '关于作者',
}

export default AuthorCard
