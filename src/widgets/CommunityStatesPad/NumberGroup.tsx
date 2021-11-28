import { FC, memo, Fragment } from 'react'

import { prettyNum } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import AnimatedCount from '@/widgets/AnimatedCount'
import { TrendLine } from '@/widgets/dynamic'

import {
  Wrapper,
  NumberItem,
  SubNumberWrapper,
  SubNum,
  GreenDot,
  ActivitySpark,
} from './styles/number_group'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:NumberGroup')

type TProps = {
  readOnly?: boolean
  count?: number
  subCount?: number | null
  subPrefix?: string | null
  contributesDigest?: number[]
  onClick?: () => void
}

const NumberGroup: FC<TProps> = ({
  readOnly = false,
  count = 0,
  subCount = null,
  onClick = null,
  subPrefix = null,
  contributesDigest = [0, 0, 0, 0, 0, 0],
}) => {
  return (
    <Wrapper>
      <NumberItem readOnly={readOnly} onClick={onClick}>
        {prettyNum(count)}
      </NumberItem>

      {subCount >= 0 && (
        <SubNumberWrapper>
          {subPrefix === 'online' && (
            <Fragment>
              <GreenDot />
              <SubNum>
                <AnimatedCount count={subCount} size="tiny" />
              </SubNum>
            </Fragment>
          )}
        </SubNumberWrapper>
      )}
      {subPrefix === 'contributes' && (
        <ActivitySpark>
          {/* <TrendLine data={[12, 4, 7, 5, 4, 10, 6]} /> */}
          <TrendLine data={contributesDigest} />
        </ActivitySpark>
      )}
    </Wrapper>
  )
}

export default memo(NumberGroup)
