/*
 *
 * PostViewer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import Comments from '../Comments'
import Labeler from '../Labeler'
import ArticleViewerHeader from '../ArticleViewerHeader'
import ArticleBodyHeader from '../ArticleBodyHeader'

import { Maybe, MarkDownRender, ArticleContentLoading } from '../../components'

import {
  BodyWrapper,
  CommentsWrapper,
  ArticleTitle,
  ArticleBody,
  Footer,
} from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostViewer')
/* eslint-enable no-unused-vars */

class PostViewerContainer extends React.Component {
  componentDidMount() {
    const { postViewer, attachment } = this.props
    logic.init(postViewer, attachment)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { postViewer } = this.props
    const { viewingData, loading } = postViewer

    const tagTitleList = R.pluck('title', viewingData.tags)

    return (
      <React.Fragment>
        <ArticleViewerHeader data={viewingData} author={viewingData.author} />
        <BodyWrapper>
          <ArticleBodyHeader data={viewingData} thread={THREAD.POST} />
          <ArticleTitle>{viewingData.title}</ArticleTitle>
          <Maybe test={!loading} loading={<ArticleContentLoading num={2} />}>
            <ArticleBody>
              <MarkDownRender body={viewingData.body} />
            </ArticleBody>
          </Maybe>
          <Footer>
            <Labeler
              onTagSelect={logic.onTagSelect}
              onTagUnselect={logic.onTagUnselect}
              selected={tagTitleList}
            />
          </Footer>
        </BodyWrapper>

        <CommentsWrapper>
          <Comments onCreate={logic.onCommentCreate} />
        </CommentsWrapper>
      </React.Fragment>
    )
  }
}

PostViewerContainer.propTypes = {
  postViewer: PropTypes.object.isRequired,
  attachment: PropTypes.any,
}

PostViewerContainer.defaultProps = {
  attachment: {},
}

export default inject(storePlug('postViewer'))(observer(PostViewerContainer))
