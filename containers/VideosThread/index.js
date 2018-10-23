/*
 *
 * VideosThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ICON_CMD } from '../../config'
import TagsBar from '../TagsBar'

import {
  Affix,
  ContentFilter,
  Maybe,
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
  FilterResultHint,
  PublishBtn,
} from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideosThread')
/* eslint-enable no-unused-vars */

class VideosThreadContainer extends React.Component {
  componentDidMount() {
    const { videosThread } = this.props
    logic.init(videosThread)
  }

  render() {
    const { videosThread } = this.props

    const {
      pagedVideosData,
      filtersData,
      tagsData,
      curRoute,
      curView,
      activeVideo,
      activeTagData,
    } = videosThread

    const { mainPath } = curRoute
    const { totalCount } = pagedVideosData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <Maybe test={totalCount !== 0}>
            <FilterWrapper>
              <ContentFilter
                thread={THREAD.VIDEO}
                onSelect={logic.onFilterSelect}
                activeFilter={filtersData}
              />
              <FilterResultHint>结果共 {totalCount} 条</FilterResultHint>
            </FilterWrapper>
          </Maybe>

          <PagedContents
            data={pagedVideosData}
            community={mainPath}
            thread={THREAD.VIDEO}
            curView={curView}
            active={activeVideo}
            onTitleSelect={logic.onTitleSelect}
            onPageChange={logic.loadVideos}
          />
        </LeftPart>

        <RightPart>
          <React.Fragment>
            <PublishBtn type="primary" onClick={logic.createContent}>
              <PublishLabel text="发布视频" iconSrc={`${ICON_CMD}/link2.svg`} />
            </PublishBtn>

            <Affix offsetTop={50}>
              <TagsBar
                thread={THREAD.VIDEO}
                tags={tagsData}
                active={activeTagData}
                onSelect={logic.onTagSelect}
              />
            </Affix>
          </React.Fragment>
        </RightPart>
        <RightPadding />
      </Wrapper>
    )
  }
}

export default inject(storePlug('videosThread'))(
  observer(VideosThreadContainer)
)
