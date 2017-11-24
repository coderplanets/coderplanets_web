/*
*
* PostsViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils/functions'
import * as logic from './logic'
import { Wrapper } from './styles'

const debug = makeDebugger('C:PostsViewer')

class PostsViewerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.postsViewer)
  }

  render() {
    debug('postsViewer: ', this.props.postsViewer.data)
    return <Wrapper>PostsViewer container!</Wrapper>
  }
}

export default inject(storeSelector('postsViewer'))(
  observer(PostsViewerContainer)
)
