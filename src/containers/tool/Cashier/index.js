/*
 *
 * Cashier
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import Modal from '@/components/Modal'
import Sidebar from './Sidebar'
import Content from './Content'

import { Wrapper } from './styles'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Cashier')

const CashierContainer = ({ cashier: store }) => {
  useInit(store)

  const {
    show,
    accountInfo,
    sidebarView,
    contentView,
    subContentView,
    paymentMethod,
    amount,
    transferAccount,
  } = store

  return (
    <Modal width="520px" show={show} showCloseBtn onClose={onClose}>
      <Wrapper>
        <Sidebar
          accountInfo={accountInfo}
          sidebarView={sidebarView}
          subContentView={subContentView}
          paymentMethod={paymentMethod}
          amount={amount}
        />
        <Content
          contentView={contentView}
          subContentView={subContentView}
          amount={amount}
          paymentMethod={paymentMethod}
          transferAccount={transferAccount}
        />
      </Wrapper>
    </Modal>
  )
}

export default connectStore(CashierContainer)
