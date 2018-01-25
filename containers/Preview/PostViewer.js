import React from 'react'

import {
  PreviewHeader,
  UserInfo,
  ReactionWrapper,
  Reaction,
  ReactionIcon,
  ReactionNum,
  Avatar,
  UserName,
  PublishAt,
} from './styles/header'

import { getSVGIconPath } from '../../utils'
// <PreviewHeader>Preview header</PreviewHeader>post
// TODO: extract a Avatar component

/*

<Reaction>
<ReactionIcon path={getSVGIconPath('unstar')} />
<ReactionNum>24</ReactionNum>
</Reaction>
<Reaction>
<ReactionIcon path={getSVGIconPath('star')} />
<ReactionNum>4</ReactionNum>
</Reaction>
 */

const PostViewer = () => {
  return (
    <div>
      <PreviewHeader>
        <UserInfo>
          <Avatar
            src="https://s3.amazonaws.com/uifaces/faces/twitter/bryan_topham/128.jpg"
            alt="user_avatar"
          />
          <div>
            <UserName>mydearxym</UserName>
            <PublishAt>发表于: 2天前</PublishAt>
          </div>
        </UserInfo>
        <ReactionWrapper>
          <Reaction>
            <ReactionIcon path={getSVGIconPath('uncollect')} height="24px" />
            <ReactionNum>收藏&nbsp;234</ReactionNum>
          </Reaction>
          <Reaction>
            <ReactionIcon path={getSVGIconPath('watch')} />
            <ReactionNum>关注&nbsp;434</ReactionNum>
          </Reaction>
          <Reaction>
            <ReactionIcon path={getSVGIconPath('unwatch')} />
            <ReactionNum>赞&nbsp;434</ReactionNum>
          </Reaction>
        </ReactionWrapper>
      </PreviewHeader>
    </div>
  )
}

export default PostViewer
