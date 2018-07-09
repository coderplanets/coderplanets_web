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
  PostBodyDigest,
  PostExtra,
  PostTitleTagDot,
  TagDivider,
  WritePostBtn,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

const PostItem = ({ post, activePost, index }) => (
  <PostWrapper current={post} active={activePost} index={index}>
    <div>
      <PostAvatar src={post.author.avatar} alt="avatar" />
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
            问答
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
          {post.author.nickname} 发布于:{' '}
          <TimeAgo datetime={post.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {post.views}
        </PostExtra>
        <PostBodyDigest>{cutFrom(post.digest, 90)}</PostBodyDigest>
      </PostSecondHalf>
    </PostMain>
  </PostWrapper>
)

const View = ({ community, thread, posts, curView, activePost }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {posts.map((post, index) => (
            <PostItem
              post={post}
              key={shortid.generate()}
              activePost={activePost}
              index={index}
            />
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
    const { postsThread } = this.props
    logic.init(postsThread)
  }

  componentDidMount() {}

  render() {
    const {
      postsThread: {
        pagedPostsData,
        tagsData,
        curView,
        filtersData,
        activeTagData,
        activePost,
        curRoute,
      },
    } = this.props

    const { mainPath, subPath } = curRoute

    return (
      <Wrapper>
        <React.Fragment>
          <LeftPadding />
          <LeftPart>
            <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
            {/* <FilterWrapper show={curView === TYPE.RESULT}> */}
            <FilterWrapper show>
              <ContentFilter
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
              />
              <FilterResultHint>
                结果约 {pagedPostsData.totalCount} 条
              </FilterResultHint>
            </FilterWrapper>

            {!pagedPostsData ? (
              <PostsLoading num={5} />
            ) : (
              <React.Fragment>
                <View
                  community={mainPath}
                  thread={subPath}
                  posts={pagedPostsData.entries}
                  curView={curView}
                  activePost={activePost}
                />

                <Pagi
                  left="-10px"
                  pageNumber={pagedPostsData.pageNumber}
                  pageSize={pagedPostsData.pageSize}
                  totalCount={pagedPostsData.totalCount}
                  onChange={logic.loadPosts}
                />
              </React.Fragment>
            )}
          </LeftPart>

          <RightPart>
            {!pagedPostsData ? null : (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </RightPart>
          <RightPadding />
        </React.Fragment>
      </Wrapper>
    )
  }
}

export default inject(storePlug('postsThread'))(observer(PostsThreadContainer))
