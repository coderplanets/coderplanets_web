import React from 'react'

import { useMedia } from '@/hooks'

import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'

import { Wrapper } from '../styles/content'
import { getMobileContentHeight } from '../styles/metrics'
import { toggleSwipeAviliable } from '../logic'

const Content = ({ options, type, attachment, attUser, mmType }) => {
  const { mobile } = useMedia()

  if (mobile) {
    return (
      <CustomScroller
        direction="vertical"
        height={`calc(${getMobileContentHeight(options)} - 30px)`}
        showShadow={false}
        onTopEnter={() => toggleSwipeAviliable('Down', true)}
        onTopLeave={() => toggleSwipeAviliable('Down', false)}
        onBottomEnter={() => toggleSwipeAviliable('Up', true)}
        onBottomLeave={() => toggleSwipeAviliable('Up', false)}
        autoHide
      >
        <Wrapper>{renderContent(type, attachment, attUser, mmType)}</Wrapper>
      </CustomScroller>
    )
  }

  return (
    <Wrapper>
      <CustomScroller direction="vertical" height="100vh" shadowSize="small">
        <div>{renderContent(type, attachment, attUser)}</div>
      </CustomScroller>
    </Wrapper>
  )
}

export default React.memo(Content)
