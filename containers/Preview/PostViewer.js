import React from 'react'

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
} from './styles/body'

import { getSVGIconPath } from '../../utils'

const fakeData =
  '无线电报普及之前，外交是一门艺术，因为使节、谈判代表和首都、前线之间存在明显的信息壁垒及时间差，而对手也一样。所以，外交官的工作在很大程度上类似于打牌，又类似于股票投机，需要反复揣测对手的心理，利用不同敌人之间的矛盾，这时候的确有外交大师和弱手之间的区别。比如说本杰明·富兰克林就成功地骗了法国人的钱来支持美国独立。到了20世纪后期，大国都有了完善的全球通讯网，也有成熟的情报机构，外交官的能力再强，也很难以小博大，很难用实力之外的因素逼对手让步，更何况首都决策集团也不允许你随便发挥。之前的外交类似于打牌，现在就是下象棋，下围棋，一招一式都摆在明面上，三个卒怎么谋划也很难打两个车，让六个子就算阿法狗也没法反扳。如果说有什么“水平”，那也是整个统帅部的实力和决策力的体现，而不是外交官的个人能力。当代美国的大使职务都是权贵子弟的玩物，或是富商们随意购买的名头，也没耽误美国控制世界。所以，周的外交成果，是他作为一个大国领导集团的“前线指挥部主任”取得的成就，是几亿中国劳动力和600万解放军共同的成就，而不是他的个人成就。我举个周恩来搞外交的例子无线电报普及之前，外交是一门艺术，因为使节、谈判代权贵子弟的玩物，或是富商们随意购买的名头，也没耽误美国控制世界。所以，周的外交成果，是他作为一个大国领导集团的“前线指挥部主任”取得的成就，是几亿中国劳动力和600万解放军共同的成就，而不是他的个人成就。我举个周恩来搞外交的例子'
// <PreviewHeader>Preview header</PreviewHeader>post
// TODO: extract a Avatar component

const PreviewHeader = () => {
  return (
    <PreviewHeaderWrapper>
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
          <ReactionAction>
            <ReactionIcon path={getSVGIconPath('uncollect')} />
            <ReactionName>收藏&nbsp;</ReactionName>
          </ReactionAction>
          <ReactionUserNum>234</ReactionUserNum>
          <Divider />
        </Reaction>
        <Reaction>
          <ReactionAction>
            <ReactionIcon path={getSVGIconPath('watch')} />
            <ReactionName>关注&nbsp;</ReactionName>
          </ReactionAction>
          <ReactionUserNum>22</ReactionUserNum>
          <Divider />
        </Reaction>
        <Reaction>
          <ReactionAction>
            <ReactionIcon
              path={getSVGIconPath('like')}
              style={{
                width: '1.2em',
                height: '1.2em',
                marginTop: 1,
                marginRight: 2,
              }}
            />
            <ReactionName>赞&nbsp;</ReactionName>
          </ReactionAction>
          <ReactionUserNum>22</ReactionUserNum>
          <Divider />
        </Reaction>
        <Reaction>
          <ReactionAction>
            <ReactionIcon
              path={getSVGIconPath('comment')}
              style={{ marginTop: 6 }}
            />
            <ReactionName>评论&nbsp;</ReactionName>
          </ReactionAction>
          <ReactionUserNum>66</ReactionUserNum>
        </Reaction>
      </ReactionWrapper>
    </PreviewHeaderWrapper>
  )
}

const PostViewer = () => {
  return (
    <div>
      <PreviewHeader />
      <BodyWrapper>
        <ArticleHeader>
          <MoreWrapper>
            <MoreIcon path={getSVGIconPath('more')} />
            <MoreOption>文章页</MoreOption>
          </MoreWrapper>
          <LinkFrom>
            <div>转载自:&nbsp;</div>
            <LinkSource>github.com/mydearxym/...</LinkSource>
          </LinkFrom>
          <RefinedLabel>精华帖</RefinedLabel>
        </ArticleHeader>
        <ArticleTitle>Mastani 是基于 Phoenix 开发的论坛框架</ArticleTitle>
        <ArticleBody>{fakeData}</ArticleBody>
      </BodyWrapper>
    </div>
  )
}

export default PostViewer
