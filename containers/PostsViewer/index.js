/*
*
* PostsViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { Button } from '../../components'
import { makeDebugger, storeSelector } from '../../utils/functions'
// import logic from './logic'
import * as logic from './logic'
import { Wrapper } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostsViewer')
/* eslint-enable no-unused-vars */

class PostsViewerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsViewer)
  }
  componentWillUnmount() {
    logic.unInit()
  }

  render() {
    /* debug('postsViewer: ', this.props.postsViewer.data) */
    return (
      <Wrapper>
        PostsViewer container!
        <div>
          <Button type="primary" onClick={logic.createPost}>
            createPost (mutate.)
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.postList}>
            postList (query)
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.cheatsheet}>
            cheatsheeti
          </Button>
        </div>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('postsViewer'))(
  observer(PostsViewerContainer)
)
