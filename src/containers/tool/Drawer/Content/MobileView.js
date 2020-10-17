import React, { useEffect, useRef, useState } from 'react'

import CustomScroller from '@/components/CustomScroller'

import renderContent from './renderContent'

import { Wrapper } from '../styles/content'
import { getMobileContentHeight } from '../styles/metrics'
import { toggleSwipeAviliable, toggleHeaderTextVisiable } from '../logic'

const Content = ({ visible, options, type, attachment, attUser, mmType }) => {
  const ref = useRef(null)

  const [topEnterTimer, setTopEnterTimer] = useState(null)

  /*
   * reset when content visiable
   * scroll to top always
   */
  useEffect(() => {
    if (visible && ref?.current) {
      ref.current.scrollIntoView()
    }
  }, [visible, ref])

  return (
    <CustomScroller
      direction="vertical"
      height={`calc(${getMobileContentHeight(options)} - 30px)`}
      showShadow={false}
      onTopEnter={() => {
        toggleHeaderTextVisiable(false)
        /*
         * 这里的 0.8s 是防止从底部快速上滑到顶部时造成意外关闭
         * 有了这 0.8s, 就可以等滑动结束再判断
         *
         * 注意这个值是在桌面浏览器上反复试出的最佳值，过大或过小都不得劲
         */
        const topEnterTimer = setTimeout(() => {
          toggleSwipeAviliable('Down', true)
        }, 800)

        /*
         * 这里的 timer 是为了防止一进入 panel 就下滑导致的时间差将 topEnter
         * 置为 true，导致误判
         */
        setTopEnterTimer(topEnterTimer)
      }}
      onTopLeave={() => {
        toggleHeaderTextVisiable(true)
        if (topEnterTimer) {
          clearTimeout(topEnterTimer)
          setTopEnterTimer(null)
        }

        toggleSwipeAviliable('Down', false)
      }}
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

export default React.memo(Content)
