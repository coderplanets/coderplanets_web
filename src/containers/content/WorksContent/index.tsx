/*
 *
 * WorksContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Pagi from '@/components/Pagi'
import AvatarsRow from '@/components/AvatarsRow'

import type { TStore } from './store'

import { VIEW } from './constant'

import FilterBar from './FilterBar'
import List from './List'
import MileStone from './MileStone'
import RightSidebar from './RightSidebar/index'

import {
  Wrapper,
  LeftSidebarWrapper,
  ContentWrapper,
  MainContent,
  PagiInfo,
  PagiInfoTitle,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const tmpUsers = [
  {
    id: '0',
    nickname: 'mydearxym',
    avatar: 'https://avatars0.githubusercontent.com/u/6166576?s=64&v=4',
  },
  {
    id: '1',
    nickname: 'Huxpro',
    avatar: 'https://avatars2.githubusercontent.com/u/5563315?s=64&v=4',
  },
  {
    id: '2',
    nickname: 'neSpecc',
    avatar: 'https://avatars2.githubusercontent.com/u/3684889?s=64&v=4',
  },
  {
    id: '3',
    nickname: 'mydearxym',
    avatar: 'https://avatars0.githubusercontent.com/u/6166576?s=64&v=4',
  },
  {
    id: '4',
    nickname: 'Huxpro',
    avatar: 'https://avatars2.githubusercontent.com/u/5563315?s=64&v=4',
  },
  {
    id: '5',
    nickname: 'neSpecc',
    avatar: 'https://avatars2.githubusercontent.com/u/3684889?s=64&v=4',
  },
]

type TProps = {
  worksContent?: TStore
  metric?: TMetric
  testid?: string
}
const WorksContentContainer: FC<TProps> = ({
  worksContent: store,
  metric,
  testid = 'worksContent',
}) => {
  useInit(store)

  const { activeView, showSidebar } = store

  return (
    <Wrapper testid={testid} metric={metric}>
      <ContentWrapper showSidebar={showSidebar}>
        {showSidebar && (
          <LeftSidebarWrapper>
            <FilterBar activeView={activeView} />
          </LeftSidebarWrapper>
        )}
        <MainContent>
          {activeView === VIEW.WORKS ? <List /> : <MileStone />}
          <Pagi margin={{ top: '60px', bottom: '80px' }}>
            <PagiInfo>
              <PagiInfoTitle>活跃用户</PagiInfoTitle>
              <AvatarsRow users={tmpUsers} total={10} showTotalNumber />
            </PagiInfo>
          </Pagi>
        </MainContent>
        <RightSidebar showSidebar={showSidebar} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default pluggedIn(WorksContentContainer) as FC<TProps>
