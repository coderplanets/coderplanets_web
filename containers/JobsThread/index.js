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
  PostsLoading,
  Pagi,
  EmptyThread,
  ContentFilter,
  BuyMeChuanChuan,
  Maybe,
  JobItem,
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

import { uid, makeDebugger, storePlug, TYPE, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobsThread')
/* eslint-enable no-unused-vars */

const View = ({ community, thread, entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <JobItem
              entry={entry}
              key={uid.gen()}
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
    const { jobsThread } = this.props

    const {
      pagedJobsData,
      tagsData,
      curView,
      filtersData,
      activeTagData,
      activeJob,
      accountInfo,
      curRoute,
    } = jobsThread

    const { mainPath, subPath } = curRoute
    const { entries, totalCount, pageNumber, pageSize } = pagedJobsData

    return (
      <Wrapper>
        <LeftPadding />
        <BuyMeChuanChuan fromUser={accountInfo} />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={totalCount !== 0}>
            <FilterWrapper show={curView === TYPE.RESULT}>
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
            active={activeJob}
          />

          <Pagi
            left="-10px"
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalCount={totalCount}
            onChange={logic.loadJobs}
          />
        </LeftPart>

        <RightPart>
          <PublishBtn type="primary" onClick={logic.createContent}>
            招贤纳士
          </PublishBtn>

          <Affix offsetTop={50}>
            <TagDivider />
            <TagsBar
              thread={THREAD.JOB}
              tags={tagsData}
              active={activeTagData}
              onSelect={logic.onTagSelect}
            />
          </Affix>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('jobsThread'))(observer(JobsThreadContainer))
