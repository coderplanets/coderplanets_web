/*
 *
 * PostsThread
 *
 */

import React from 'react'
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
  BuyMeChuanChuan,
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

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobsThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, jobs, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {jobs.map(job => (
            <Item entry={job} key={shortid.generate()} active={active} />
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
      return <PostsLoading num={3} />
  }
}

class JobsThreadContainer extends React.Component {
  componentWillMount() {
    const { jobsThread } = this.props
    logic.init(jobsThread)
  }

  componentDidMount() {}

  render() {
    const {
      jobsThread: {
        pagedJobsData,
        tagsData,
        curView,
        filtersData,
        activeTagData,
        active,
        accountInfo,
        curRoute,
      },
    } = this.props

    const { mainPath, subPath } = curRoute

    return (
      <React.Fragment>
        {pagedJobsData ? (
          <Wrapper>
            <LeftPadding />
            <BuyMeChuanChuan fromUser={accountInfo} />
            <LeftPart>
              <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
              <FilterWrapper show={curView === TYPE.RESULT}>
                <ContentFilter
                  onSelect={logic.onFilterSelect}
                  activeFilter={filtersData}
                />
                <FilterResultHint>
                  结果约 {pagedJobsData.totalCount} 条
                </FilterResultHint>
              </FilterWrapper>

              <View
                community={mainPath}
                thread={subPath}
                jobs={pagedJobsData.entries}
                curView={curView}
                active={active}
              />

              <Pagi
                left="-10px"
                pageNumber={pagedJobsData.pageNumber}
                pageSize={pagedJobsData.pageSize}
                totalCount={pagedJobsData.totalCount}
                onChange={logic.loadJobs}
              />
            </LeftPart>

            <RightPart>
              <PublishBtn type="primary" onClick={logic.createContent}>
                招贤纳士
              </PublishBtn>

              <Affix offsetTop={50}>
                <TagDivider />
                <TagList
                  tags={tagsData}
                  active={activeTagData}
                  onSelect={logic.onTagSelect}
                />
              </Affix>
            </RightPart>
            <RightPadding />
          </Wrapper>
        ) : (
          <Wrapper>
            <LeftPadding />
            <LeftPart>
              <PostsLoading num={3} />
            </LeftPart>
            <RightPart />
            <RightPadding />
          </Wrapper>
        )}
      </React.Fragment>
    )
  }
}

export default inject(storePlug('jobsThread'))(observer(JobsThreadContainer))

/*
   <iframe
   id="ytplayer"
   type="text/html"
   width="640"
   height="360"
   allowfullscreen="allowfullscreen"
   mozallowfullscreen="mozallowfullscreen"
   msallowfullscreen="msallowfullscreen"
   oallowfullscreen="oallowfullscreen"
   webkitallowfullscreen="webkitallowfullscreen"
   src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
   frameborder="0"
   />
 */
