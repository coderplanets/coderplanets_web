/*
 *
 * VideosThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'
import TagsBar from '../TagsBar'

import {
  Affix,
  VideoItemLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  Maybe,
  VideoItem,
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
const debug = makeDebugger('C:VideosThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          <VideoItemLoading num={1} />

          {entries.map(video => (
            <VideoItem
              entry={video}
              key={uid.gen()}
              active={active}
              onTitleSelect={logic.onTitleSelect}
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
      return <VideoItemLoading num={5} />
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
          <Maybe test={totalCount !== 0}>
            <FilterWrapper>
              <ContentFilter
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
              />
              <FilterResultHint>结果约 {totalCount} 条</FilterResultHint>
            </FilterWrapper>
          </Maybe>

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
        </LeftPart>

        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={logic.createContent}>
              <PublishLabel text="发布视频" iconSrc={`${ICON_CMD}/link2.svg`} />
            </PublishBtn>

            <Affix offsetTop={50}>
              <TagsBar
                thread={THREAD.VIDEO}
                tags={tagsData}
                active={activeTagData}
                onSelect={logic.onTagSelect}
              />
            </Affix>
          </React.Fragment>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('videosThread'))(
  observer(VideosThreadContainer)
)
