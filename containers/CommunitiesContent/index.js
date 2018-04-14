/*
*
* CommunitiesContent
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

const debug = makeDebugger('C:CommunitiesContent')

class CommunitiesContentContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.communitiesContent)
  }

  render() {
    return <div>CommunitiesContent container!</div>
  }
}

export default inject(storeSelector('communitiesContent'))(
  observer(CommunitiesContentContainer)
)
