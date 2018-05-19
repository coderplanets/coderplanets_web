import React from 'react'
import TimeAgo from 'timeago-react'
// import CommentsList from '../../components/CommentsList'
import Comments from '../../containers/Comments'
import { MarkDownPreviewer, PostLoading } from '../../components'

import { ICON_ASSETS } from '../../config'

import {
  PreviewHeaderWrapper,
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

import {
  BodyWrapper,
  MoreWrapper,
  MoreIcon,
  MoreOption,
  LinkFrom,
  RefinedLabel,
  LinkSource,
  ArticleHeader,
  ArticleTitle,
  ArticleBody,
  CommentsWrapper,
} from './styles/body'

import { TYPE } from '../../utils'

// <PreviewHeader>Preview header</PreviewHeader>post
// TODO: extract a Avatar component
/*
   <Reaction>
   <ReactionAction>
   <ReactionIcon src={`${ICON_ASSETS}/cmd/uncollect.svg`} />
   <ReactionName>关注&nbsp;</ReactionName>
   </ReactionAction>
   <ReactionUserNum>22</ReactionUserNum>
   <Divider />
   </Reaction>
 */

const PreviewHeader = ({ data, onReaction }) => (
  <PreviewHeaderWrapper>
    <UserInfo>
      <Avatar
        src="http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar13.png"
        alt="user_avatar"
      />
      <div>
        <UserName>mydearxym</UserName>
        <PublishAt>
          发表于: <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
        </PublishAt>
      </div>
    </UserInfo>
    <ReactionWrapper>
      <Reaction>
        <ReactionAction
          onClick={onReaction.bind(
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
          onClick={onReaction.bind(
            this,
            TYPE.POST,
            TYPE.STAR,
            data.viewerHasStarred,
            data
          )}
        >
          <ReactionIcon
            src={`${ICON_ASSETS}/cmd/like.svg`}
            style={{
              width: '1.2em',
              height: '1.2em',
              marginTop: 1,
              marginRight: 2,
            }}
          />
          <ReactionName>赞&nbsp;</ReactionName>
        </ReactionAction>
        <ReactionUserNum>{data.starredCount}</ReactionUserNum>
        <Divider />
      </Reaction>
      <Reaction>
        <ReactionAction>
          <ReactionIcon
            src={`${ICON_ASSETS}/cmd/watch.svg`}
            style={{ marginTop: 6 }}
          />
          <ReactionName>浏览&nbsp;</ReactionName>
        </ReactionAction>
        <ReactionUserNum>{data.views}</ReactionUserNum>
      </Reaction>
    </ReactionWrapper>
  </PreviewHeaderWrapper>
)

const PostViewer = ({ data, loading, onReaction }) => (
  <div>
    <PreviewHeader data={data} onReaction={onReaction} />
    <BodyWrapper>
      <ArticleHeader>
        <MoreWrapper>
          <MoreIcon src={`${ICON_ASSETS}/cmd/more.svg`} />
          <MoreOption>文章页</MoreOption>
        </MoreWrapper>
        <LinkFrom>
          <div>转载自:&nbsp;</div>
          <LinkSource>github.com/mydearxym/...</LinkSource>
        </LinkFrom>
        <RefinedLabel>精华帖</RefinedLabel>
      </ArticleHeader>
      <ArticleTitle>{data.title}</ArticleTitle>
      {loading ? (
        <div>
          <PostLoading num={2} />
        </div>
      ) : (
        <ArticleBody>
          <MarkDownPreviewer body={data.body} />
        </ArticleBody>
      )}
    </BodyWrapper>
    <CommentsWrapper>
      <Comments />
    </CommentsWrapper>
  </div>
)

export default PostViewer
