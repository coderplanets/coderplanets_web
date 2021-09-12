import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TArticle } from '@/spec'
import IconButton from '@/components/Buttons/IconButton'
import ReadableDate from '@/components/ReadableDate'

import { Wrapper, Hint, TimeStr } from '../styles/desktop_view/active_badge'

type TProps = {
  item: TArticle
}

const ActiveBadge: FC<TProps> = ({ item }) => {
  const isArchived = item.commentsCount === 24
  const path = isArchived ? 'article/archived.svg' : 'shape/activity.svg'

  return (
    <Wrapper hasComments={item.commentsCount > 0}>
      <IconButton
        path={path}
        size={14}
        hint={
          <Hint>
            <div>最后回复时间: </div>
            <TimeStr>
              <ReadableDate date={item.activeAt} fmt="absolute" />
            </TimeStr>
          </Hint>
        }
        mRight={6}
        hintPlacement="bottom"
        hintDelay={0}
      />
      <TimeAgo datetime={item.activeAt} locale="zh_CN" />
    </Wrapper>
  )
}

export default memo(ActiveBadge)
