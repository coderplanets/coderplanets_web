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
  PublishBtn,
} from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

// TODO: move to common componnet
const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map((entry, index) => (
            <Item
              data={entry}
              key={shortid.generate()}
              active={active}
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
    const { entries, totalCount, pageNumber, pageSize } = pagedPostsData

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
              <FilterResultHint>结果约 {totalCount} 条</FilterResultHint>
            </FilterWrapper>

            {R.isEmpty(entries) ? (
              <PostsLoading num={5} />
            ) : (
              <React.Fragment>
                <View
                  community={mainPath}
                  thread={subPath}
                  entries={entries}
                  curView={curView}
                  active={activePost}
                />

                <Pagi
                  left="-10px"
                  pageNumber={pageNumber}
                  pageSize={pageSize}
                  totalCount={totalCount}
                  onChange={logic.loadPosts}
                />
              </React.Fragment>
            )}
          </LeftPart>

          <RightPart>
            {R.isEmpty(entries) ? null : (
              <React.Fragment>
                <PublishBtn type="primary" onClick={logic.createContent}>
                  发<Space right="20px" />帖
                </PublishBtn>

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
