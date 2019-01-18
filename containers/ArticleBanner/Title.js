import React from 'react'

// import { ICON_CMD } from '../../config'
import RepoTitle from './RepoTitle'
import { Wrapper } from './styles/title'

import { THREAD } from '../../utils'

const Title = ({ thread, data }) => {
  switch (thread) {
    case THREAD.REPO:
      return <RepoTitle repo={data} />

    default:
      return <Wrapper>{data.title}</Wrapper>
  }
}

export default Title
