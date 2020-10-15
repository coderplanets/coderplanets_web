import React, { useEffect, useRef } from 'react'

import { useMedia } from '@/hooks'

import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'

import { Wrapper } from '../styles/content'
import { getMobileContentHeight } from '../styles/metrics'
import { toggleSwipeAviliable } from '../logic'

const Content = ({ visible, options, type, attachment, attUser, mmType }) => {
  const { mobile } = useMedia()
  const ref = useRef(null)

  /*
   * reset when content visiable
   * scroll to top always
   */
  useEffect(() => {
    if (visible && ref?.current) {
      ref.current.scrollIntoView()
    }
  }, [visible, ref])

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
        <Wrapper ref={ref}>
          {renderContent(type, attachment, attUser, mmType)}
        </Wrapper>
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
