import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'
import { DotDivider, Space, FollowButton } from '../../components'

import {
  CardWrapper,
  AttactWrapper,
  AttactIcon,
  AttactLink,
} from './styles/digest_board'

import AchieveCard from './AchieveCard'
import NumbersCard from './NumbersCard'

import * as logic from './logic'

const DigestBoard = ({ user }) => (
  <React.Fragment>
    <CardWrapper>
      <AchieveCard user={user} />
      <FollowButton
        hasFollowd={user.viewerHasFollowed}
        userId={user.id}
        size="default"
        onFollow={logic.followUser}
        undoFollowUser={logic.undoFollowUser}
      />
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
      <AttactIcon src={`${ICON_CMD}/contributer.svg`} />
      本站源码贡献者(
      <AttactLink
        href="https://github.com/coderplanets/coderplanets_web/commits?author=mydearxym"
        rel="noopener noreferrer"
        target="_blank"
      >
        详情
      </AttactLink>
      )
    </AttactWrapper>
    <AttactWrapper>
      <AttactIcon src={`${ICON_CMD}/sponsor.svg`} />
      本站赞助者(详情)
    </AttactWrapper>
  </React.Fragment>
)

export default DigestBoard
