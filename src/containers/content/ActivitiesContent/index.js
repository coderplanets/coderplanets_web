/*
 *
 * CoolNaviContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import NaviMenu from '@components/NaviMenu'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolNaviContent')

const ActivitiesContentContainer = ({ activitiesContent }) => {
  useInit(activitiesContent)

  return (
    <Wrapper>
      <InnerWrapper>
        <NaviMenu />
        <ContentWrapper>hello fuck</ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(ActivitiesContentContainer)
