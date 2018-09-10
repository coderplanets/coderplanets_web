/*
 *
 * VideosThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import TagsBar from '../TagsBar'

import {
  Affix,
  PostsLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Space,
  Maybe,
  VideoItem,
} from '../../components'

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

import { uid, makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideosThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(video => (
            <VideoItem entry={video} key={uid.gen()} active={active} />
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

class VideosThreadContainer extends React.Component {
  componentWillMount() {
    const { videosThread } = this.props
    logic.init(videosThread)
  }

  render() {
    const { videosThread } = this.props

    const {
      pagedVideosData,
      filtersData,
      tagsData,
      curRoute,
      curView,
      activeVideo,
      activeTagData,
    } = videosThread

    const { entries, pageNumber, pageSize, totalCount } = pagedVideosData
    const { mainPath, subPath } = curRoute

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          {/* <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} /> */}
          <FilterWrapper show>
            <ContentFilter
              onSelect={logic.onFilterSelect}
              activeFilter={filtersData}
            />
            <FilterResultHint>结果约 {totalCount} 条</FilterResultHint>
          </FilterWrapper>

          <Maybe data={entries} loading={<PostsLoading num={5} />}>
            <React.Fragment>
              <View
                community={mainPath}
                thread={subPath}
                entries={entries}
                curView={curView}
                active={activeVideo}
              />

              <Pagi
                left="-10px"
                pageNumber={pageNumber}
                pageSize={pageSize}
                totalCount={totalCount}
                onChange={logic.loadVideos}
              />
            </React.Fragment>
          </Maybe>
        </LeftPart>

        <RightPart>
          <Maybe data={pagedVideosData.entries}>
            <React.Fragment>
              <PublishBtn type="primary" onClick={logic.createContent}>
                发<Space right="10px" />布<Space right="10px" />视
                <Space right="10px" />频
              </PublishBtn>

              <Affix offsetTop={50}>
                <TagDivider />
                <TagsBar
                  tags={tagsData}
                  active={activeTagData}
                  onSelect={logic.onTagSelect}
                />
              </Affix>
            </React.Fragment>
          </Maybe>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('videosThread'))(
  observer(VideosThreadContainer)
)
