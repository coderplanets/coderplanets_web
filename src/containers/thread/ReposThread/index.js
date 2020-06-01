/*
 *
 * ReposThread
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import TagsBar from '@/containers/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'
import Maybe from '@/components/Maybe'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublisherWrapper,
} from './styles'

import {
  useInit,
  inAnchor,
  outAnchor,
  onFilterSelect,
  onPreview,
  onContentCreate,
  onTagSelect,
  onPageChange,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ReposThread')

const ReposThreadContainer = ({ reposThread: store }) => {
  useInit(store)

  const {
    pagedReposData,
    curView,
    filtersData,
    activeTagData,
    activeRepo,
    curRoute,
    accountInfo,
    showFilterBar,
  } = store

  const { mainPath } = curRoute
  const { totalCount } = pagedReposData

  return (
    <Wrapper>
      <LeftPart>
        <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
        <Maybe test={showFilterBar}>
          <FilterWrapper>
            <ContentFilter
              thread={THREAD.REPO}
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              accountInfo={accountInfo}
              totalCount={totalCount}
            />
          </FilterWrapper>
        </Maybe>

        <PagedContents
          data={pagedReposData}
          community={mainPath}
          thread={THREAD.REPO}
          curView={curView}
          active={activeRepo}
          accountInfo={accountInfo}
          onPreview={onPreview}
          onPageChange={onPageChange}
        />
      </LeftPart>

      <RightPart>
        <PublisherWrapper>
          <PublishButton
            label="发布项目"
            labelIconSrc={`${ICON_CMD}/github.svg`}
            onPublish={onContentCreate}
          />
        </PublisherWrapper>

        <Sticky offsetTop={50}>
          <TagsBar
            thread={THREAD.REPO}
            active={activeTagData}
            onSelect={onTagSelect}
          />
        </Sticky>
      </RightPart>
    </Wrapper>
  )
}

export default connectStore(ReposThreadContainer)
