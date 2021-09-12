import { FC, memo } from 'react'

import type { TMetric, TArticle } from '@/spec'
import { METRIC } from '@/constant'

import HomeCommunity from './HomeCommunity'
// import Community from './Community'
import Article from './Article'
import WorksArticle from './WorksArticle'
import CoolGuide from './CoolGuide'

export type TProps = {
  metric?: TMetric
  article?: TArticle
  title?: string
  noBottomBorder?: boolean
}

const TopInfo: FC<TProps> = ({ metric = METRIC.COMMUNITY, ...restProps }) => {
  switch (metric) {
    case METRIC.COMMUNITY: {
      return <HomeCommunity {...restProps} />
    }
    // case VIEW.COMMUNITY: {
    //   return <Community {...restProps} />
    // }
    case METRIC.WORKS_ARTICLE: {
      return <WorksArticle {...restProps} />
    }
    case METRIC.COOL_GUIDE: {
      return <CoolGuide />
    }

    // case VIEW.HOSTING_COMMUNITY: {
    //   return <Community {...restProps} />
    // }
    case METRIC.ARTICLE: {
      return <Article {...restProps} />
    }
    default:
      return <HomeCommunity {...restProps} />
  }
}

export default memo(TopInfo)
