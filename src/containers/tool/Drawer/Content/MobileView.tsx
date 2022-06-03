import { FC, useEffect, useRef, useState, memo } from 'react'

import CustomScroller from '@/widgets/CustomScroller'

import type { TSwipeOption, TExtraInfo } from '../spec'
import renderContent from './renderContent'
import { getMobileContentHeight } from '../styles/metrics'
import { Wrapper } from '../styles/content'
import { toggleSwipeAviliable, toggleHeaderTextVisiable } from '../logic'

type TProps = {
  visible: boolean
  options: TSwipeOption
  type: string // TODO
  attUser: any // TODO
  extraInfo: TExtraInfo
}

const Content: FC<TProps> = ({
  visible,
  options,
  type,
  attUser,
  extraInfo,
}) => {
  const ref = useRef(null)

  const [topEnterTimer, setTopEnterTimer] = useState(null)
  const [topHeaderTextTimer, setTopHeaderTextTimer] = useState(null)

  /*
   * reset when content visible
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
        /*
         * 当马上下滑又回到顶部时，清除下滑 setTimeout 定时, 否则速度过快会导致
         * headerTextVisiable 因为时间差被错误的置为 true
         */
        if (topHeaderTextTimer) {
          clearTimeout(topHeaderTextTimer)
          setTopHeaderTextTimer(null)
        }
        // 回到顶部时马上影藏 Title 文字
        toggleHeaderTextVisiable(false)

        /*
         * 这里的 0.8s 是防止从底部快速上滑到顶部时造成意外关闭
         * 有了这 0.8s, 就可以等滑动结束再判断
         *
         * 注意这个值是在桌面浏览器上反复试出的最佳值，过大或过小都不自然
         */
        const topEnterTimer = setTimeout(() => {
          toggleSwipeAviliable('down', true)
        }, 800)

        /*
         * 这里的 timer 是为了防止一进入 panel 就下滑导致的时间差将 topEnter
         * 置为 true，导致误判
         */
        setTopEnterTimer(topEnterTimer)
      }}
      onTopLeave={() => {
        /**
         * 这里的 Timer 是用于当 panel 向下滑动一段时间后才显示
         * header 文字（如果有的话）。因为 customScroller 当前无法
         * 在回调中暴露出滑动的 offset 距离，所以这里的 timer 是一种妥协
         *
         * 更好的做法应该是根据 customScroller 已经滑动的距离来判断是否
         * 显示 headerText 文字。
         */
        const topHeaderTextTimer = setTimeout(() => {
          toggleHeaderTextVisiable(true)
        }, 1000)
        setTopHeaderTextTimer(topHeaderTextTimer)

        if (topEnterTimer) {
          clearTimeout(topEnterTimer)
          setTopEnterTimer(null)
        }

        toggleSwipeAviliable('down', false)
      }}
      onBottomEnter={() => toggleSwipeAviliable('up', true)}
      onBottomLeave={() => toggleSwipeAviliable('up', false)}
      autoHide
    >
      <Wrapper ref={ref}>{renderContent(type, attUser, extraInfo)}</Wrapper>
    </CustomScroller>
  )
}

export default memo(Content)
