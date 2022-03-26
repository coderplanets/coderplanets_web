/* *
 * AboutThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:AboutThread')

type TProps = {
  aboutThread?: TStore
  testid: string
}

const AboutThreadContainer: FC<TProps> = ({ aboutThread: store, testid }) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <h2>AboutThread hooks container!</h2>
      <div>impress me!</div>
    </Wrapper>
  )
}

export default bond(AboutThreadContainer, 'aboutThread') as FC<TProps>
