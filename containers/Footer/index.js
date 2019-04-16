/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

import { makeDebugger, storePlug } from 'utils'

import Modal from 'components/Modal'

import BriefView from './BriefView'
import DigestView from './DigestView'

import BussinessNote from './BussinessNote'

import {
  init,
  toggleSponsorHelper,
  toggleBusBanner,
  onLogin,
  onPay,
} from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Footer')

const DynamicBuyMeChuanChuan = dynamic({
  loader: () => import('components/BuyMeChuanChuan'),
  /* eslint-disable */
  loading: () => <div />,
  /* eslint-enable */
})

class FooterContainer extends React.Component {
  componentDidMount() {
    const { footer } = this.props
    init(footer)
  }

  render() {
    const { footer } = this.props
    const { showSponsor, showBusBanner, curView } = footer

    return (
      <div data-testid="footer">
        <Modal show={showBusBanner} showCloseBtn onClose={toggleBusBanner}>
          <BussinessNote />
        </Modal>

        <DynamicBuyMeChuanChuan
          show={showSponsor}
          onClose={toggleSponsorHelper}
          onLogin={onLogin}
          onPay={onPay}
        />

        {curView === 'DIGEST' ? <DigestView /> : <BriefView />}
      </div>
    )
  }
}

export default inject(storePlug('footer'))(observer(FooterContainer))
