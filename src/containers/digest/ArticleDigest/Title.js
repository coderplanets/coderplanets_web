import React from 'react'

import { THREAD } from '@/constant'

import RepoTitle from './RepoTitle'
import { Wrapper } from './styles/title'

const Title = ({ thread, data }) => {
  switch (thread) {
    case THREAD.REPO:
      return <RepoTitle repo={data} />

    default:
      return <Wrapper>{data.title}</Wrapper>
  }
}

export default React.memo(Title)
