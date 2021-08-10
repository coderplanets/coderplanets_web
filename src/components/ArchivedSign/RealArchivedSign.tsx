/*
 *
 * ArchivedSign
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/components/Tooltip'

import DetailPanel from './DetailPanel'
import { Wrapper, SignIcon, Text } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArchivedSign:index')

type TProps = {
  testid?: string
}

const ArchivedSign: FC<TProps> = ({ testid = 'archived-sign' }) => {
  return (
    <Tooltip placement="bottom-start" content={<DetailPanel />} delay={500}>
      <Wrapper testid={testid}>
        <SignIcon src={`${ICON}/article/archived.svg`} />
        <Text>已存档</Text>
      </Wrapper>
    </Tooltip>
  )
}

export default memo(ArchivedSign)
