/*
 *
 * PostViewer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { connectStore, buildLog, THREAD } from '@utils'

import Comments from '@containers/Comments'
import Labeler from '@containers/Labeler'
import ArticleViewerHeader from '@containers/ArticleViewerHeader'
import ArticleBodyHeader from '@containers/ArticleBodyHeader'

import Maybe from '@components/Maybe'
import MarkDownRender from '@components/MarkDownRender'
import { ArticleContentLoading } from '@components/LoadingEffects'

import {
  BodyWrapper,
  CommentsWrapper,
  ArticleTitle,
  ArticleBody,
  Footer,
} from './styles'

import { useInit, onTagSelect, onTagUnselect, onCommentCreate } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostViewer')

const PostViewerContainer = ({ postViewer, attachment }) => {
  useInit(postViewer, attachment)

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
            passport={`${curCommunity.raw}->${THREAD.POST}.tag.set`}
            ownerId={viewingData.author && viewingData.author.id}
            fallbackProps="readOnly"
            onTagSelect={onTagSelect}
            onTagUnselect={onTagUnselect}
            selected={tagTitleList}
          />
        </Footer>
      </BodyWrapper>

      <CommentsWrapper>
        <Comments onCreate={onCommentCreate} />
      </CommentsWrapper>
    </React.Fragment>
  )
}

PostViewerContainer.propTypes = {
  postViewer: PropTypes.object.isRequired,
  attachment: PropTypes.any,
}

PostViewerContainer.defaultProps = {
  attachment: {},
}

export default connectStore(PostViewerContainer)
