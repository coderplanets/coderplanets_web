/*
 *
 * PostsThread
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'
import { Affix } from 'antd'

import { ICON_CMD } from '@config'
import { THREAD } from '@constant'
import { connectStore, buildLog } from '@utils'

import TagsBar from '@containers/TagsBar'
import Maybe from '@components/Maybe'
import PagedContents from '@components/PagedContents'
import ContentFilter from '@components/ContentFilter'
import PublishLabel from '@components/PublishLabel'

import PublishNote from './PublishNote'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublishBtn,
} from './styles'

import {
  useInit,
  inAnchor,
  outAnchor,
  onFilterSelect,
  onC11NChange,
  onUserSelect,
  onPreview,
  onContentCreate,
  onTagSelect,
  onPageChange,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:JobsThread')

const JobsThreadContainer = ({ jobsThread }) => {
  useInit(jobsThread)

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
      <LeftPart>
        <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
        <Maybe test={showFilterBar}>
          <FilterWrapper>
            <ContentFilter
              thread={THREAD.JOB}
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              accountInfo={accountInfo}
              totalCount={totalCount}
              onC11NChange={onC11NChange}
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
          onPreview={onPreview}
          onAuthorSelect={onUserSelect}
          onPageChange={onPageChange}
        />
      </LeftPart>

      <RightPart>
        <PublishNote show={showPublishNote} />
        <PublishBtn type="primary" onClick={onContentCreate}>
          <PublishLabel text="招贤纳士" iconSrc={`${ICON_CMD}/look_sb.svg`} />
        </PublishBtn>

        <Affix offsetTop={50}>
          <TagsBar
            thread={THREAD.JOB}
            active={activeTagData}
            onSelect={onTagSelect}
          />
        </Affix>
      </RightPart>
    </Wrapper>
  )
}

export default connectStore(JobsThreadContainer)
