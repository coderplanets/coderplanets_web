import { FC, memo } from 'react'

import type { TThread, TArticle } from '@/spec'
import { THREAD } from '@/constant'

import RepoTitle from './RepoTitle'
import { Wrapper } from '../styles/desktop_view/title'

type TProps = {
  thread: TThread
  data: TArticle
}

const Title: FC<TProps> = ({ thread, data }) => {
  switch (thread) {
    case THREAD.REPO:
      return <RepoTitle repo={data} />

    default:
      return <Wrapper>{data.title}</Wrapper>
  }
}

export default memo(Title)
