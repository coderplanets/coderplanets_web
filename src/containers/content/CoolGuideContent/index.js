/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'
import { GUIDE } from '@constant'

import NaviMenu from '@components/NaviMenu'
import Content from './Content'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, menuOnSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const CoolGuideContentContainer = ({ coolGuideContent }) => {
  useInit(coolGuideContent)

  const { initActiveMenuId, displayType } = coolGuideContent

  return (
    <Wrapper>
      <InnerWrapper>
        {displayType !== GUIDE.PREVIEW && (
          <NaviMenu
            onSelect={(id, type) => menuOnSelect(id, type)}
            initActiveMenuId={initActiveMenuId}
          />
        )}
        <ContentWrapper offset={displayType !== GUIDE.PREVIEW}>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(CoolGuideContentContainer)
