/*
*
* ReposThread
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'

import { makeDebugger, storePlug } from '../../utils'

// import S from './schema'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ReposThread')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../containers/index
class ReposThreadContainer extends React.Component {
  componentWillMount() {
    const { reposThread } = this.props
    logic.init(reposThread)
  }

  render() {
    return (
      <div>
        <h2>ReposThread container!</h2>
        <div>impress me!</div>
      </div>
    )
  }
}

export default inject(storePlug('reposThread'))(observer(ReposThreadContainer))
