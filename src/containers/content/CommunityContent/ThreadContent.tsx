import { FC, memo } from 'react'

import type { TThread } from '@/spec'
import { THREAD } from '@/constant'

import ArticlesThread from '@/containers//thread/ArticlesThread'
// import ReposThread from '@/containers/thread/ReposThread'
import CperMapThread from '@/containers/thread/CperMapThread'

import WipThread from './WipThread'

type TProps = {
  thread: TThread
}

const ThreadContent: FC<TProps> = ({ thread }) => {
  switch (thread) {
    case THREAD.KANBAN: {
      return <WipThread title="看板" />
    }

    case THREAD.INTERVIEW: {
      return <WipThread title="开发者访谈" />
    }

    case THREAD.TEAM: {
      return <WipThread title="团队" />
    }

    case THREAD.PRODUCT: {
      return <WipThread title="作品展示" />
    }

    case THREAD.GUIDE: {
      return <WipThread title="酷导航" />
    }

    case THREAD.ACCOUNT: {
      return <WipThread title="违规账户信息" />
    }

    case THREAD.CPER:
      return <CperMapThread />
    case THREAD.MAP:
      return <CperMapThread />

    default:
      return <ArticlesThread />
  }
}

export default memo(ThreadContent)
