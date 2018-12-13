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

const LabelText = {
  radar: '采集信息',
  share: '我要分享',
  city: '发布同城帖',
}

// see https://stackoverflow.com/questions/38137740/which-kinds-of-initialization-is-more-appropriate-in-constructor-vs-componentwil/
class PostsThreadContainer extends React.Component {
  componentDidMount() {
    const { postsThread } = this.props
    logic.init(postsThread)
  }

  // componentWillUnmount will be called everytime when route changes
  componentWillUnmount() {
    logic.uninit()
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
      activeTagData,
    } = postsThread

    const { mainPath, subPath } = curRoute
    const { totalCount } = pagedPostsData
    const topic = subPath

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
            onUserSelect={logic.onUserSelect}
            onTitleSelect={logic.onTitleSelect}
            onPageChange={logic.loadPosts}
          />
        </LeftPart>

        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={logic.createContent}>
              <PublishLabel text={LabelText[subPath] || '发布帖子'} />
            </PublishBtn>

            <Affix offsetTop={50}>
              <TagsBar
                thread={THREAD.POST}
                topic={topic}
                onSelect={logic.onTagSelect}
                active={activeTagData}
              />
            </Affix>
          </React.Fragment>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postsThread'))(observer(PostsThreadContainer))
