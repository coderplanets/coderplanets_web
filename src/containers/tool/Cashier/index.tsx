/*
 *
 * Cashier
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Modal from '@/widgets/Modal'

import type { TContentView, TAmount, TSubContentView } from './spec'
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
          sidebarView={sidebarView as TContentView}
          subContentView={subContentView as TSubContentView}
          paymentMethod={paymentMethod}
          amount={amount as TAmount}
        />
        <Content
          contentView={contentView as TContentView}
          subContentView={subContentView as TSubContentView}
          amount={amount as TAmount}
          paymentMethod={paymentMethod}
          transferAccount={transferAccount}
        />
      </Wrapper>
    </Modal>
  )
}

export default bond(CashierContainer, 'cashier') as FC<TProps>
