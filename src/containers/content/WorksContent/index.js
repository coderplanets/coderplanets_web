/*
 *
 * WorksContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import NaviMenu from '@components/NaviMenu'

import Banner from './Banner'
import List from './List'

import { Wrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

const WorksContentContainer = ({ worksContent }) => {
  useInit(worksContent)

  return (
    <Wrapper testid="worksContent">
      <Banner />
      <ContentWrapper>
        <NaviMenu />
        <List />
      </ContentWrapper>
    </Wrapper>
  )
}

export default connectStore(WorksContentContainer)
