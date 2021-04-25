//

/*
 *
 * AbuseReport
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'

import type { TStore } from './store'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AbuseReport')

type TProps = {
  abuseReport?: TStore
  testid: string
}

const AbuseReportContainer: React.FC<TProps> = ({
  abuseReport: store,
  testid,
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <h2>AbuseReport hooks container!</h2>
      <div>impress me!</div>
    </Wrapper>
  )
}

export default pluggedIn(AbuseReportContainer)
