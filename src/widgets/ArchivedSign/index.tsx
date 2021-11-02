/*
 * ArchivedSign
 */

import { FC, memo } from 'react'

import Tooltip from '@/widgets/Tooltip'

import DetailPanel from './DetailPanel'
import { Wrapper, SignIcon, Text } from './styles'

type TProps = {
  testid?: string
  date?: string
}

const ArchivedSign: FC<TProps> = ({ testid = 'archived-sign', date }) => {
  return (
    <Tooltip
      placement="bottom-start"
      content={<DetailPanel date={date} />}
      delay={500}
    >
      <Wrapper testid={testid}>
        <SignIcon />
        <Text>已存档</Text>
      </Wrapper>
    </Tooltip>
  )
}

export default memo(ArchivedSign)
