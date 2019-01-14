/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// import {} from './styles'

import BriefView from './BriefView'
import DigestView from './DigestView'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Footer')

const DynamicBuyMeChuanChuan = dynamic({
  loader: () => import('../../components/BuyMeChuanChuan'),
  /* eslint-disable */
  loading: () => <div />,
  /* eslint-enable */
})

class FooterContainer extends React.Component {
  componentDidMount() {
    const { footer } = this.props
    logic.init(footer)
  }

  render() {
    const { footer } = this.props
    const { showSponsor, curView } = footer

    return (
      <React.Fragment>
        <DynamicBuyMeChuanChuan
          show={showSponsor}
          onClose={logic.toggleSponsorHelper}
          onLogin={logic.onLogin}
          onPay={logic.onPay}
        />

        {curView === 'DIGEST' ? <DigestView /> : <BriefView />}
      </React.Fragment>
    )
  }
}

export default inject(storePlug('footer'))(observer(FooterContainer))
