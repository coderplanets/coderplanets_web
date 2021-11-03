import { FC, memo } from 'react'

import type { TArticleThread } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'

import type { TEditData } from '../spec'

import PostAddOn from './PostAddOn'
import RadarAddOn from './RadarAddOn'
import JobAddOn from './JobAddOn'

type TProps = {
  thread: TArticleThread
  editData: TEditData
}

const Addon: FC<TProps> = ({ thread, editData }) => {
  switch (thread) {
    case ARTICLE_THREAD.JOB: {
      return <JobAddOn editData={editData} />
    }
    case ARTICLE_THREAD.RADAR: {
      return <RadarAddOn editData={editData} />
    }
    default: {
      return <PostAddOn editData={editData} />
    }
  }
}

export default memo(Addon)
