/*
 *
 * Footer
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import JoinModal from '@/containers/tool/JoinModal'

import HomeLayout from './HomeView'
import ArticleView from './ArticleView'
import WorksArticleLayout from './WorksArticleLayout'
import CommunityView from './CommunityView'
import HostingCommunityView from './HostingCommunityView'

import type { TStore } from '../store'
import { Wrapper } from '../styles'
import { useInit, toggleSponsorHelper, onLogin, onPay } from '../logic'

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

  const {
    showSponsor,
    viewingArticle,
    accountInfo: {
      customization: { bannerLayout },
    },
    // type,
  } = store

  return (
    <Wrapper testid={testid} layout={bannerLayout} metric={metric}>
      <JoinModal />
      {/* <BuyMeChuanChuan
        show={showSponsor}
        accountInfo={accountInfo}
        onClose={toggleSponsorHelper}
        onLogin={onLogin}
        onPay={onPay}
      /> */}

      {metric === METRIC.COMMUNITY && (
        <HomeLayout metric={metric} layout={bannerLayout} />
      )}
      {metric === METRIC.WORKS_ARTICLE && (
        <WorksArticleLayout viewingArticle={viewingArticle} />
      )}
      {/* {type === VIEW.HOME && (
        <CommunityView metric={metric} layout={bannerLayout} />
      )} */}
      {/* {type === VIEW.HOME && (
        <HostingCommunityView metric={metric} layout={bannerLayout} />
      )} */}
      {metric === METRIC.ARTICLE && (
        <ArticleView
          layout={bannerLayout}
          metric={metric}
          viewingArticle={viewingArticle}
        />
      )}
    </Wrapper>
  )
}

export default pluggedIn(FooterContainer) as FC<TProps>
