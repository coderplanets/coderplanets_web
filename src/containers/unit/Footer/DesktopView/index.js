/*
 *
 * Footer
 *
 */

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { contains } from 'ramda'

import { METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import JoinModal from '@/containers/tool/JoinModal'
import Modal from '@/components/Modal'

import BriefView from './BriefView'
import DigestView from './DigestView'
import BusinessNote from './BusinessNote'

import { Wrapper } from '../styles'
import {
  useInit,
  toggleSponsorHelper,
  toggleBusBanner,
  onLogin,
  onPay,
} from '../logic'

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

const FooterContainer = ({ footer: store, metric }) => {
  useInit(store)
  const {
    showSponsor,
    showBusBanner,
    accountInfo,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  const [curView, setCurView] = useState('DIGEST')

  useEffect(() => {
    if (
      contains(metric, [
        METRIC.USER,
        METRIC.DISCOVERY,
        METRIC.ARTICLE,
        METRIC.WORKS_EDITOR,
        METRIC.COMMUNITY_EDITOR,
      ])
    ) {
      setCurView('BRIEF')
    } else if (contains(metric, [METRIC.SUBSCRIBE])) {
      setCurView('BRIEF_LEFT')
    } else {
      setCurView('DIGEST')
    }
  }, [metric])

  return (
    <Wrapper testId="footer" layout={bannerLayout} metric={metric}>
      <Modal show={showBusBanner} showCloseBtn onClose={toggleBusBanner}>
        <BusinessNote />
      </Modal>
      <JoinModal />
      <BuyMeChuanChuan
        show={showSponsor}
        accountInfo={accountInfo}
        onClose={toggleSponsorHelper}
        onLogin={onLogin}
        onPay={onPay}
      />

      {curView === 'DIGEST' ? (
        <DigestView layout={bannerLayout} metric={metric} />
      ) : (
        <BriefView curView={curView} metric={metric} />
      )}
    </Wrapper>
  )
}

export default pluggedIn(FooterContainer)
