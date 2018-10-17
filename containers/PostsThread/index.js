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
  ContentFilter,
  Maybe,
  PublishLabel,
  PagedContents,
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

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

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

    const { mainPath } = curRoute
    const { totalCount } = pagedPostsData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={totalCount !== 0}>
            <FilterWrapper>
              <ContentFilter
                thread={THREAD.POST}
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
                passport="elixir->job.edit"
              />
              <FilterResultHint>结果约 {totalCount} 条</FilterResultHint>
            </FilterWrapper>
          </Maybe>

          <PagedContents
            data={pagedPostsData}
            community={mainPath}
            thread={THREAD.POST}
            curView={curView}
            active={activePost}
            onTitleSelect={logic.onTitleSelect}
            onPageChange={logic.loadPosts}
          />
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
