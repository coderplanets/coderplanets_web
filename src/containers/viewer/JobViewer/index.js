/*
 *
 * JobViewer
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Comments from '@/containers/Comments'
import ArticleViewerHeader from '@/containers/ArticleViewerHeader'
import ArticleBodyHeader from '@/containers/ArticleBodyHeader'
import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import { ArticleContentLoading } from '@/components/LoadingEffects'

import DigestBar from './DigestBar'

import {
  BodyWrapper,
  CommentsWrapper,
  ArticleTitle,
  ArticleBody,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:JobViewer')

const JobViewerContainer = ({ jobViewer: store, attachment }) => {
  useInit(store, attachment)

  const { curCommunity, viewingData, loading } = store

  const company = {
    title: viewingData.company,
    link: viewingData.companyLink,
    logo: viewingData.companyLogo,
  }

  return (
    <>
      <ArticleViewerHeader
        data={viewingData}
        company={company}
        author={viewingData.author}
        thread={THREAD.JOB}
        showStar={false}
      />
      <BodyWrapper>
        <ArticleBodyHeader
          communityRaw={curCommunity.raw}
          thread={THREAD.JOB}
          data={viewingData}
        />
        <ArticleTitle>{viewingData.title}</ArticleTitle>
        <Maybe test={!loading} loading={<ArticleContentLoading num={2} />}>
          <DigestBar data={viewingData} />
          <ArticleBody>
            <MarkDownRender body={viewingData.body} />
          </ArticleBody>
        </Maybe>
      </BodyWrapper>

      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </>
  )
}

export default connectStore(JobViewerContainer)
