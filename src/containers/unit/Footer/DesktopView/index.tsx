/*
 *
 * Footer
 *
 */

import { FC } from 'react'
import { includes } from 'ramda'
// import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import { HCN, METRIC } from '@/constant'

import JoinModal from '@/containers/tool/JoinModal'

import HomeLayout from './HomeLayout'
import ArticleLayout from './ArticleLayout'
import WorksArticleLayout from './WorksArticleLayout'
import GeneralLayout from './GeneralLayout'
// import HostingCommunityView from './HostingCommunityView'

import type { TStore } from '../store'
import { Wrapper } from '../styles'
import { useInit } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Footer')

type TProps = {
  footer?: TStore
  metric?: TMetric
  testid?: string
}

const FooterContainer: FC<TProps> = ({
  footer: store,
  metric,
  testid = 'footer',
}) => {
  useInit(store, metric)

  const { viewingArticle, curCommunity, c11n, onlineStatus } = store
  const isHome = curCommunity.raw === HCN

  const isGeneral = includes(metric, [
    METRIC.COOL_GUIDE,
    METRIC.MEETUPS,
    METRIC.WORKS,
    METRIC.SUBSCRIBE,
    METRIC.SPONSOR,
    METRIC.SUPPORT_US,
    METRIC.HAVE_A_DRINK,
    METRIC.EXPLORE,
    METRIC.FRIENDS,
  ])

  return (
    <Wrapper testid={testid} layout={c11n.bannerLayout} metric={metric}>
      <JoinModal />
      {metric === METRIC.COMMUNITY && isHome && (
        <HomeLayout
          metric={metric}
          layout={c11n.bannerLayout}
          onlineStatus={onlineStatus}
        />
      )}

      {metric === METRIC.COMMUNITY && !isHome && (
        <GeneralLayout metric={metric} title={curCommunity.title} />
      )}

      {metric === METRIC.WORKS_ARTICLE && (
        <WorksArticleLayout viewingArticle={viewingArticle} />
      )}

      {isGeneral && <GeneralLayout metric={metric} />}

      {/* {type === VIEW.HOME && (
        <HostingCommunityView metric={metric} layout={bannerLayout} />
      )} */}
      {metric === METRIC.ARTICLE && (
        <ArticleLayout
          layout={c11n.bannerLayout}
          metric={metric}
          article={viewingArticle}
        />
      )}
    </Wrapper>
  )
}

export default pluggedIn(FooterContainer) as FC<TProps>
