import { FC, memo } from 'react'

import { prettyNum } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import AnimatedCount from '@/widgets/AnimatedCount'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  NumberItem,
  SubNumberWrapper,
  SubNum,
  GreenDot,
  PopHint,
} from './styles/subscribe_status'

/* eslint-disable-next-line */
const log = buildLog('w:CommunityStatesPad:SubscribeStatus')

type TProps = {
  count?: number
  subCount?: number | null
  onClick?: () => void
}

const SubscribeStatus: FC<TProps> = ({
  count = 0,
  subCount = null,
  onClick = null,
}) => {
  return (
    <Wrapper>
      <NumberItem readOnly={false} onClick={onClick}>
        {prettyNum(count)}
      </NumberItem>

      <Tooltip
        content={
          <PopHint>
            实时在线人数，后续会单独统计每个子社区的实时在线人数。
          </PopHint>
        }
        placement="bottom"
      >
        <SubNumberWrapper>
          <GreenDot />
          <SubNum>
            <AnimatedCount count={subCount} size="tiny" />
          </SubNum>
        </SubNumberWrapper>
      </Tooltip>
    </Wrapper>
  )
}

export default memo(SubscribeStatus)
