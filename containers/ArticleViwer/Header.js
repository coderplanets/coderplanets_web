import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_ASSETS } from '../../config'

import {
  Wrapper,
  UserInfo,
  ReactionWrapper,
  Reaction,
  ReactionAction,
  ReactionName,
  ReactionIcon,
  ReactionUserNum,
  Avatar,
  UserName,
  PublishAt,
  Divider,
} from './styles/header'

import { TYPE } from '../../utils'
import * as logic from './logic'

const Header = ({ data }) => (
  <Wrapper>
    <UserInfo>
      <Avatar src={data.author.avatar} alt="user_avatar" />
      <div>
        <UserName>{data.author.nickname}</UserName>
        <PublishAt>
          发表于: <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
        </PublishAt>
      </div>
    </UserInfo>
    <ReactionWrapper>
      <Reaction>
        <ReactionAction
          onClick={logic.onReaction.bind(
            this,
            TYPE.POST,
            TYPE.FAVORITE,
            data.viewerHasFavorited,
            data
          )}
        >
          <ReactionIcon src={`${ICON_ASSETS}/cmd/uncollect.svg`} />
          <ReactionName>
            {data.viewerHasFavorited ? (
              <span>已收藏&nbsp;</span>
            ) : (
              <span>收藏&nbsp;</span>
            )}
          </ReactionName>
        </ReactionAction>
        <ReactionUserNum>{data.favoritedCount}</ReactionUserNum>
        <Divider />
      </Reaction>
      <Reaction>
        <ReactionAction
          onClick={logic.onReaction.bind(
            this,
            TYPE.POST,
            TYPE.STAR,
            data.viewerHasStarred,
            data
          )}
        >
          <ReactionIcon src={`${ICON_ASSETS}/cmd/like.svg`} />
          <ReactionName>&nbsp;赞&nbsp;</ReactionName>
        </ReactionAction>
        <ReactionUserNum>{data.starredCount}</ReactionUserNum>
        <Divider />
      </Reaction>
      <Reaction>
        <ReactionAction>
          <ReactionIcon src={`${ICON_ASSETS}/cmd/watch.svg`} />
          <ReactionName>&nbsp;浏览&nbsp;</ReactionName>
        </ReactionAction>
        <ReactionUserNum>{data.views}</ReactionUserNum>
      </Reaction>
    </ReactionWrapper>
  </Wrapper>
)

export default Header
