/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import NaviMenu from '@components/NaviMenu'
import PagiFooter from '@components/PagiFooter'

import Banner from './Banner'
import List from './List'

import { Wrapper, ContentWrapper, InnerContent, NaviWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const WorksContentContainer = ({ worksContent }) => {
  useInit(worksContent)

  return (
    <Wrapper testid="worksContent">
      <Banner />
      <ContentWrapper>
        <NaviWrapper>
          <NaviMenu />
        </NaviWrapper>
        <InnerContent>
          <List />
          <PagiFooter margin={{ top: '60px', bottom: '80px' }} />
        </InnerContent>
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(WorksContentContainer)
