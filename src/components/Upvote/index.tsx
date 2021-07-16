/*
 *
 * Upvote
 *
 */

import { FC, Fragment, memo } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils'

import DefaultView from './DefaultView'
import CommentView from './CommentView'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  type?: 'default' | 'comment'
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
}

const Upvote: FC<TProps> = ({ type = 'default', ...restProps }) => {
  return (
    <Fragment>
      {type === 'default' ? (
        <DefaultView {...restProps} />
      ) : (
        <CommentView {...restProps} />
      )}
    </Fragment>
  )
}

export default memo(Upvote)
