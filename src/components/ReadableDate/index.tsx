/*
 *
 * ReadableDate
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import AbsoluteFmt from './AbsoluteFmt'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ReadableDate:index')

type TProps = {
  testid?: string
  date: string
  fmt?: 'relative' | 'absolute'
  className?: string
}

const ReadableDate: FC<TProps> = ({
  testid = 'readable-date',
  fmt = 'relative',
  className = 'readable-date',
  date,
}) => {
  return (
    <Wrapper testid={testid} className={className}>
      <AbsoluteFmt datetime={date} className={className} />
    </Wrapper>
  )
}

export default memo(ReadableDate)
