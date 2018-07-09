/*
 *
 * ArticleViwer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import PostViewer from './PostViewer'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleViwer')
/* eslint-enable no-unused-vars */

const Viwer = ({ type, data, loading, onReaction }) => {
  switch (type) {
    case 'post': {
      return (
        <PostViewer data={data} loading={loading} onReaction={onReaction} />
      )
    }
    case 'job': {
      return <div>job</div>
    }
    case 'typewriter': {
      return <div>typewriter</div>
    }
    default: {
      return <div>default</div>
    }
  }
}

class ArticleViwerContainer extends React.Component {
  componentWillMount() {
    const { articleViwer } = this.props
    logic.init(articleViwer)
  }

  render() {
    const { type, articleViwer } = this.props
    const { viewingPost, postLoading } = articleViwer

    return (
      <React.Fragment>
        <Viwer
          type={type}
          data={viewingPost}
          loading={postLoading}
          onReaction={logic.onReaction}
        />
      </React.Fragment>
    )
  }
}

ArticleViwerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  articleViwer: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['post', 'tut', 'job']),
  // onReaction: PropTypes.func.isRequired,
}

ArticleViwerContainer.defaultProps = {
  type: 'post',
}

// ArticleViwerContainer

export default inject(storePlug('articleViwer'))(
  observer(ArticleViwerContainer)
)
