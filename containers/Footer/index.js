/*
 *
 * Footer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import {} from './styles'

import { makeDebugger, storePlug } from '../../utils'
import BriefView from './BriefView'
import DigestView from './DigestView'

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
      <div>
        {curView === 'DIGEST' ? (
          <DigestView />
        ) : (
          <BriefView showSponsor={showSponsor} />
        )}
      </div>
    )
  }
}

export default inject(storePlug('footer'))(observer(FooterContainer))
