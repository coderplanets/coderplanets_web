/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import PagiFooter from '@components/PagiFooter'

import Banner from './Banner'
import FilterBar from './FilterBar'
import List from './List'
import MileStone from './MileStone'

import { Wrapper, ContentWrapper, InnerContent } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

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
          <PagiFooter margin={{ top: '60px', bottom: '80px' }} />
        </InnerContent>
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(WorksContentContainer)
