import { FC, memo } from 'react'

import type { TArticleThread } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'

import JobAddOn from './JobAddOn'
import PostAddOn from './PostAddOn'

import { editOnChange } from '../logic'

type TProps = {
  thread: TArticleThread
}

const Addon: FC<TProps> = ({ thread }) => {
  switch (thread) {
    case ARTICLE_THREAD.JOB: {
      return <JobAddOn />
    }

    default: {
      return <PostAddOn onLinkChange={(v) => editOnChange(v, 'linkAddr')} />
    }
  }
}

export default memo(Addon)
