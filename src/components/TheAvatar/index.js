/*
 *
 * TheAvatar
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import PostItemAvatar from './PostItemAvatar'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TheAvatar:index')

const TheAvatar = ({ testId, user, metric, onSelect }) => {
  switch (metric) {
    case 'post-item': {
      return <PostItemAvatar user={user} onSelect={onSelect} />
    }

    default: {
      return (
        <Wrapper testId={testId}>
          <div>?</div>
        </Wrapper>
      )
    }
  }
}

TheAvatar.propTypes = {
  testId: T.string,
  metric: T.oneOf(['post-item', 'article-author']),
  user: T.shape({
    avatar: T.string,
    nickname: T.string,
    bio: T.string,
  }).isRequired,
  onSelect: T.func,
}

TheAvatar.defaultProps = {
  testId: 'the-avatar',
  metric: 'post-item',
  onSelect: log,
}

export default React.memo(TheAvatar)
