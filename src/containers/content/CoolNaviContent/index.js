/*
 *
 * CoolNaviContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import NaviMenu from '@components/NaviMenu'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolNaviContent')

const CoolNaviContentContainer = ({ coolNaviContent }) => {
  useInit(coolNaviContent)

  return (
    <Wrapper>
      <InnerWrapper>
        <NaviMenu />
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CoolNaviContentContainer)
