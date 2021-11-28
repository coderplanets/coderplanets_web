import { FC, memo } from 'react'

import { prettyNum } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import AnimatedCount from '@/widgets/AnimatedCount'

import {
  Wrapper,
  NumberItem,
  LargeNumberItem,
  SubNumberWrapper,
  SubNum,
  GreenDot,
  PlusSign,
} from './styles/number_group'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityStatesPad:NumberGroup')

type TProps = {
  readOnly?: boolean
  count?: number
  subCount?: number | null
  subPrefix?: string | null
  onClick?: () => void
}

const NumberGroup: FC<TProps> = ({
  readOnly = false,
  count = 0,
  subCount = null,
  onClick = null,
  subPrefix = null,
}) => {
  return (
    <Wrapper>
      {subCount >= 0 ? (
        <NumberItem readOnly={readOnly} onClick={onClick}>
          {prettyNum(count)}
        </NumberItem>
      ) : (
        <LargeNumberItem readOnly={readOnly} onClick={onClick}>
          {prettyNum(count)}
        </LargeNumberItem>
      )}

      {subCount >= 0 && (
        <SubNumberWrapper>
          {subPrefix === 'online' && <GreenDot />}
          {subPrefix === 'add' && <PlusSign>+</PlusSign>}
          <SubNum>
            <AnimatedCount count={subCount} size="tiny" />
          </SubNum>
        </SubNumberWrapper>
      )}
    </Wrapper>
  )
}

export default memo(NumberGroup)
