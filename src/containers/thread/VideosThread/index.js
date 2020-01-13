/*
 *
 * VideosThread
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { ICON_CMD } from '@config'
import { THREAD } from '@constant'
import { connectStore, buildLog } from '@utils'

import TagsBar from '@containers/TagsBar'
import Maybe from '@components/Maybe'
import PagedContents from '@components/PagedContents'
import ContentFilter from '@components/ContentFilter'
import PublishLabel from '@components/PublishLabel'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublishBtn,
} from './styles'

import {
  useInit,
  onFilterSelect,
  onC11NChange,
  onPreview,
  onContentCreate,
  onTagSelect,
  onPageChange,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:VideosThread')

const VideosThreadContainer = ({ videosThread }) => {
  useInit(videosThread)

  const {
    pagedVideosData,
    filtersData,
    curRoute,
    curView,
    activeVideo,
    activeTagData,
    accountInfo,
    showFilterBar,
  } = videosThread

  const { mainPath } = curRoute
  const { totalCount } = pagedVideosData

  return (
    <Wrapper>
      <LeftPart>
        <Maybe test={showFilterBar}>
          <FilterWrapper>
            <ContentFilter
              thread={THREAD.VIDEO}
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              accountInfo={accountInfo}
              totalCount={totalCount}
              onC11NChange={onC11NChange}
            />
          </FilterWrapper>
        </Maybe>

        <PagedContents
          data={pagedVideosData}
          community={mainPath}
          thread={THREAD.VIDEO}
          curView={curView}
          active={activeVideo}
          accountInfo={accountInfo}
          onPreview={onPreview}
          onPageChange={onPageChange}
        />
      </LeftPart>

      <RightPart>
        <React.Fragment>
          <PublishBtn type="primary" onClick={onContentCreate}>
            <PublishLabel text="发布视频" iconSrc={`${ICON_CMD}/link2.svg`} />
          </PublishBtn>

          <Affix offsetTop={50}>
            <TagsBar
              thread={THREAD.VIDEO}
              active={activeTagData}
              onSelect={onTagSelect}
            />
          </Affix>
        </React.Fragment>
      </RightPart>
    </Wrapper>
  )
}

export default connectStore(VideosThreadContainer)
