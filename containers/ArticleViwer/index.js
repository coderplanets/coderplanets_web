/*
 *
 * ArticleViwer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import PostViewer from './PostViewer'
import JobViewer from './JobViewer'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleViwer')
/* eslint-enable no-unused-vars */

const Viwer = ({ type, data, loading, accountInfo }) => {
  switch (type) {
    case TYPE.PREVIEW_POST_VIEW: {
      return (
        <PostViewer data={data} loading={loading} accountInfo={accountInfo} />
      )
    }
    case TYPE.PREVIEW_JOB_VIEW: {
      return (
        <JobViewer data={data} loading={loading} accountInfo={accountInfo} />
      )
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
    logic.init(articleViwer, attachment)
  }

  render() {
    const { articleViwer } = this.props
    const { type, viewingData, postLoading, accountInfo } = articleViwer

    return (
      <React.Fragment>
        <Viwer
          type={type}
          data={viewingData}
          loading={postLoading}
          accountInfo={accountInfo}
        />
      </React.Fragment>
    )
  }
}

ArticleViwerContainer.propTypes = {
  articleViwer: PropTypes.object.isRequired,
  attachment: PropTypes.any,
  // onReaction: PropTypes.func.isRequired,
}

ArticleViwerContainer.defaultProps = {
  attachment: {},
}

// ArticleViwerContainer

export default inject(storePlug('articleViwer'))(
  observer(ArticleViwerContainer)
)
