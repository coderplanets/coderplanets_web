/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import PagiFooter from '@components/PagiFooter'
import AvatarsRow from '@components/AvatarsRow'

import Banner from './Banner'
import FilterBar from './FilterBar'
import List from './List'
import MileStone from './MileStone'

import {
  Wrapper,
  ContentWrapper,
  InnerContent,
  PagiInfo,
  PagiInfoTitle,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const tmpUsers = [
  {
    id: 0,
    nickname: 'mydearxym',
    avatar: 'https://avatars0.githubusercontent.com/u/6166576?s=64&v=4',
  },
  {
    id: 1,
    nickname: 'Huxpro',
    avatar: 'https://avatars2.githubusercontent.com/u/5563315?s=64&v=4',
  },
  {
    id: 2,
    nickname: 'neSpecc',
    avatar: 'https://avatars2.githubusercontent.com/u/3684889?s=64&v=4',
  },
  {
    id: 3,
    nickname: 'mydearxym',
    avatar: 'https://avatars0.githubusercontent.com/u/6166576?s=64&v=4',
  },
  {
    id: 4,
    nickname: 'Huxpro',
    avatar: 'https://avatars2.githubusercontent.com/u/5563315?s=64&v=4',
  },
  {
    id: 5,
    nickname: 'neSpecc',
    avatar: 'https://avatars2.githubusercontent.com/u/3684889?s=64&v=4',
  },
]

const WorksContentContainer = ({ worksContent }) => {
  useInit(worksContent)

  const { activeView } = worksContent

  return (
    <Wrapper testid="worksContent">
      <Banner />
      <ContentWrapper>
        <FilterBar activeView={activeView} />
        <InnerContent>
          {activeView === 'works' ? <List /> : <MileStone />}
          <PagiFooter margin={{ top: '60px', bottom: '80px' }}>
            <PagiInfo>
              <PagiInfoTitle>活跃用户</PagiInfoTitle>
              <AvatarsRow
                users={tmpUsers}
                height="20px"
                total={10}
                showTotalNumber
              />
            </PagiInfo>
          </PagiFooter>
        </InnerContent>
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(WorksContentContainer)
