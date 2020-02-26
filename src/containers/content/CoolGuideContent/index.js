/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import NaviMenu from '@components/NaviMenu'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, menuOnSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const CoolGuideContentContainer = ({ coolGuideContent }) => {
  useInit(coolGuideContent)

  const { displayType } = coolGuideContent

  return (
    <Wrapper>
      <InnerWrapper>
        <NaviMenu onSelect={(id, type) => menuOnSelect(id, type)} />
        <ContentWrapper>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CoolGuideContentContainer)
