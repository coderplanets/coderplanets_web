import { FC, memo } from 'react'

import type { TMetric, TArticle } from '@/spec'
import { METRIC } from '@/constant'

import HomeCommunity from './HomeCommunity'
// import Community from './Community'
import Article from './Article'
import Community from './Community'
import WorksArticle from './WorksArticle'
import General from './General'

export type TProps = {
  metric?: TMetric
  article?: TArticle
  title?: string
  noBottomBorder?: boolean
}

const TopInfo: FC<TProps> = ({
  metric = METRIC.COMMUNITY,
  title = '',
  ...restProps
}) => {
  if (METRIC.COMMUNITY && title !== '') {
    return <Community title={title} />
  }

  switch (metric) {
    case METRIC.COMMUNITY: {
      return <HomeCommunity />
    }
    case METRIC.WORKS_ARTICLE: {
      return <WorksArticle {...restProps} />
    }
    // case METRIC.EXPLORE: {
    //   return <General title="发现社区" />
    // }
    case METRIC.COOL_GUIDE: {
      return <General title="酷导航" />
    }
    case METRIC.WORKS: {
      return <General title="作品集市" />
    }
    case METRIC.MEETUPS: {
      return <General title="小聚" />
    }
    case METRIC.FRIENDS: {
      return <General title="友情链接" />
    }
    case METRIC.SUPPORT_US: {
      return <General title="支持我们" />
    }
    case METRIC.SPONSOR: {
      return <General title="特别感谢" />
    }
    case METRIC.SUBSCRIBE: {
      return <General title="内容订阅" />
    }

    case METRIC.HAVE_A_DRINK: {
      return <General title="来一杯" />
    }
    // case VIEW.HOSTING_COMMUNITY: {
    //   return <Community {...restProps} />
    // }
    case METRIC.ARTICLE: {
      return <Article {...restProps} />
    }
    default:
      return <HomeCommunity />
  }
}

export default memo(TopInfo)
