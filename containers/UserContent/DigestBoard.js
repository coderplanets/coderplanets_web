import React from 'react'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import DotDivider from 'components/DotDivider'
import FollowButton from 'components/FollowButton'
import { Space } from 'components/BaseStyled'
import { ICON_CMD } from 'config'

import AchieveCard from './AchieveCard'
import NumbersCard from './NumbersCard'
import SourceContributeInfo from './SourceContributeInfo'

import { CardWrapper, AttactWrapper, AttactIcon } from './styles/digest_board'

import * as logic from './logic'

const anyTrue = obj => R.any(R.equals(true), R.values(obj))

const DigestBoard = ({ user, accountId, following }) => (
  <React.Fragment>
    <CardWrapper>
      <AchieveCard user={user} />
      {user.id !== accountId && (
        <FollowButton
          hasFollowd={user.viewerHasFollowed}
          userId={user.id}
          size="default"
          onFollow={logic.followUser}
          onUndoFollow={logic.undoFollowUser}
          loading={following}
        />
      )}
    </CardWrapper>
    <CardWrapper>
      <NumbersCard
        user={user}
        showFollowings={logic.showFollowings}
        showFollowers={logic.showFollowers}
      />
    </CardWrapper>

    <AttactWrapper>
      <AttactIcon src={`${ICON_CMD}/join_at.svg`} />第 {user.id} 位会员{' '}
      <DotDivider /> 加入时间:
      <Space right="5px" />
      <TimeAgo datetime={user.insertedAt} locale="zh_CN" />
    </AttactWrapper>

    <AttactWrapper>
      <AttactIcon src={`${ICON_CMD}/user_been_views.svg`} />
      主页被浏览 {user.views} 次
    </AttactWrapper>

    {anyTrue(user.achievement.sourceContribute) && (
      <SourceContributeInfo data={user.achievement.sourceContribute} />
    )}

    {user.achievement.donateMember &&
      !user.achievement.seniorMember && (
        <AttactWrapper>
          <AttactIcon src={`${ICON_CMD}/member_donor.svg`} />
          <div>热心打赏</div>
        </AttactWrapper>
      )}

    {user.achievement.seniorMember && (
      <AttactWrapper>
        <AttactIcon src={`${ICON_CMD}/member_senior.svg`} />
        <div>CPS 会员</div>
      </AttactWrapper>
    )}
    {user.achievement.sponsorMember && (
      <AttactWrapper>
        <AttactIcon src={`${ICON_CMD}/member_sponsor.svg`} />
        <div>特别赞助</div>
      </AttactWrapper>
    )}
  </React.Fragment>
)

export default DigestBoard
