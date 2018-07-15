/*
 *
 * VideosThread
 *
 */

import React from 'react'
import R from 'ramda'

import shortid from 'shortid'
import { inject, observer } from 'mobx-react'

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

import { makeDebugger, storePlug, TYPE } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideosThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map((video, index) => (
            <Item
              data={video}
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

class VideosThreadContainer extends React.Component {
  componentWillMount() {
    const { videosThread } = this.props
    logic.init(videosThread)
  }

  render() {
    const {
      videosThread: {
        pagedVideosData,
        filtersData,
        tagsData,
        curRoute,
        curView,
        activeVideo,
        activeTagData,
      },
    } = this.props

    const { entries, pageNumber, pageSize, totalCount } = pagedVideosData
    const { mainPath, subPath } = curRoute

    return (
      <Wrapper>
        <React.Fragment>
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

            {R.isEmpty(entries) ? (
              <PostsLoading num={5} />
            ) : (
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
            )}
          </LeftPart>

          <RightPart>
            {R.isEmpty(pagedVideosData.entries) ? null : (
              <React.Fragment>
                <PublishBtn type="primary" onClick={logic.createContent}>
                  提<Space right="10px" />交<Space right="10px" />视<Space right="10px" />频
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

export default inject(storePlug('videosThread'))(
  observer(VideosThreadContainer)
)
