/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'
import R from 'ramda'
import { Affix } from 'antd'

import { makeDebugger, storePlug, ROUTE, THREAD } from 'utils'

import TagsBar from 'containers/TagsBar'
import Maybe from 'components/Maybe'
import PagedContents from 'components/PagedContents'
import ContentFilter from 'components/ContentFilter'
import PublishLabel from 'components/PublishLabel'
import ConstructingThread from 'components/ConstructingThread'
import StrategicPartners from 'components/StrategicPartners'

import CityList from './CityList'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublishBtn,
} from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:PostsThread')

const LabelText = {
  radar: '采集信息',
  share: '我要分享',
  city: '发布同城帖',
}

const isSpecThread = (community, thread) => {
  if (R.contains(thread, [THREAD.GROUP, THREAD.COMPANY])) {
    return true
  }

  if (community === ROUTE.HOME && thread === THREAD.CITY) {
    return true
  }

  return false
}

const SpecThread = ({ community, thread, cityCommunities }) => {
  if (community === ROUTE.HOME && thread === THREAD.CITY) {
    return <CityList items={cityCommunities.entries} />
  }

  return <ConstructingThread thread={thread} />
}

// see https://stackoverflow.com/questions/38137740/which-kinds-of-initialization-is-more-appropriate-in-constructor-vs-componentwil/
class PostsThreadContainer extends React.Component {
  // has to use componentDidMount not constructor
  // because when router change, constructor will not be called
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
      curCommunity,
      curThread,
      pagedCityCommunitiesData,
      showFilterBar,
    } = postsThread

    const { subPath } = curRoute
    const { totalCount } = pagedPostsData
    const topic = subPath

    return (
      <Wrapper>
        <LeftPadding />
        {isSpecThread(curCommunity.raw, curThread) ? (
          <SpecThread
            community={curCommunity.raw}
            thread={curThread}
            cityCommunities={pagedCityCommunitiesData}
          />
        ) : (
          <React.Fragment>
            <LeftPart>
              <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
              <Maybe test={showFilterBar}>
                <FilterWrapper>
                  <ContentFilter
                    thread={THREAD.POST}
                    onSelect={logic.onFilterSelect}
                    activeFilter={filtersData}
                    isLogin={isLogin}
                    accountInfo={accountInfo}
                    totalCount={totalCount}
                    onC11NChange={logic.onC11NChange}
                  />
                </FilterWrapper>
              </Maybe>

              <PagedContents
                data={pagedPostsData}
                cover={curThread === THREAD.RADAR ? 'source' : 'avatar'}
                community={curCommunity.raw}
                thread={THREAD.POST}
                curView={curView}
                active={activePost}
                accountInfo={accountInfo}
                onUserSelect={logic.onUserSelect}
                onAuthorSelect={logic.onUserSelect}
                onPreview={logic.onPreview}
                onPageChange={logic.loadPosts}
              />
            </LeftPart>

            <RightPart>
              <React.Fragment>
                <PublishBtn type="primary" onClick={logic.onContentCreate}>
                  <PublishLabel text={LabelText[subPath] || '发布帖子'} />
                </PublishBtn>

                <Affix offsetTop={50}>
                  <TagsBar
                    thread={THREAD.POST}
                    topic={topic}
                    onSelect={logic.onTagSelect}
                    active={activeTagData}
                  />
                  <StrategicPartners onClose={logic.onAdsClose} />
                </Affix>
              </React.Fragment>
            </RightPart>
          </React.Fragment>
        )}

        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('postsThread'))(observer(PostsThreadContainer))
