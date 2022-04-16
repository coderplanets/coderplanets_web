/*
 *
 * GTDBadge
 *
 */

import { FC, memo } from 'react'

import type { TSpace, TGtdType, TGtdState } from '@/spec'
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
  noBg?: boolean
} & TSpace

const GTDBadge: FC<TProps> = ({
  testid = 'gtd-badge',
  type = GTD_TYPE.DEFAULT,
  state = GTD_STATE.DEFAULT,
  noBg = false,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} {...restProps}>
      {type && <State state={state} type={type} />}
      {type && <Label type={type} noBg={noBg} />}
    </Wrapper>
  )
}

export default memo(GTDBadge)
