/*
 *
 * Cashier
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Modal } from '../../components'
// import PaymentView from './PaymentView'
import Sidebar from './Sidebar'
import Content from './Content'

import { Wrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Cashier')
/* eslint-enable no-unused-vars */

class CashierContainer extends React.Component {
  componentDidMount() {
    const { cashier } = this.props
    logic.init(cashier)
  }

  render() {
    const { cashier } = this.props
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
      <Modal width="520px" show={show} showCloseBtn onClose={logic.onClose}>
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
}

export default inject(storePlug('cashier'))(observer(CashierContainer))
