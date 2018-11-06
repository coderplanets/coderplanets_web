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
  PublishBtn,
} from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsThread')
/* eslint-enable no-unused-vars */

class PostsThreadContainer extends React.Component {
  componentDidMount() {
    const { postsThread } = this.props
    logic.init(postsThread)
  }

  render() {
    const { postsThread } = this.props
    const {
      pagedPostsData,
      curView,
      filtersData,
      activePost,
      curRoute,
      accountInfo,
      isLogin,
    } = postsThread

    const { mainPath } = curRoute
    const { totalCount } = pagedPostsData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <FilterWrapper>
            {/* TODO: show when url has tag query and totalCount = 0 */}
            <ContentFilter
              thread={THREAD.POST}
              onSelect={logic.onFilterSelect}
              activeFilter={filtersData}
              isLogin={isLogin}
              accountInfo={accountInfo}
              totalCount={totalCount}
              onCustomChange={logic.onCustomChange}
            />
          </FilterWrapper>

          <PagedContents
            data={pagedPostsData}
            community={mainPath}
            thread={THREAD.POST}
            curView={curView}
            active={activePost}
            accountInfo={accountInfo}
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
