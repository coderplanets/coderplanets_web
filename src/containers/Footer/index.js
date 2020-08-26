/*
 *
 * Footer
 *
 */

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { contains } from 'ramda'

import { ROUTE } from '@/constant'
import { connectStore, buildLog, getRoutePathList } from '@/utils'

import JoinModal from '@/containers/JoinModal'
import Modal from '@/components/Modal'

import BriefView from './BriefView'
import DigestView from './DigestView'
import BusinessNote from './BusinessNote'

import { Wrapper } from './styles'
import {
  useInit,
  toggleSponsorHelper,
  toggleBusBanner,
  onLogin,
  onPay,
} from './logic'

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

const FooterContainer = ({ footer: store }) => {
  useInit(store)
  const { showSponsor, showBusBanner, accountInfo, layout } = store

  const router = useRouter()
  const [mainPath, subPath] = getRoutePathList(router.asPath)

  const [curView, setCurView] = useState('DIGEST')

  useEffect(() => {
    if (
      contains(mainPath, [ROUTE.USER, ROUTE.DISCOVERY]) ||
      contains(subPath, [ROUTE.POST, ROUTE.JOB, ROUTE.VIDEO, ROUTE.REPO])
    ) {
      setCurView('BRIEF')
    } else if (contains(mainPath, [ROUTE.SUBSCRIBE])) {
      setCurView('BRIEF_LEFT')
    } else {
      setCurView('DIGEST')
    }
  }, [mainPath, subPath])

  return (
    <Wrapper testid="footer" layout={layout}>
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
        <DigestView layout={layout} />
      ) : (
        <BriefView curView={curView} />
      )}
    </Wrapper>
  )
}

export default connectStore(FooterContainer)
