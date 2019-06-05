/*
 *
 * ReposThread
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'
import { Affix } from 'antd'

import { ICON_CMD } from '@config'
import { connectStore, buildLog, THREAD } from '@utils'

import PagedContents from '@components/PagedContents'
import ContentFilter from '@components/ContentFilter'
import PublishLabel from '@components/PublishLabel'
import TagsBar from '@containers/TagsBar'
import Maybe from '@components/Maybe'

import {
  Wrapper,
  LeftPadding,
  RightPadding,
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
  onPreview,
  onContentCreate,
  onTagSelect,
  loadRepos,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ReposThread')

const ReposThreadContainer = ({ reposThread }) => {
  useInit(reposThread)

  const {
    pagedReposData,
    curView,
    filtersData,
    activeTagData,
    activeRepo,
    curRoute,
    accountInfo,
    showFilterBar,
  } = reposThread

  const { mainPath } = curRoute
  const { totalCount } = pagedReposData

  return (
    <Wrapper>
      <LeftPadding />
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
              onC11NChange={onC11NChange}
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
          onPageChange={loadRepos}
        />
      </LeftPart>

      <RightPart>
        <PublishBtn type="primary" onClick={onContentCreate}>
          <PublishLabel text="发布项目" iconSrc={`${ICON_CMD}/github.svg`} />
        </PublishBtn>

        <Affix offsetTop={50}>
          <TagsBar
            thread={THREAD.REPO}
            active={activeTagData}
            onSelect={onTagSelect}
          />
        </Affix>
      </RightPart>
      <RightPadding />
    </Wrapper>
  )
}

export default connectStore(ReposThreadContainer)
