/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import {} from './styles'

import { BuyMeChuanChuan } from '../../components'
import BriefView from './BriefView'
import DigestView from './DigestView'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Footer')
/* eslint-enable no-unused-vars */

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
        <BuyMeChuanChuan
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
