/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Waypoint from 'react-waypoint'
import { Affix } from 'antd'

import { ICON_CMD } from 'config'
import { makeDebugger, storePlug, THREAD } from 'utils'

import TagsBar from 'containers/TagsBar'
import Maybe from 'components/Maybe'
import PagedContents from 'components/PagedContents'
import ContentFilter from 'components/ContentFilter'
import PublishLabel from 'components/PublishLabel'

import PublishNote from './PublishNote'

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
const debug = makeDebugger('C:JobsThread')

class JobsThreadContainer extends React.Component {
  componentDidMount() {
    const { jobsThread } = this.props
    logic.init(jobsThread)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { jobsThread } = this.props

    const {
      pagedJobsData,
      curView,
      filtersData,
      activeTagData,
      activeJob,
      accountInfo,
      curCommunity,
      showPublishNote,
      showFilterBar,
    } = jobsThread

    const { totalCount } = pagedJobsData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Waypoint onEnter={logic.inAnchor} onLeave={logic.outAnchor} />
          <Maybe test={showFilterBar}>
            <FilterWrapper>
              <ContentFilter
                thread={THREAD.JOB}
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
                accountInfo={accountInfo}
                totalCount={totalCount}
                onC11NChange={logic.onC11NChange}
              />
            </FilterWrapper>
          </Maybe>

          <PagedContents
            data={pagedJobsData}
            community={curCommunity.raw}
            thread={THREAD.JOB}
            curView={curView}
            active={activeJob}
            accountInfo={accountInfo}
            onPreview={logic.onPreview}
            onPageChange={logic.loadJobs}
          />
        </LeftPart>

        <RightPart>
          <PublishNote show={showPublishNote} />
          <PublishBtn type="primary" onClick={logic.onContentCreate}>
            <PublishLabel text="招贤纳士" iconSrc={`${ICON_CMD}/look_sb.svg`} />
          </PublishBtn>

          <Affix offsetTop={50}>
            <TagsBar
              thread={THREAD.JOB}
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
