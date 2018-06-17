/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import TimeAgo from 'timeago-react'
import Waypoint from 'react-waypoint'
// import Link from 'next/link'

import { ICON_ASSETS } from '../../config'

import { makeDebugger, storePlug, cutFrom, TYPE } from '../../utils'

import {
  Affix,
  AvatarsRow,
  TagList,
  PostsLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Space,
  BuyMeChuanChuan,
} from '../../components'

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
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

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
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
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
        <PostBodyBreif>{cutFrom(post.digest, 90)}</PostBodyBreif>
      </PostSecondHalf>
    </PostMain>
  </PostWrapper>
)

const View = ({ community, thread, posts, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {posts.map(post => (
            <PostItem post={post} key={shortid.generate()} active={active} />
          ))}
        </React.Fragment>
      )
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <React.Fragment>
          <EmptyThread community={community} thread={thread} />
        </React.Fragment>
      )
    }
    default:
      return <PostsLoading num={5} />
  }
}

class PostsThreadContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsThread)
  }

  componentDidMount() {}

  render() {
    const {
      pagedPostsData,
      tagsData,
      curView,
      curFilter: { when, sort, wordLength },
      activeTagData,
      active,
      accountInfo,
      curRoute,
    } = this.props.postsThread

    const { mainPath, subPath } = curRoute

    return (
      <React.Fragment>
        {pagedPostsData ? (
          <Wrapper>
            <LeftPadding />
            <BuyMeChuanChuan fromUser={accountInfo} />
            <LeftPart>
              <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
              <FilterWrapper show={curView === TYPE.RESULT}>
                <ContentFilter
                  onSelect={logic.onFilterSelect}
                  activeWhen={when}
                  activeSort={sort}
                  activeLength={wordLength}
                />
                <FilterResultHint>
                  结果约 {pagedPostsData.totalCount} 条
                </FilterResultHint>
              </FilterWrapper>

              <View
                community={mainPath}
                thread={subPath}
                posts={pagedPostsData.entries}
                curView={curView}
                active={active}
              />

              <Pagi
                left="-10px"
                pageNumber={pagedPostsData.pageNumber}
                pageSize={pagedPostsData.pageSize}
                totalCount={pagedPostsData.totalCount}
                onChange={logic.loadPosts}
              />
            </LeftPart>

            <RightPart>
              <WritePostBtn type="primary" onClick={logic.createContent}>
                发<Space right="20px" />帖
              </WritePostBtn>

              <Affix offsetTop={50}>
                <TagDivider />
                <TagList
                  tags={tagsData}
                  active={activeTagData}
                  onSelect={logic.onTagSelect}
                />
              </Affix>
            </RightPart>
            <RightPadding />
          </Wrapper>
        ) : (
          <Wrapper>
            <LeftPadding />
            <LeftPart>
              <PostsLoading num={5} />
            </LeftPart>
            <RightPart />
            <RightPadding />
          </Wrapper>
        )}
      </React.Fragment>
    )
  }
}

export default inject(storePlug('postsThread'))(observer(PostsThreadContainer))
