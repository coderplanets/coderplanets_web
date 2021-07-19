/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser, TUpvote } from '@/spec'
import { buildLog } from '@/utils'

import DefaultView from './DefaultView'
import CommentView from './CommentView'
import StickerView from './StickerView'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  type?: TUpvote
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
}

const Upvote: FC<TProps> = ({ type = 'default', ...restProps }) => {
  switch (type) {
    case 'comment': {
      return <CommentView {...restProps} />
    }
    case 'sticker': {
      return <StickerView {...restProps} />
    }
    default: {
      return <DefaultView {...restProps} />
    }
  }
}

export default memo(Upvote)
