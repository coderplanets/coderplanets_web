import { FC, memo } from 'react'

import type { TThread } from '@/spec'
import { THREAD } from '@/constant'

import ArticlesThread from '@/containers//thread/ArticlesThread'
// import ReposThread from '@/containers/thread/ReposThread'
import CperMapThread from '@/containers/thread/CperMapThread'

type TProps = {
  thread: TThread
}

const ThreadContent: FC<TProps> = ({ thread }) => {
  switch (thread) {
    // case THREAD.REPO:
    // return <ReposThread />

    case THREAD.CPER:
      return <CperMapThread />
    case THREAD.MAP:
      return <CperMapThread />

    default:
      return <ArticlesThread />
  }
}

export default memo(ThreadContent)
