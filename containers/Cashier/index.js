/*
 *
 * Cashier
 *
 */

import React from 'react'

import { connectStore, makeDebugger } from '@utils'

import Modal from '@components/Modal'
import Sidebar from './Sidebar'
import Content from './Content'

import { Wrapper } from './styles'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Cashier')

const CashierContainer = ({ cashier }) => {
  useInit(cashier)

  const {
    show,
    accountInfo,
    sidebarView,
    contentView,
    subContentView,
    paymentMethod,
    amount,
    transferAccount,
  } = cashier

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
