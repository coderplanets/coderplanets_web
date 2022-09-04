/*
 *
 * Cashier
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Modal from '@/widgets/Modal'

import Sidebar from './Sidebar'
import Content from './Content'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Cashier')

type TProps = {
  cashier?: TStore
}

const CashierContainer: FC<TProps> = ({ cashier: store }) => {
  useInit(store)

  const {
    show,
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

export default bond(CashierContainer, 'cashier') as FC<TProps>
