import React from 'react'
import T from 'prop-types'

import { ISSUE_ADDR } from '@config'
import { TYPE } from '@constant'

import Popover from '@components/Popover'
import DiscussLinker from '@components/DiscussLinker'

import {
  Wrapper,
  ReactionNum,
  NumDesc,
  Number,
  ReadOnlyNumber,
} from './styles/reaction_numbers'

import { onListUsers } from './logic'

const ReactionNumbers = ({ user }) => {
  // early user has no reutation
  const achievement = user.achievement || { reputation: 0 }

  return (
    <Wrapper>
      <ReactionNum>
        <NumDesc>声望</NumDesc>
        <Popover
          placement="bottom"
          trigger="click"
          content={<DiscussLinker title="声望" addr={`${ISSUE_ADDR}/327`} />}
        >
          <ReadOnlyNumber>{achievement.reputation}</ReadOnlyNumber>
        </Popover>
      </ReactionNum>
      <ReactionNum>
        <NumDesc>关注者</NumDesc>
        <Number
          onClick={onListUsers.bind(this, TYPE.USER_LISTER_FOLLOWERS, {
            id: user.id,
            brief: user.nickname,
          })}
        >
          {user.achievement.followersCount}
        </Number>
      </ReactionNum>
      <ReactionNum>
        <NumDesc>关注中</NumDesc>
        <Number
          onClick={onListUsers.bind(this, TYPE.USER_LISTER_FOLLOWINGS, {
            id: user.id,
            brief: user.nickname,
          })}
        >
          {user.achievement.followingsCount}
        </Number>
      </ReactionNum>
    </Wrapper>
  )
}

ReactionNumbers.propTypes = {
  user: T.shape({
    id: T.string,
    nickname: T.string,
    achievement: T.shape({
      reputation: T.number,
      followersCount: T.number,
      followingsCount: T.number,
    }),
  }).isRequired,
}

ReactionNumbers.defaultProps = {}

export default ReactionNumbers
