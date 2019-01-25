/*
 *
 * PostViewer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import { makeDebugger, storePlug, THREAD } from 'utils'

import Comments from 'containers/Comments'
import Labeler from 'containers/Labeler'
import ArticleViewerHeader from 'containers/ArticleViewerHeader'
import ArticleBodyHeader from 'containers/ArticleBodyHeader'

import Maybe from 'components/Maybe'
import MarkDownRender from 'components/MarkDownRender'
import { ArticleContentLoading } from 'components/LoadingEffects'

import {
  BodyWrapper,
  CommentsWrapper,
  ArticleTitle,
  ArticleBody,
  Footer,
} from './styles'

import * as logic from './logic'
/* eslint-disable-next-line */
const debug = makeDebugger('C:PostViewer')

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
    const { curCommunity, viewingData, loading } = postViewer

    const tagTitleList = R.pluck('title', viewingData.tags)

    return (
      <React.Fragment>
        <ArticleViewerHeader data={viewingData} author={viewingData.author} />
        <BodyWrapper>
          <ArticleBodyHeader
            communityRaw={curCommunity.raw}
            thread={THREAD.POST}
            data={viewingData}
          />
          <ArticleTitle>{viewingData.title}</ArticleTitle>
          <Maybe test={!loading} loading={<ArticleContentLoading num={2} />}>
            <ArticleBody>
              <MarkDownRender body={viewingData.body} />
            </ArticleBody>
          </Maybe>
          <Footer>
            <Labeler
              passport={`owner;${curCommunity.raw}->${THREAD.POST}.tag.set`}
              ownerId={viewingData.author.id}
              fallbackProps="readOnly"
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
