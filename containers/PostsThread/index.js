/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'

import TagsBar from '../TagsBar'

import {
  Affix,
  PostLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Maybe,
  PostItem,
  PublishLabel,
} from '../../components'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  FilterResultHint,
  PublishBtn,
} from './styles'

import { uid, makeDebugger, storePlug, TYPE, THREAD } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <PostItem
              key={uid.gen()}
              entry={entry}
              active={active}
              onTitleSelect={logic.onTitleSelect.bind(this, entry)}
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
      return <PostLoading num={5} />
  }
}

class PostsThreadContainer extends React.Component {
  componentWillMount() {
    const { postsThread } = this.props
    logic.init(postsThread)
  }

  componentDidMount() {}

  render() {
    const { postsThread } = this.props
    const {
      pagedPostsData,
      curView,
      filtersData,
      activePost,
      curRoute,
    } = postsThread

    const { mainPath, subPath } = curRoute
    const { entries, totalCount, pageNumber, pageSize } = pagedPostsData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={totalCount !== 0}>
            <FilterWrapper show>
              <ContentFilter
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
              />
              <FilterResultHint>结果约 {totalCount} 条</FilterResultHint>
            </FilterWrapper>
          </Maybe>

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
        </LeftPart>

        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={logic.createContent}>
              <PublishLabel text="发布帖子" />
            </PublishBtn>

            <Affix offsetTop={50}>
              <TagsBar thread={THREAD.POST} onSelect={logic.onTagSelect} />
            </Affix>
          </React.Fragment>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postsThread'))(observer(PostsThreadContainer))
