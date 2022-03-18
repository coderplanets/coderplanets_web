/*
 *
 * GTDBadge
 *
 */

import { FC, memo } from 'react'

import type { TGtdType, TGtdState } from '@/spec'
import { GTD_TYPE, GTD_STATE } from '@/constant'
import { buildLog } from '@/utils/logger'

import State from './State'
import Label from './Label'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GTDBadge:index')

export type TProps = {
  testid?: string
  type?: TGtdType
  state?: TGtdState
}

const GTDBadge: FC<TProps> = ({
  testid = 'gtd-badge',
  type = GTD_TYPE.FEATURE,
  state = GTD_STATE.TODO,
}) => {
  return (
    <Wrapper testid={testid}>
      {type && <State state={state} type={type} />}
      {type && <Label type={type} />}
    </Wrapper>
  )
}

export default memo(GTDBadge)
