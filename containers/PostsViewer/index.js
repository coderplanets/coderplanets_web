/*
*
* PostsViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import { Row, Col } from 'antd'

// import Link from 'next/link'

import { Button } from '../../components'
import ContentFilter from '../../components/ContentFilter'
import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
  getRandomInt,
} from '../../utils'

import AvatarsRow from '../../components/AvatarsRow'
import TagList from '../../components/TagList'

// import logic from './logic'
import * as logic from './logic'
import {
  Wrapper,
  PostWrapper,
  FilterWrapper,
  FilterResultHint,
  PostAvatar,
  PostTitleLink,
  LinkIcon,
  PostTitle,
  PostTitleTag,
  PostInfo,
  PostBodyBreif,
  PostExtra,
  PostTitleTagDot,
  TagDivider,
  WritePostBtn,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsViewer')
/* eslint-enable no-unused-vars */

const posts = [
  {
    title: 'Mastani 的前端基于 next/react 技术栈',
    body:
      '一来做个记录，二来可以抛砖引玉，再来大家可以一起学习。该系列文章将会从最基本的 node 、mongo 环境安装讲起，逐步深入，最终通过 docker 实现服务的自动构建和部署。 ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/anaami/128.jpg',
    },
  },
  {
    title: '后端则是是基于 Elixir 的 Phoenix 框架',
    body:
      '作为一名前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然，所以就自己购买了一台阿里服务器来学习 ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/javorszky/128.jpg',
    },
  },
  {
    title: 'API 是 GrahpQL, 用的事 Elixir 社区的 Absinthe',
    body: '前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
    },
  },
  {
    title: '关于 REST 哥已经无力吐槽了',
    body:
      '作为一名前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然，所以就自己购买了一台阿里服务器来学习。接触到其实很多人在部署服务的过程中也都会或多或少的遇  ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/funwatercat/128.jpg',
    },
  },
  {
    title: 'Ramda.js 真是太爽了。。',
    body:
      '作为一名前端开发人员，对服务器的部署运维一直感觉很陌生，但是却兴趣盎然，所以就自己购买了一台阿里服务器来学习。接触到其实很多人在部署服务的过程中也都会或多或少的遇 ',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/bryan_topham/128.jpg',
    },
  },
  {
    title: 'Rx.js 不火没道理啊。真心是个神器',
    body:
      'this is body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha b',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/davidcazalis/128.jpg',
    },
  },
  {
    title: '我什么时候才能火起来啊。..',
    body:
      'this is body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha b',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dhrubo/128.jpg',
    },
  },
  {
    title: '测试请发到客户端测试专区，违规影响用户的，直接封号',
    body:
      'this is body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha body ha this body ha this is body ha this is body ha b',
    starCount: 25,
    favoriteCount: 25,
    author: {
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/vikashpathak18/128.jpg',
    },
  },
]

const commentsUsers = [
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg',
    nickname: 'mydearxym',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg',
    nickname: 'messi',
  },
  {
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/noufalibrahim/128.jpg',
    nickname: 'iniesta',
  },
  {
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/artem_kostenko/128.jpg',
    nickname: 'montu',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dnirmal/128.jpg',
    nickname: 'fjiek',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gaborenton/128.jpg',
    nickname: 'noone',
  },
  {
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    nickname: 'jacke',
  },
]

const tags = [
  {
    color: '#FC6360',
    title: 'react',
  },
  {
    color: '#FFA653',
    title: 'angular',
  },
  {
    color: '#F8CE5A',
    title: 'ask',
  },
  {
    color: '#60CC5A',
    title: 'test 相关',
  },
  {
    color: '#9fefe4',
    title: '问答',
  },

  {
    color: '#2CB8F0',
    title: 'mastani',
  },
  {
    color: '#D488DE',
    title: 'support',
  },
]

const PostItem = ({ post }) => {
  return (
    <PostWrapper>
      <Row>
        <Col span={2}>
          <PostAvatar src={post.author.avatar} alt="avatar" />
        </Col>
        <Col span={22}>
          <Row>
            <Col span={20}>
              <PostTitle onClick={logic.onContentSelect.bind(this, post)}>
                {post.title}
                <PostTitleLink>
                  <LinkIcon path={getSVGIconPath('link')} />
                  <span style={{ marginLeft: 9 }}>github</span>
                </PostTitleLink>
                <PostTitleTag>
                  <PostTitleTagDot />
                  react
                </PostTitleTag>
              </PostTitle>
            </Col>
            <Col span={4}>
              <AvatarsRow
                users={commentsUsers.slice(
                  1,
                  getRandomInt(2, commentsUsers.length)
                )}
                total={3}
              />
            </Col>
          </Row>

          <PostInfo>
            <PostExtra>mydearxym 发布于: 3天前 ⁝ 浏览: 8374</PostExtra>
            <PostBodyBreif>{post.body}</PostBodyBreif>
          </PostInfo>
        </Col>
      </Row>
    </PostWrapper>
  )
}

class PostsViewerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsViewer)
  }

  render() {
    const {
      curFilter: { time, sort, wordLength },
      curTag,
    } = this.props.postsViewer

    return (
      <Wrapper>
        <Row>
          <Col span={19}>
            <FilterWrapper>
              <ContentFilter
                onSelect={logic.filterOnSelect}
                activeTime={time}
                activeSort={sort}
                activeLength={wordLength}
              />
              <FilterResultHint>结果约 1000 条</FilterResultHint>
            </FilterWrapper>

            {posts.map(post => (
              <PostItem post={post} key={shortid.generate()} />
            ))}
          </Col>
          <Col span={1} />
          <Col span={4}>
            <div>
              <WritePostBtn type="primary">
                发&nbsp;&nbsp;&nbsp;&nbsp;帖
              </WritePostBtn>
            </div>

            <TagDivider />

            <TagList tags={tags} active={curTag} onSelect={logic.tagOnSelect} />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <div>
          <Button type="primary" onClick={logic.createPost}>
            createPost (mutate)
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.postList}>
            postList (query)
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.cheatsheet}>
            cheatsheeti
          </Button>
        </div>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('postsViewer'))(
  observer(PostsViewerContainer)
)
