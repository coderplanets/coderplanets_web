import { FC, memo } from 'react'
import type { TArticle, TThread } from '@/spec'

import { THREAD } from '@/constant'

import Toc from './Toc'
import WorksSticker from './WorkSticker'

type TProps = {
  article: TArticle
  thread: TThread
  show?: boolean
}

const RightSticker: FC<TProps> = ({ article, thread, show }) => {
  switch (thread) {
    case THREAD.WORKS: {
      return <WorksSticker article={article} show={show} />
    }

    default: {
      return <Toc show={show} />
    }
  }
}

export default memo(RightSticker)
