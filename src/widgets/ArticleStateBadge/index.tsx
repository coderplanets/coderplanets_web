/*
 *
 * ArticleStateBadge
 *
 */

import { FC, memo } from 'react'

import type { TSpace, TASType, TASState } from '@/spec'
import { AS_TYPE, AS_STATE } from '@/constant'
import { buildLog } from '@/utils/logger'

import State from './State'
import Label from './Label'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleStateBadge:index')

export type TProps = {
  testid?: string
  type?: TASType
  state?: TASState
  kanbanLayout?: boolean
  articleInfoLayout?: boolean
  // size?
} & TSpace

const ArticleStateBadge: FC<TProps> = ({
  testid = 'gtd-badge',
  type = AS_TYPE.DEFAULT,
  state = AS_STATE.DEFAULT,
  kanbanLayout = false,
  articleInfoLayout = false,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} {...restProps}>
      {type && (
        <State
          state={state}
          type={type}
          articleInfoLayout={articleInfoLayout}
        />
      )}
      {type && (
        <Label
          type={type}
          kanbanLayout={kanbanLayout}
          articleInfoLayout={articleInfoLayout}
        />
      )}
    </Wrapper>
  )
}

export default memo(ArticleStateBadge)
