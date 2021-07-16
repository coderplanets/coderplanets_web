/*
 * Desc
 */

import { FC, Fragment, memo } from 'react'

import { buildLog } from '@/utils'
import { Space } from '@/components/Common'

import TotalCount from './TotalCount'
import { Text } from './styles/default_view'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:Desc')

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
    <Fragment>
      {!noOne && !onlyOne && count > avatarsRowLimit && (
        <Fragment>
          <Space left={3} />
          <Text>等</Text>
          <Space left={3} />
          <TotalCount count={count} /> <Space left={4} />
          <Text>人</Text>
        </Fragment>
      )}
      {noOne ? (
        <Fragment>
          <TotalCount count={count} /> <Space left={4} />
        </Fragment>
      ) : (
        <Text>{alias}</Text>
      )}
    </Fragment>
  )
}

export default memo(Desc)
