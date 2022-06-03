import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { SVG } from '@/constant'
import IconButton from '@/widgets/Buttons/IconButton'
import ReadableDate from '@/widgets/ReadableDate'

import {
  Wrapper,
  Hint,
  TimeStamp,
  TimeStr,
} from '../../styles/comment_fist_layout/desktop_view/active_badge'

type TProps = {
  article: TArticle
}

const ActiveBadge: FC<TProps> = ({ article }) => {
  const isArchived = article.commentsCount === 24
  const icon = isArchived ? SVG.ARCHIVED : SVG.ACTIVITY

  return (
    <Wrapper hasComments={article.commentsCount > 0}>
      <IconButton
        icon={icon}
        size={12}
        hint={
          <Hint>
            <div>最后回复时间: </div>
            <TimeStr>
              <ReadableDate date={article.activeAt} fmt="absolute" />
            </TimeStr>
          </Hint>
        }
        right={6}
        hintPlacement="bottom"
        dimWhenIdle
        hintDelay={0}
      />
      <TimeStamp datetime={article.activeAt} locale="zh_CN" />
    </Wrapper>
  )
}

export default memo(ActiveBadge)
