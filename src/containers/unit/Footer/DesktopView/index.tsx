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
import { bond } from '@/utils/mobx'
import { METRIC } from '@/constant'

import JoinModal from '@/containers/tool/JoinModal'

import HomeLayout from './HomeLayout'
// import ArticleLayout from './ArticleLayout'
// import WorksArticleLayout from './WorksArticleLayout'
import GeneralLayout from './GeneralLayout'
import SimpleLayout from './SimpleLayout'
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

  const { onlineStatus } = store

  const isGeneral = includes(metric, [
    METRIC.COOL_GUIDE,
    METRIC.MEETUPS,
    METRIC.WORKS,
    METRIC.SUBSCRIBE,
    METRIC.SPONSOR,
    METRIC.SUPPORT_US,
    METRIC.HAVE_A_DRINK,
    METRIC.FRIENDS,
  ])

  return (
    <Wrapper testid={testid} metric={metric}>
      <JoinModal />
      {metric === METRIC.EXPLORE && (
        <HomeLayout metric={metric} onlineStatus={onlineStatus} />
      )}

      {metric === METRIC.COMMUNITY && (
        // <GeneralLayout metric={metric} title={curCommunity.title} />
        <SimpleLayout />
      )}

      {/* {metric === METRIC.WORKS_ARTICLE && (
        <WorksArticleLayout viewingArticle={viewingArticle} />
      )} */}

      {isGeneral && <GeneralLayout metric={metric} />}

      {/* {type === VIEW.HOME && (
        <HostingCommunityView metric={metric}  />
      )} */}
      {metric === METRIC.ARTICLE && (
        <SimpleLayout />
        // <ArticleLayout
        //   metric={metric}
        //   article={viewingArticle}
        // />
      )}
    </Wrapper>
  )
}

export default bond(FooterContainer, 'footer') as FC<TProps>
