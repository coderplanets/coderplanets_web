/*
 *
 * VideosThread
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import TagsBar from '@/containers/unit/TagsBar'

import Sticky from '@/components/Sticky'
import { PublishButton } from '@/components/Buttons'
import Maybe from '@/components/Maybe'
import PagedContents from '@/components/PagedContents'
import ContentFilter from '@/components/ContentFilter'

import {
  Wrapper,
  LeftPart,
  RightPart,
  FilterWrapper,
  PublisherWrapper,
} from './styles'

import {
  useInit,
  onFilterSelect,
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
        <>
          <PublisherWrapper>
            <PublishButton
              label="发布视频"
              labelIconSrc={`${ICON_CMD}/link2.svg`}
              onPublish={onContentCreate}
            />
          </PublisherWrapper>

          <Sticky offsetTop={50}>
            <TagsBar
              thread={THREAD.VIDEO}
              active={activeTagData}
              onSelect={onTagSelect}
            />
          </Sticky>
        </>
      </RightPart>
    </Wrapper>
  )
}

export default connectStore(VideosThreadContainer)
