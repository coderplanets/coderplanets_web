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

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideosThread')
/* eslint-enable no-unused-vars */

class VideosThreadContainer extends React.Component {
  constructor(props) {
    super(props)

    const { videosThread } = props
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
      accountInfo,
    } = videosThread

    const { mainPath } = curRoute
    const { totalCount } = pagedVideosData

    return (
      <Wrapper>
        <LeftPadding />
        <LeftPart>
          <FilterWrapper>
            <ContentFilter
              thread={THREAD.VIDEO}
              onSelect={logic.onFilterSelect}
              activeFilter={filtersData}
              accountInfo={accountInfo}
              totalCount={totalCount}
              onCustomChange={logic.onCustomChange}
            />
          </FilterWrapper>

          <PagedContents
            data={pagedVideosData}
            community={mainPath}
            thread={THREAD.VIDEO}
            curView={curView}
            active={activeVideo}
            accountInfo={accountInfo}
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
