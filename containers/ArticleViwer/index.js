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

import { makeDebugger, storeSelector } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleViwer')
/* eslint-enable no-unused-vars */

const Viwer = ({ type, data, loading, onReaction }) => {
  // debug('Viwer data: ', data)
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
    logic.init(this.props.articleViwer)
  }

  render() {
    const {
      type,
      articleViwer: { curPost, postLoading },
    } = this.props
    return (
      <div>
        <Viwer
          type={type}
          data={curPost}
          loading={postLoading}
          onReaction={logic.onReaction}
        />
      </div>
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

export default inject(storeSelector('articleViwer'))(
  observer(ArticleViwerContainer)
)
