/*
 *
 * Footer
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import { pluggedIn, buildLog } from '@/utils'

import JoinModal from '@/containers/tool/JoinModal'

import type { TStore } from '../store'
import { VIEW } from '../constants'

import HomeView from './HomeView'
import ArticleView from './ArticleView'
import CommunityView from './CommunityView'
import HostingCommunityView from './HostingCommunityView'

import { Wrapper } from '../styles'
import { useInit, toggleSponsorHelper, onLogin, onPay } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Footer')

export const BuyMeChuanChuan = dynamic(
  () => import('@/components/BuyMeChuanChuan'),
  {
    /* eslint-disable react/display-name */
    loading: () => <div />,
    ssr: false,
  },
)

type TProps = {
  footer?: TStore
  metric?: string // TODO
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
    accountInfo,
    viewingArticle,
    accountInfo: {
      customization: { bannerLayout },
    },
    type,
  } = store

  return (
    <Wrapper testid={testid} layout={bannerLayout} metric={metric}>
      <JoinModal />
      <BuyMeChuanChuan
        show={showSponsor}
        accountInfo={accountInfo}
        onClose={toggleSponsorHelper}
        onLogin={onLogin}
        onPay={onPay}
      />

      {type === VIEW.HOME && <HomeView metric={metric} layout={bannerLayout} />}
      {/* {type === VIEW.HOME && (
        <CommunityView metric={metric} layout={bannerLayout} />
      )} */}
      {/* {type === VIEW.HOME && (
        <HostingCommunityView metric={metric} layout={bannerLayout} />
      )} */}
      {type === VIEW.ARTICLE && (
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
