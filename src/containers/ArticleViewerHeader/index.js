/*
 *
 * ArticleViewerHeader
 *
 */
import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import FavoritesCats from '@/containers/FavoritesCats'
import Maybe from '@/components/Maybe'

import UserInfo from './UserInfo'
import CompanyInfo from './CompanyInfo'
import FavoriteReaction from './FavoriteReaction'
import StarReaction from './StarReaction'
import ViewCounter from './ViewCounter'
import LastSyncInfo from './LastSyncInfo'

import { Wrapper, ReactionWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewerHeader')

const ArticleViewerHeaderContainer = ({
  articleViewerHeader: store,
  thread,
  author,
  company,
  data,
  showFavorite,
  showLastSync,
  showStar,
}) => {
  useInit(store)

  const { starLoading, favoriteLoading } = store

  return (
    <Wrapper>
      <FavoritesCats />
      <Maybe test={author && !company}>
        <UserInfo author={author} insertedAt={data.insertedAt} />
      </Maybe>
      <Maybe test={company}>
        <CompanyInfo
          company={company}
          insertedAt={data.insertedAt}
          author={author}
        />
      </Maybe>
      <ReactionWrapper>
        <FavoriteReaction
          show={showFavorite}
          data={data}
          thread={thread}
          loading={favoriteLoading}
        />
        <StarReaction
          show={showStar}
          data={data}
          thread={thread}
          loading={starLoading}
        />
        <ViewCounter data={data} />
        <LastSyncInfo show={showLastSync} data={data} />
      </ReactionWrapper>
    </Wrapper>
  )
}

ArticleViewerHeaderContainer.propTypes = {
  articleViewerHeader: T.any.isRequired,
  thread: T.oneOf(values(THREAD)),
  author: T.object,
  company: T.any,
  data: T.any,
  showFavorite: T.bool,
  showLastSync: T.bool,
  showStar: T.bool,
}

ArticleViewerHeaderContainer.defaultProps = {
  thread: THREAD.POST,
  author: null,
  company: null,
  data: {},
  showStar: true,
  showFavorite: true,
  showLastSync: false,
}

export default connectStore(ArticleViewerHeaderContainer)
