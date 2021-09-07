import { FC, memo } from 'react'

import { prettyNum } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  NumberItem,
  LargeNumberItem,
  SubNumberWrapper,
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
      {subCount ? (
        <NumberItem readOnly={readOnly} onClick={onClick}>
          {prettyNum(count)}
        </NumberItem>
      ) : (
        <LargeNumberItem readOnly={readOnly} onClick={onClick}>
          {prettyNum(count)}
        </LargeNumberItem>
      )}

      {subCount && (
        <SubNumberWrapper>
          {subPrefix === 'online' && <GreenDot />}
          {subPrefix === 'add' && <PlusSign>+</PlusSign>}
          {subCount}
        </SubNumberWrapper>
      )}
    </Wrapper>
  )
}

export default memo(NumberGroup)
