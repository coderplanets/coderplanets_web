/*
*
* VideosThread
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

// import { } from './styles'

import { makeDebugger, storePlug } from '../../utils'

// import S from './schema'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideosThread')
/* eslint-enable no-unused-vars */

class VideosThreadContainer extends React.Component {
  componentWillMount() {
    const { videosThread } = this.props
    logic.init(videosThread)
  }

  render() {
    return (
      <div>
        <h2>VideosThread container!</h2>
        <div>impress me!</div>
      </div>
    )
  }
}

export default inject(storePlug('videosThread'))(
  observer(VideosThreadContainer)
)
