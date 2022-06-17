/* *
 * DashboardThread
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import { TAB } from './constant'
import Sidebar from './Sidebar'

import type { TStore } from './store'
import { Wrapper, MainWrapper } from './styles'
import { useInit } from './logic' /* eslint-disable-next-line */

// basic
import BasicInfo from './BasicInfo'
import UI from './UI'
import Admin from './Admin'
import Threads from './Threads'
import Tags from './Tags'

// integrates
import Domain from './Domain'
import ThirdPart from './ThirdPart'
import Widgets from './Widgets'

// const log = buildLog('C:DashboardThread')

type TProps = {
  dashboardThread?: TStore
  testid?: string
}

const DashboardThreadContainer: FC<TProps> = ({
  dashboardThread: store,
  testid = 'dashboard-thread',
}) => {
  useInit(store)
  const { curTab, uiSettings, tagSettings, touched } = store

  return (
    <Wrapper testid={testid}>
      <Sidebar curTab={curTab} />
      <MainWrapper>
        {curTab === TAB.BASIC_INFO && <BasicInfo />}
        {curTab === TAB.UI && <UI settings={uiSettings} touched={touched} />}
        {curTab === TAB.ADMINS && <Admin />}
        {curTab === TAB.THREADS && <Threads />}
        {curTab === TAB.TAGS && <Tags settings={tagSettings} />}

        {curTab === TAB.DOMAIN && <Domain />}
        {curTab === TAB.THIRD_PART && <ThirdPart />}
        {curTab === TAB.WIDGETS && <Widgets />}
      </MainWrapper>
    </Wrapper>
  )
}

export default bond(DashboardThreadContainer, 'dashboardThread') as FC<TProps>
