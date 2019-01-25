import React from 'react'

import DotDivider from 'components/DotDivider'
import CommunityList from 'components/CommunityList'
import { THREAD } from 'utils'
import { Wrapper, Title } from './styles/parent'

import CommentCount from './CommentsCount'

const Parent = ({ thread, data }) => {
  switch (thread) {
    case THREAD.JOB:
      return (
        <Wrapper>
          <Title>
            {data.job.title} [{data.job.company}]
          </Title>
          <DotDivider />
          <CommentCount floor={data.floor} total={data.job.commentsCount} />
          <CommunityList items={data.job.communities} />
        </Wrapper>
      )

    case THREAD.REPO:
      return (
        <Wrapper>
          <Title>
            {data.repo.ownerName} / {data.repo.title}
          </Title>
          <DotDivider />
          <CommentCount floor={data.floor} total={data.repo.commentsCount} />
          <CommunityList items={data.repo.communities} />
        </Wrapper>
      )

    case THREAD.VIDEO:
      return (
        <Wrapper>
          <Title>{data.video.title}</Title>
          <DotDivider />
          <CommentCount floor={data.floor} total={data.video.commentsCount} />
          <CommunityList items={data.video.communities} />
        </Wrapper>
      )

    default:
      return (
        <Wrapper>
          <Title>{data.post.title}</Title>
          <DotDivider />
          <CommentCount floor={data.floor} total={data.post.commentsCount} />
          <CommunityList items={data.post.communities} />
        </Wrapper>
      )
  }
}

export default Parent
