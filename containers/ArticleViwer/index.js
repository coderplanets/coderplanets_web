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

const debug = makeDebugger('C:ArticleViwer')

const Viwer = ({ type }) => {
  switch (type) {
    case 'post': {
      return <PostViewer />
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
    debug('mount')
    logic.init(this.props.articleViwer)
  }

  render() {
    const { type } = this.props
    return (
      <div>
        <Viwer type={type} />
      </div>
    )
  }
}

ArticleViwerContainer.propTypes = {
  // https://www.npmjs.com/package/prop-types
  articleViwer: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['post', 'tut', 'job']),
  // onSelect: PropTypes.func.isRequired,
}

ArticleViwerContainer.defaultProps = {
  type: 'post',
}

// ArticleViwerContainer

export default inject(storeSelector('articleViwer'))(
  observer(ArticleViwerContainer)
)
