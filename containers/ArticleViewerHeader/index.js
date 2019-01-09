/*
 *
 * ArticleViewerHeader
 *
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'

import FavoritesCats from '../FavoritesCats'
import { Maybe, Popover } from '../../components'

import UserInfo from './UserInfo'
import CompanyInfo from './CompanyInfo'

import {
  Wrapper,
  ReactionWrapper,
  Reaction,
  PlainAction,
  ReactionAction,
  ReactionName,
  CollectIcon,
  LikeIcon,
  PlainUserNum,
  SyncTime,
  PopInfo,
  ReactionUserNum,
  Divider,
} from './styles'

import { makeDebugger, storePlug, TYPE, THREAD } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:ArticleViewerHeader')
/* eslint-enable no-unused-vars */

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

    return (
      <Wrapper>
        <FavoritesCats />
        {author && !company ? (
          <UserInfo author={author} insertedAt={data.insertedAt} />
        ) : null}
        {company ? (
          <CompanyInfo
            company={company}
            insertedAt={data.insertedAt}
            author={author}
          />
        ) : null}
        <ReactionWrapper>
          <Maybe text={showFavorite}>
            <Reaction>
              <ReactionAction
                active={data.viewerHasFavorited}
                onClick={logic.onReaction.bind(
                  this,
                  thread,
                  TYPE.FAVORITE,
                  data.viewerHasFavorited,
                  data
                )}
              >
                <CollectIcon src={`${ICON_CMD}/uncollect.svg`} />
                <ReactionName>
                  {data.viewerHasFavorited ? (
                    <span>已收藏</span>
                  ) : (
                    <span>收藏</span>
                  )}
                </ReactionName>
              </ReactionAction>
              <ReactionUserNum
                onClick={logic.onListReactionUsers.bind(
                  this,
                  TYPE.USER_LISTER_FAVORITES,
                  {
                    thread,
                    id: data.id,
                    action: TYPE.FAVORITE,
                    brief: data.title || '',
                  }
                )}
              >
                {data.favoritedCount}
              </ReactionUserNum>
              <Divider />
            </Reaction>
          </Maybe>

          <Maybe test={showStar}>
            <Reaction>
              <ReactionAction
                active={data.viewerHasStarred}
                onClick={logic.onReaction.bind(
                  this,
                  thread,
                  TYPE.STAR,
                  data.viewerHasStarred,
                  data
                )}
              >
                <LikeIcon src={`${ICON_CMD}/like.svg`} />
                <ReactionName>
                  {data.viewerHasStarred ? <span>已赞</span> : <span>赞</span>}
                </ReactionName>
              </ReactionAction>
              <ReactionUserNum
                onClick={logic.onListReactionUsers.bind(
                  this,
                  TYPE.USER_LISTER_STARS,
                  {
                    thread,
                    id: data.id,
                    action: TYPE.STAR,
                    brief: data.title || '',
                  }
                )}
              >
                {data.starredCount}
              </ReactionUserNum>
              <Divider />
            </Reaction>
          </Maybe>

          <Reaction>
            <PlainAction>
              <ReactionName>浏览:</ReactionName>
            </PlainAction>
            <PlainUserNum>{data.views}</PlainUserNum>
          </Reaction>

          <Maybe test={showLastSync}>
            <Popover
              placement="bottomLeft"
              trigger="hover"
              content={<PopInfo>上次与该 Github repo 同步的时间</PopInfo>}
            >
              <Reaction>
                <Divider />
                <PlainAction>
                  <ReactionName>同步于:</ReactionName>
                </PlainAction>
                <SyncTime>
                  {data.lastSync ? (
                    <TimeAgo datetime={data.lastSync} locale="zh_CN" />
                  ) : (
                    '--'
                  )}
                </SyncTime>
              </Reaction>
            </Popover>
          </Maybe>
        </ReactionWrapper>
      </Wrapper>
    )
  }
}

ArticleViewerHeaderContainer.propTypes = {
  articleViewerHeader: PropTypes.any.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  author: PropTypes.object.isRequired,
  company: PropTypes.any,
  data: PropTypes.any,
  showFavorite: PropTypes.bool,
  showLastSync: PropTypes.bool,
  showStar: PropTypes.bool,
}

ArticleViewerHeaderContainer.defaultProps = {
  thread: THREAD.POST,
  company: {},
  data: {},
  showStar: true,
  showFavorite: true,
  showLastSync: false,
}

export default inject(storePlug('articleViewerHeader'))(
  observer(ArticleViewerHeaderContainer)
)
