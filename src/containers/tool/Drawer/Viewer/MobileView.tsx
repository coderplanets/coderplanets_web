import { FC, ReactNode, useEffect, useState, memo, useRef } from 'react'
import { useTheme } from 'styled-components'

import type { TThemeMap } from '@/spec'
import useSwipe from '@/hooks/useSwipe'

import type { TSwipeOption } from '../spec'
import AddOn from '../AddOn'
import Header from '../Header'

import {
  DrawerOverlay,
  DrawerWrapper,
  DrawerMobileContent,
  MobileInnerContent,
} from '../styles'

import {
  closeDrawer,
  onSwipedYHandler,
  onSwipingYHandler,
  resetSwipeAviliable,
} from '../logic'

type TProps = {
  testid?: string
  headerText: string
  options: TSwipeOption
  visible: boolean
  type: string
  canBeClose: boolean
  showHeaderText: boolean
  disableContentDrag: boolean
  children: ReactNode
}

const Viewer: FC<TProps> = ({
  testid = 'drawer-sidebar-panel',
  headerText,
  options,
  visible,
  type,
  canBeClose,
  showHeaderText,
  disableContentDrag,
  children,
}) => {
  const theme: TThemeMap = useTheme()
  // swipe action state for top && bottom
  // null means restore and close
  const [swipeDownY, setSwipeDownY] = useState(null)
  const [swipeUpY, setSwipeUpY] = useState(null)

  const overlayRef = useRef(null)

  // NOTE: important: reset swipe position when drawer closed
  useEffect(() => {
    // not work
    // if (visible) {
    //   if (overlayRef) {
    //     setTimeout(() => {
    //       overlayRef.current.scrollTo(0, 10)
    //     }, 200)
    //   }
    // }
    if (!visible) {
      setSwipeDownY(null)
      setSwipeUpY(null)
      resetSwipeAviliable()
    }
  }, [visible, overlayRef])

  /**
   * 注意这里有一个坑，在进入 Drawer 滑动到最底部快速往上滑动时
   * CustomScroller 不会阻止 swipe 状态，导致 swipe 状态依然在
   * 记录中，这是松手会导致 Drawer 以外关闭，需要在下层 Content 中
   * 做时间差处理
   */
  const swipeHandlers = useSwipe({
    onSwiped: (ev) => {
      if (disableContentDrag) return false
      onSwipedYHandler(ev, setSwipeUpY, setSwipeDownY)
    },
    onSwiping: (ev) => {
      if (disableContentDrag) return false
      onSwipingYHandler(ev, setSwipeUpY, setSwipeDownY)
    },
  })

  return (
    <div>
      <DrawerOverlay
        ref={overlayRef}
        visible={visible}
        onClick={() => closeDrawer()}
      />
      <DrawerWrapper
        testid={testid}
        visible={visible}
        type={type}
        swipeUpY={swipeUpY}
        swipeDownY={swipeDownY}
        options={options}
        mobile
      >
        <AddOn type={type} />
        <DrawerMobileContent options={options} bgColor={theme.drawer.bg}>
          <MobileInnerContent
            options={options}
            swipeUpY={swipeUpY}
            swipeDownY={swipeDownY}
            {...swipeHandlers}
          >
            {children}
          </MobileInnerContent>
        </DrawerMobileContent>
        <Header
          headerText={headerText}
          options={options}
          setSwipeDownY={setSwipeDownY}
          setSwipeUpY={setSwipeUpY}
          canBeClose={canBeClose}
          showHeaderText={showHeaderText}
        />
      </DrawerWrapper>
    </div>
  )
}

export default memo(Viewer)
