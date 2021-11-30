import { FC, memo } from 'react'

import { prettyNum } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import AnimatedCount from '@/widgets/AnimatedCount'

import {
  Wrapper,
  NumberItem,
  SubNumberWrapper,
  SubNum,
  GreenDot,
} from './styles/subscribe_status'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:SubscribeStatus')

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

      <SubNumberWrapper>
        <GreenDot />
        <SubNum>
          <AnimatedCount count={subCount} size="tiny" />
        </SubNum>
      </SubNumberWrapper>
    </Wrapper>
  )
}

export default memo(SubscribeStatus)
