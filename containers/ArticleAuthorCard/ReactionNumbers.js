import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  ReactionNum,
  NumDesc,
  Number,
} from './styles/reaction_numbers'

const ReactionNumbers = ({ user }) => {
  // early user has no reutation
  const achievement = user.achievement || { reputation: 0 }

  return (
    <Wrapper>
      <ReactionNum>
        <NumDesc>声望</NumDesc>
        <Number>{achievement.reputation}</Number>
      </ReactionNum>
      <ReactionNum>
        <NumDesc>关注者</NumDesc>
        <Number>{user.followersCount}</Number>
      </ReactionNum>
      <ReactionNum>
        <NumDesc>关注中</NumDesc>
        <Number>{user.followingsCount}</Number>
      </ReactionNum>
    </Wrapper>
  )
}

ReactionNumbers.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    achievement: PropTypes.shape({
      reputation: PropTypes.number,
      followersCount: PropTypes.number,
      followingsCount: PropTypes.number,
    }),
  }).isRequired,
}

ReactionNumbers.defaultProps = {}

export default ReactionNumbers
