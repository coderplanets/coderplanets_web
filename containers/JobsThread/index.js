/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'

import { ICON_CMD } from '../../config'

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

import { makeDebugger, storePlug, TYPE, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobsThread')
/* eslint-enable no-unused-vars */

class JobsThreadContainer extends React.Component {
  componentDidMount() {
    const { jobsThread } = this.props
    logic.init(jobsThread)
  }

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

    const { mainPath } = curRoute
    const { totalCount } = pagedJobsData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <FilterWrapper show={curView === TYPE.RESULT}>
            <ContentFilter
              thread={THREAD.JOB}
              onSelect={logic.onFilterSelect}
              activeFilter={filtersData}
              accountInfo={accountInfo}
              totalCount={totalCount}
              onCustomChange={logic.onCustomChange}
            />
          </FilterWrapper>

          <PagedContents
            data={pagedJobsData}
            community={mainPath}
            thread={THREAD.JOB}
            curView={curView}
            active={activeJob}
            onTitleSelect={logic.onTitleSelect}
            onPageChange={logic.loadJobs}
          />
        </LeftPart>

        <RightPart>
          <PublishBtn type="primary" onClick={logic.createContent}>
            <PublishLabel text="招贤纳士" iconSrc={`${ICON_CMD}/look_sb.svg`} />
          </PublishBtn>

          <Affix offsetTop={50}>
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
