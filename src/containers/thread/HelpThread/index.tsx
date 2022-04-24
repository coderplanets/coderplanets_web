/* *
 * HelpThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import type { TStore } from './store'

import HelpCenterLayout from './HelpCenterLayout'
import FullLayout from './FullLayout'
import FaqLayout from './FaqLayout'

import { Wrapper } from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// const log = buildLog('C:HelpThread')

type TProps = {
  helpThread?: TStore
  testid?: string
  title?: string
  desc?: string
}

const HelpThreadContainer: FC<TProps> = ({
  helpThread: store,
  testid = 'help-thread',
  title = 'title',
  desc = 'desc',
}) => {
  useInit(store)
  const { mode } = store

  return (
    <Wrapper testid={testid}>
      {mode === 'full' && <FullLayout />}
      {mode === 'faq' && <FaqLayout />}
      {mode === 'helpcenter' && <HelpCenterLayout />}
    </Wrapper>
  )
}

export default bond(HelpThreadContainer, 'helpThread') as FC<TProps>
