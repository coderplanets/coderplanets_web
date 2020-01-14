/*
 *
 * CoolNaviContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Sidebar from './Sidebar'
import Content from './Content'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolNaviContent')

const CoolNaviContentContainer = ({ coolNaviContent }) => {
  useInit(coolNaviContent)

  return (
    <Wrapper>
      <InnerWrapper>
        <Sidebar />
        <Content />
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CoolNaviContentContainer)
