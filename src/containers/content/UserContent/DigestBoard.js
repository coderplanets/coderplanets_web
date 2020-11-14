import React from 'react'
import TimeAgo from 'timeago-react'
import { any, equals, values } from 'ramda'

import { ICON_CMD } from '@/config'

import DotDivider from '@/components/DotDivider'
import { FollowButton } from '@/components/Buttons'
import { Space } from '@/components/Common'

import AchieveCard from './AchieveCard'
import SourceContributeInfo from './SourceContributeInfo'

import { CardWrapper, AttachWrapper, AttachIcon } from './styles/digest_board'

import * as logic from './logic'

const anyTrue = (obj) => any(equals(true), values(obj))

const DigestBoard = ({ user, accountId, following }) => (
  <>
    <CardWrapper>
      <AchieveCard user={user} />
      {user.id !== accountId && (
        <FollowButton
          hasFollowed={user.viewerHasFollowed}
          userId={user.id}
          size="default"
          onFollow={logic.followUser}
          onUndoFollow={logic.undoFollowUser}
          loading={following}
        />
      )}
    </CardWrapper>

    <AttachWrapper>
      <AttachIcon src={`${ICON_CMD}/join_at.svg`} />第 {user.id} 位会员{' '}
      <DotDivider /> 加入时间:
      <Space right="5px" />
      <TimeAgo datetime={user.insertedAt} locale="zh_CN" />
    </AttachWrapper>

    <AttachWrapper>
      <AttachIcon src={`${ICON_CMD}/user_been_views.svg`} />
      主页被浏览 {user.views} 次
    </AttachWrapper>

    {anyTrue(user.achievement.sourceContribute) && (
      <SourceContributeInfo data={user.achievement.sourceContribute} />
    )}

    {user.achievement.donateMember && !user.achievement.seniorMember && (
      <AttachWrapper>
        <AttachIcon src={`${ICON_CMD}/member_donor.svg`} />
        <div>热心打赏</div>
      </AttachWrapper>
    )}

    {user.achievement.seniorMember && (
      <AttachWrapper>
        <AttachIcon src={`${ICON_CMD}/member_senior.svg`} />
        <div>CPS 会员</div>
      </AttachWrapper>
    )}
    {user.achievement.sponsorMember && (
      <AttachWrapper>
        <AttachIcon src={`${ICON_CMD}/member_sponsor.svg`} />
        <div>特别赞助</div>
      </AttachWrapper>
    )}
  </>
)

export default React.memo(DigestBoard)
