/*
 *
 * GTDBadge
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  Label,
  IconWrapper,
  WipIcon,
  TODOIcon,
  DoneIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GTDBadge:index')

type TProps = {
  testid?: string
}

const GTDBadge: FC<TProps> = ({ testid = 'gtd-badge' }) => {
  return (
    <Wrapper testid={testid}>
      <IconWrapper>
        {/* <WipIcon /> */}
        <TODOIcon />
        {/* <DoneIcon /> */}
      </IconWrapper>
      <Label>功能需求</Label>
    </Wrapper>
  )
}

export default memo(GTDBadge)
