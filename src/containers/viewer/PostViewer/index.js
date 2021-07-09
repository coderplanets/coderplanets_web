/*
 *
 * PostViewer
 *
 */

import React from 'react'
import T from 'prop-types'
import { pluck } from 'ramda'

import { THREAD } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
import Labeler from '@/containers/unit/Labeler'
import ArticleViewerHeader from '@/containers/unit/ArticleViewerHeader'
import ArticleBodyHeader from '@/containers/unit/ArticleBodyHeader'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import { ArticleContentLoading } from '@/components/Loading'

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

const PostViewerContainer = ({ postViewer: store, attachment }) => {
  useInit(store, attachment)

  const { curCommunity, viewingData, loading } = store
  const tagTitleList = pluck('title', viewingData.tags)

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
            ownerId={viewingData.author?.id}
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
  postViewer: T.object.isRequired,
  attachment: T.any,
}

PostViewerContainer.defaultProps = {
  attachment: {},
}

export default pluggedIn(PostViewerContainer)
