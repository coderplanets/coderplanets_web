/*
 *
 * PostsThread
 *
 */

import React from 'react'
import R from 'ramda'

import { inject, observer } from 'mobx-react'
import shortid from 'shortid'
import Waypoint from 'react-waypoint'

import { makeDebugger, storePlug, TYPE } from '../../utils'

import {
  Affix,
  TagList,
  PostsLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Space,
} from '../../components'

import Item from './Item'

// import logic from './logic'
import * as logic from './logic'
import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  FilterResultHint,
  TagDivider,
  WritePostBtn,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, posts, curView, activePost }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {posts.map((post, index) => (
            <Item
              data={post}
              key={shortid.generate()}
              active={activePost}
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

            {R.isEmpty(pagedPostsData.entries) ? (
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
            {R.isEmpty(pagedPostsData.entries) ? null : (
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
