/*
 *
 * PostsPaper
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import { Affix } from 'antd'
import TimeAgo from 'timeago-react'
import Waypoint from 'react-waypoint'
// import Link from 'next/link'

import { ICON_ASSETS } from '../../config'

// import { Button } from '../../components'
import ContentFilter from '../../components/ContentFilter'
import {
  makeDebugger,
  storeSelector,
  /* getRandomInt, */
  cutFrom,
  /* fakeUsers, */
  // Global,
} from '../../utils'

import { AvatarsRow, TagList, PostsLoading, Pagi } from '../../components'

// import logic from './logic'
import * as logic from './logic'
import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  PostWrapper,
  FilterWrapper,
  FilterResultHint,
  PostAvatar,
  PostTitleLink,
  LinkIcon,
  PostMain,
  PostTopHalf,
  PostBreif,
  PostTitle,
  PostTitleTag,
  PostSecondHalf,
  PostBodyBreif,
  PostExtra,
  PostTitleTagDot,
  TagDivider,
  WritePostBtn,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsPaper')
/* eslint-enable no-unused-vars */

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

const PostItem = ({ post, active }) => (
  <PostWrapper current={post} active={active}>
    <div>
      <PostAvatar
        src="http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/me.jpg"
        alt="avatar"
      />
    </div>
    <PostMain>
      <PostTopHalf>
        <PostBreif onClick={logic.onTitleSelect.bind(this, post)}>
          <PostTitle>{post.title}</PostTitle>
          <PostTitleLink>
            <LinkIcon path={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>github</span>
          </PostTitleLink>
          <PostTitleTag>
            <PostTitleTagDot />
            react
          </PostTitleTag>
        </PostBreif>
        <div>
          <AvatarsRow
            users={post.commentsParticipators}
            total={post.commentsParticipatorsCount}
          />
        </div>
      </PostTopHalf>

      <PostSecondHalf>
        <PostExtra>
          mydearxym 发布于:{' '}
          <TimeAgo datetime={post.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {post.views}
        </PostExtra>
        <PostBodyBreif>{cutFrom(post.digest, 100)}</PostBodyBreif>
      </PostSecondHalf>
    </PostMain>
  </PostWrapper>
)

const View = ({ posts, curView, active }) => {
  switch (curView) {
    case 'RESULT': {
      return (
        <div>
          {posts.map(post => (
            <PostItem post={post} key={shortid.generate()} active={active} />
          ))}
        </div>
      )
    }
    default:
      return <PostsLoading num={5} />
  }
}

class PostsPaperContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsPaper)
  }

  componentDidMount() {
    // Affix hack
    // Global.scrollTo(0, 1)
  }

  render() {
    const {
      postsData,
      curView,
      curFilter: { when, sort, wordLength },
      curTag,
      active,
    } = this.props.postsPaper

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <FilterWrapper>
            <ContentFilter
              onSelect={logic.filterOnSelect}
              activeWhen={when}
              activeSort={sort}
              activeLength={wordLength}
            />
            <FilterResultHint>
              结果约 {postsData.totalCount} 条
            </FilterResultHint>
          </FilterWrapper>

          <View posts={postsData.entries} curView={curView} active={active} />

          <Pagi
            left="-10px"
            pageNumber={postsData.pageNumber}
            pageSize={postsData.pageSize}
            totalCount={postsData.totalCount}
            onChange={logic.pageChange}
          />
        </LeftPart>

        <RightPart>
          <Affix offsetTop={100}>
            <WritePostBtn type="primary" onClick={logic.createContent}>
              发&nbsp;&nbsp;&nbsp;&nbsp;帖
            </WritePostBtn>

            <TagDivider />

            <TagList tags={tags} active={curTag} onSelect={logic.tagOnSelect} />
          </Affix>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storeSelector('postsPaper'))(
  observer(PostsPaperContainer)
)
