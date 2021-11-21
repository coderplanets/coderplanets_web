/*
 *
 * Footer
 *
 */

import { FC } from 'react'
// import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import JoinModal from '@/containers/tool/JoinModal'

import HomeLayout from './HomeLayout'
import ArticleLayout from './ArticleLayout'
import WorksArticleLayout from './WorksArticleLayout'
import GeneralLayout from './GeneralLayout'
// import CommunityView from './CommunityView'
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

  const { viewingArticle, c11n } = store

  return (
    <Wrapper testid={testid} layout={c11n.bannerLayout} metric={metric}>
      <JoinModal />
      {metric === METRIC.COMMUNITY && (
        <HomeLayout metric={metric} layout={c11n.bannerLayout} />
      )}
      {metric === METRIC.WORKS_ARTICLE && (
        <WorksArticleLayout viewingArticle={viewingArticle} />
      )}
      {metric === METRIC.COOL_GUIDE && (
        <GeneralLayout metric={METRIC.COOL_GUIDE} />
      )}
      {metric === METRIC.MEETUPS && <GeneralLayout metric={METRIC.MEETUPS} />}
      {metric === METRIC.WORKS && <GeneralLayout metric={METRIC.WORKS} />}
      {metric === METRIC.HAVE_A_DRINK && (
        <GeneralLayout metric={METRIC.HAVE_A_DRINK} />
      )}
      {/* {type === VIEW.HOME && (
        <CommunityView metric={metric} layout={bannerLayout} />
      )} */}
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
