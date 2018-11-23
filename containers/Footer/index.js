/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

// import {} from './styles'

// import { BuyMeChuanChuan } from '../../components'
import BriefView from './BriefView'
import DigestView from './DigestView'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Footer')
/* eslint-enable no-unused-vars */

let DynamicBuyMeChuanChuan = null

DynamicBuyMeChuanChuan = dynamic({
  loader: () => import('../../components/BuyMeChuanChuan'),
  ssr: false,
})

class FooterContainer extends React.Component {
  constructor(props) {
    super(props)
    const { footer } = props
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
        />

        {curView === 'DIGEST' ? (
          <DigestView toggleSponsorHelper={logic.toggleSponsorHelper} />
        ) : (
          <BriefView toggleSponsorHelper={logic.toggleSponsorHelper} />
        )}
      </React.Fragment>
    )
  }
}

export default inject(storePlug('footer'))(observer(FooterContainer))
