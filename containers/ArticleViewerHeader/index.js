/*
 *
 * ArticleViewerHeader
 *
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { makeDebugger, storePlug, THREAD } from 'utils'

import FavoritesCats from 'containers/FavoritesCats'
import Maybe from 'components/Maybe'

import UserInfo from './UserInfo'
import CompanyInfo from './CompanyInfo'
import FavoriteReaction from './FavoriteReaction'
import StarReaction from './StarReaction'
import ViewCounter from './ViewCounter'
import LastSyncInfo from './LastSyncInfo'

import { Wrapper, ReactionWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:ArticleViewerHeader')

class ArticleViewerHeaderContainer extends React.Component {
  componentDidMount() {
    const { articleViewerHeader } = this.props
    logic.init(articleViewerHeader)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const {
      thread,
      author,
      company,
      data,
      showFavorite,
      showLastSync,
      showStar,
    } = this.props

    const { articleViewerHeader } = this.props
    const { starLoading, favoriteLoading } = articleViewerHeader

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
}

ArticleViewerHeaderContainer.propTypes = {
  articleViewerHeader: PropTypes.any.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  author: PropTypes.object,
  company: PropTypes.any,
  data: PropTypes.any,
  showFavorite: PropTypes.bool,
  showLastSync: PropTypes.bool,
  showStar: PropTypes.bool,
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

export default inject(storePlug('articleViewerHeader'))(
  observer(ArticleViewerHeaderContainer)
)
