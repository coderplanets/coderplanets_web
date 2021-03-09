/*
 *
 * TheAvatar
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { buildLog } from '@/utils'
import { TYPE } from './constant'

import PostItemAvatar from './PostItemAvatar'
import ArticleAuthorAvatar from './ArticleAuthorAvatar'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TheAvatar:index')

const TheAvatar = ({ testid, user, metric, onSelect }) => {
  switch (metric) {
    case TYPE.POST_ITEM: {
      return <PostItemAvatar user={user} onSelect={onSelect} />
    }
    case TYPE.ARTICLE_AUTHOR: {
      return <ArticleAuthorAvatar user={user} onSelect={onSelect} />
    }
    default: {
      return (
        <Wrapper testid={testid}>
          <div>?</div>
        </Wrapper>
      )
    }
  }
}

TheAvatar.propTypes = {
  testid: T.string,
  metric: T.oneOf(values(TYPE)),
  user: T.shape({
    avatar: T.string,
    nickname: T.string,
    bio: T.string,
  }).isRequired,
  onSelect: T.func,
}

TheAvatar.defaultProps = {
  testid: 'the-avatar',
  metric: TYPE.POST_ITEM,
  onSelect: log,
}

export default React.memo(TheAvatar)
