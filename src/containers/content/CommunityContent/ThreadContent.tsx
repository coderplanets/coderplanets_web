import { FC, memo } from 'react'

import type { TThread } from '@/spec'
import { THREAD } from '@/constant'

import ArticlesThread from '@/containers//thread/ArticlesThread'
// import ReposThread from '@/containers/thread/ReposThread'
import UsersThread from '@/containers/thread/UsersThread'

type TProps = {
  thread: TThread
}

const ThreadContent: FC<TProps> = ({ thread }) => {
  switch (thread) {
    // case THREAD.REPO:
    // return <ReposThread />

    case THREAD.USER:
      return <UsersThread />

    default:
      return <ArticlesThread />
  }
}

export default memo(ThreadContent)
