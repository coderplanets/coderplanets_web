/*
*
* AccountEditor
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:AccountEditor')
/* eslint-enable no-unused-vars */

class AccountEditorContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.accountEditor)
  }

  render() {
    return (
      <div>
        <h2>AccountEditor container!</h2>
      </div>
    )
  }
}

export default inject(storeSelector('accountEditor'))(
  observer(AccountEditorContainer)
)
