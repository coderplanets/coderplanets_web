/*
 *
 * MobileMockup
 *
 */

import { FC, memo, ReactNode } from 'react'

import { buildLog } from '@/utils/logger'

import { Wrapper, Content } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:MobileMockup:index')

type TProps = {
  testid?: string
  children: ReactNode
}

const MobileMockup: FC<TProps> = ({ testid = 'mobile-mockup', children }) => {
  return (
    <Wrapper testid={testid}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default memo(MobileMockup)
