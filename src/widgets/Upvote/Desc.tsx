/*
 * Desc
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { Text, DescWrapper } from './styles/default_layout'

/* eslint-disable-next-line */
const log = buildLog('w:Upvote:Desc')

type TProps = {
  count?: number
  avatarsRowLimit?: number
  noOne: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
}

const Desc: FC<TProps> = ({
  noOne,
  count = 4,
  avatarsRowLimit = 3,
  alias = '觉得很赞',
}) => {
  const onlyOne = count === 1

  return (
    <DescWrapper>
      {!noOne && !onlyOne && count > avatarsRowLimit && (
        <DescWrapper>
          <Text>等</Text>
        </DescWrapper>
      )}
      <Text>{alias}</Text>
    </DescWrapper>
  )
}

export default memo(Desc)
