/*
 * Desc
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils'

import { Space } from '@/components/Common'
import Maybe from '@/components/Maybe'
import AnimatedCount from '@/components/AnimatedCount'

import { Text, DescWrapper } from './styles/default_layout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:Desc')

type TProps = {
  count?: number
  showCount?: boolean
  avatarsRowLimit?: number
  noOne: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
}

const Desc: FC<TProps> = ({
  noOne,
  count = 4,
  showCount = true,
  avatarsRowLimit = 3,
  alias = '觉得很赞',
}) => {
  const onlyOne = count === 1

  return (
    <DescWrapper>
      {!noOne && !onlyOne && count > avatarsRowLimit && (
        <DescWrapper>
          <Space left={3} />
          <Text>等</Text>
          <Maybe test={showCount}>
            <Space left={3} />
            <AnimatedCount count={count} /> <Space left={4} />
            <Text>人</Text>
          </Maybe>
        </DescWrapper>
      )}
      {noOne ? (
        <Maybe test={showCount}>
          <AnimatedCount count={count} /> <Space left={4} />
        </Maybe>
      ) : (
        <Text>{alias}</Text>
      )}
    </DescWrapper>
  )
}

export default memo(Desc)
