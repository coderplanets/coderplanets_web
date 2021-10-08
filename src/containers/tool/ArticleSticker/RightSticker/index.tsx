import { FC, memo } from 'react'
import type { TArticle, TThread } from '@/spec'

import { THREAD } from '@/constant'

import DefaultSticker from './DefaultSticker'
import WorksSticker from './WorksSticker'

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
      return <DefaultSticker article={article} show={show} />
    }
  }
}

export default memo(RightSticker)
