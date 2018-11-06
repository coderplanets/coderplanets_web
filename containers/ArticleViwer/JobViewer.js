import React from 'react'
import Comments from '../Comments'

import {
  ArticleHeader,
  MarkDownRender,
  ArticleContentLoading,
  Maybe,
} from '../../components'

import {
  BodyWrapper,
  CommentsWrapper,
  ArticleTitle,
  ArticleBody,
} from './styles/body'

import JobDigestBar from './JobDigestBar'
import BodyHeader from './BodyHeader'
// import BodyFooter from './BodyFooter'

import { THREAD } from '../../utils'
import * as logic from './logic'

const JobViewer = ({ data, loading }) => {
  const company = { title: data.company, logo: data.companyLogo }

  return (
    <React.Fragment>
      <ArticleHeader
        data={data}
        company={company}
        author={data.author}
        onReaction={logic.onReaction}
        thread={THREAD.JOB}
        showStar={false}
      />
      <BodyWrapper>
        <BodyHeader data={data} thread={THREAD.JOB} />
        <ArticleTitle>{data.title}</ArticleTitle>
        <Maybe test={!loading} loading={<ArticleContentLoading num={2} />}>
          <JobDigestBar />
          <ArticleBody>
            <MarkDownRender body={data.body} />
          </ArticleBody>
        </Maybe>
      </BodyWrapper>

      <CommentsWrapper>
        <Comments />
      </CommentsWrapper>
    </React.Fragment>
  )
}

export default JobViewer
