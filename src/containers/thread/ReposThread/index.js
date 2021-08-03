/*
 *
 * ReposThread
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
import PagedArticles from '@/components/PagedArticles'
import ArticlesFilter from '@/components/ArticlesFilter'
import Maybe from '@/components/Maybe'
import ViewportTracker from '@/components/ViewportTracker'

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
        <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
        <Maybe test={showFilterBar}>
          <FilterWrapper>
            <ArticlesFilter
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              totalCount={totalCount}
            />
          </FilterWrapper>
        </Maybe>

        <PagedArticles
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

export default pluggedIn(ReposThreadContainer)
