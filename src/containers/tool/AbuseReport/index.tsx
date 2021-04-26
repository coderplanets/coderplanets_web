//

/*
 *
 * AbuseReport
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'

import Modal from '@/components/Modal'

import Header from './Header'
import Footer from './Footer'
import ReportContent from './ReportContent'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, close } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AbuseReport')

type TProps = {
  abuseReport?: TStore
  testid: string
}

const AbuseReportContainer: React.FC<TProps> = ({
  abuseReport: store,
  testid,
}) => {
  useInit(store)
  const { show, type, view, itemsData, activeItem } = store

  return (
    <Modal width="500px" show={show} showCloseBtn onClose={() => close()}>
      <Wrapper testid={testid}>
        <Header type={type} />
        <ReportContent view={view} items={itemsData} activeItem={activeItem} />
        <Footer view={view} />
      </Wrapper>
    </Modal>
  )
}

export default pluggedIn(AbuseReportContainer)
