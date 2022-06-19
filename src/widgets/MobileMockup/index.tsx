/*
 *
 * MobileMockup
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import { Wrapper, Content } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:MobileMockup:index')

type TProps = {
  testid?: string
}

const MobileMockup: FC<TProps> = ({ testid = 'mobile-mockup' }) => {
  return (
    <Wrapper testid={testid}>
      <Content>
        <h2>MobileMockup widgets</h2>
        <p>impress me</p>
      </Content>
    </Wrapper>
  )
}

export default memo(MobileMockup)
