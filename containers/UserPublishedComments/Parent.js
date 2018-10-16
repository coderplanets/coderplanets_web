import React from 'react'

import { Wrapper, Title } from './styles/parent'
import CommunityList from './CommunityList'

import { THREAD } from '../../utils'

const Parent = ({ thread, data }) => {
  switch (thread) {
    case THREAD.JOB: {
      return (
        <Wrapper>
          <Title>{data.job.title}</Title>
          <CommunityList items={data.job.communities} />
        </Wrapper>
      )
    }
    case THREAD.REPO: {
      return (
        <Wrapper>
          <Title>{data.repo.title}</Title>
          <CommunityList items={data.repo.communities} />
        </Wrapper>
      )
    }
    case THREAD.VIDEO: {
      return (
        <Wrapper>
          <Title>{data.video.title}</Title>
          <CommunityList items={data.video.communities} />
        </Wrapper>
      )
    }
    default: {
      return (
        <Wrapper>
          <Title>{data.post.title}</Title>
          <CommunityList items={data.post.communities} />
        </Wrapper>
      )
    }
  }
}

export default Parent
