/*
 *
 * VideoViewer
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import ArticleViewerHeader from '@/containers/unit/ArticleViewerHeader'
import ArticleBodyHeader from '@/containers/unit/ArticleBodyHeader'
import Comments from '@/containers/unit/Comments'
import Maybe from '@/components/Maybe'
import VideoPoster from '@/components/VideoPoster'
import VideoInfoCard from '@/components/VideoInfoCard'

import { Wrapper, BodyHeaderWrapper, CommentsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:VideoViewer')

const VideoViewerContainer = ({ videoViewer: store, attachment }) => {
  useInit(store, attachment)

  const { curCommunity, viewingData } = store

  return (
    <Wrapper>
      <ArticleViewerHeader
        data={viewingData}
        author={viewingData.author}
        thread={THREAD.VIDEO}
      />
      <BodyHeaderWrapper>
        <ArticleBodyHeader
          communityRaw={curCommunity.raw}
          thread={THREAD.VIDEO}
          data={viewingData}
          middle="labeler"
        />
      </BodyHeaderWrapper>
      <Maybe test={viewingData.poster}>
        <a href={viewingData.link} rel="noopener noreferrer" target="_blank">
          <VideoPoster poster={viewingData.poster} />
        </a>
        <VideoInfoCard data={viewingData} />
      </Maybe>
      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </Wrapper>
  )
}

export default connectStore(VideoViewerContainer)
