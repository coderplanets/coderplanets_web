/*
 *
 * VideosThread
 *
 */

import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { Affix } from 'antd'

import Maybe from '@components/Maybe'
import PagedContents from '@components/PagedContents'
import ContentFilter from '@components/ContentFilter'
import PublishLabel from '@components/PublishLabel'
import { ICON_CMD } from '@config'
import { makeDebugger, storePlug, THREAD } from '@utils'
import TagsBar from '../TagsBar'

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
  onFilterSelect,
  onC11NChange,
  onPreview,
  onContentCreate,
  onTagSelect,
  loadVideos,
} from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:VideosThread')

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
      <LeftPadding />
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
          onPageChange={loadVideos}
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
      <RightPadding />
    </Wrapper>
  )
}

export default inject(storePlug('videosThread'))(
  observer(VideosThreadContainer)
)
