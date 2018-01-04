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
import * as logic from './logic'
import { Wrapper } from './styles'

const debug = makeDebugger('C:PostsViewer')

class PostsViewerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.postsViewer)
  }

  render() {
    debug('postsViewer: ', this.props.postsViewer.data)
    return (
      <Wrapper>
        PostsViewer container!
        <div>
          <Button type="primary" onClick={logic.createPost}>
            createPost (mutate)
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.postList}>
            postList (query)
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={logic.cheatsheet}>
            cheatsheet
          </Button>
        </div>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('postsViewer'))(
  observer(PostsViewerContainer)
)
