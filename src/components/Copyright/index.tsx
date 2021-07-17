/*
 *
 * Copyright
 *
 */

import { FC, memo } from 'react'

import Tooltip from '@/components/Tooltip'
import { buildLog } from '@/utils'

import Label from './Label'
import ReadOnlyPanel from './ReadOnlyPanel'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Copyright:index')

type TProps = {
  testid?: string
  type?: 'cc' | 'approve' | 'forbid'
  mode?: 'readonly' | 'editable'
}

const Copyright: FC<TProps> = ({
  testid = 'copyright',
  type = 'cc',
  mode = 'readonly',
}) => {
  return (
    <Wrapper testid={testid}>
      <Tooltip
        content={<ReadOnlyPanel type={type} />}
        placement="top"
        trigger="mouseenter focus"
      >
        <Label type={type} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(Copyright)
