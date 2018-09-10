/*
 *
 * ArticleViwer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import PostViewer from './PostViewer'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleViwer')
/* eslint-enable no-unused-vars */

const Viwer = ({ type, data, loading, accountInfo }) => {
  switch (type) {
    case TYPE.POST: {
      return (
        <PostViewer data={data} loading={loading} accountInfo={accountInfo} />
      )
    }
    case TYPE.JOb: {
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
    const { articleViwer, attachment } = this.props
    debug('attachment ===> : ', attachment)
    logic.init(articleViwer, attachment)
  }

  render() {
    const { articleViwer } = this.props
    const { type, viewingPost, postLoading, accountInfo } = articleViwer

    // debug('accountInfo --> ', accountInfo)

    return (
      <React.Fragment>
        <Viwer
          type={type}
          data={viewingPost}
          loading={postLoading}
          accountInfo={accountInfo}
        />
      </React.Fragment>
    )
  }
}

ArticleViwerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  articleViwer: PropTypes.object.isRequired,
  // onReaction: PropTypes.func.isRequired,
}

ArticleViwerContainer.defaultProps = {}

// ArticleViwerContainer

export default inject(storePlug('articleViwer'))(
  observer(ArticleViwerContainer)
)
