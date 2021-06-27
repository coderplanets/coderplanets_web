/*
 *
 * Tabs
 *
 */

import { FC, useEffect, useCallback, useRef, memo } from 'react'

import type { TSIZE_SM, TTabItem } from '@/spec'
import { buildLog, isString, Trans } from '@/utils'

import TabIcon from './TabIcon'
import {
  Wrapper,
  Label,
  ActiveLineWrapper,
  ActiveLine,
} from '../styles/tabs/tab_item'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

type TProps = {
  mobileView?: boolean
  modelineView?: boolean
  cardView?: boolean
  wrapMode?: boolean
  item: TTabItem
  index: number
  size: TSIZE_SM
  activeKey: string
  setItemWidth?: (index: number, width: number) => void
  onClick?: (index: number, e) => void
}

const TabItem: FC<TProps> = ({
  mobileView = false,
  modelineView = false,
  cardView = false,
  wrapMode = false,
  activeKey,
  item,
  index,
  size,
  onClick,
  setItemWidth,
}) => {
  const ref = useRef(null)
  const clickableRef = useRef(null)
  const activeRef = useRef(null)

  // set each tab item width for calc
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    setItemWidth?.(index, width)
  }, [setItemWidth, index])

  const handleWrapperClick = useCallback(() => {
    clickableRef.current.click()
  }, [clickableRef])

  const handleLabelClick = useCallback(
    (e) => {
      e.stopPropagation()
      onClick(index, e)
    },
    [onClick, index],
  )

  useEffect(() => {
    if (item.raw === activeKey && (mobileView || modelineView) && !wrapMode) {
      const curEl = activeRef?.current
      // 这里的 width 是一个 hack, 每一个 TabItem 会触发设置宽度的
      // 父元素钩子，导致两次渲染，但是第一次没有调用之前每个 Item 的宽度是 auto
      // 利用这个特性可以判断真正需要 scroll 到 view 的元素
      if (curEl && getComputedStyle(curEl).width !== 'auto') {
        curEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          // inline: 'center',
        })
      }
    }
  }, [item, activeKey, mobileView, modelineView, wrapMode])

  return (
    <Wrapper
      ref={ref}
      mobileView={mobileView}
      modelineView={modelineView}
      cardView={cardView}
      wrapMode={wrapMode}
      size={size}
      onClick={handleWrapperClick}
      active={item.raw === activeKey}
    >
      <Label
        ref={clickableRef}
        onClick={handleLabelClick}
        active={item.raw === activeKey}
      >
        {!isString(item) && (item.icon || item.localIcon) && (
          <TabIcon
            item={item}
            clickableRef={clickableRef}
            active={item.raw === activeKey}
          />
        )}
        <div ref={item.raw === activeKey ? activeRef : null}>
          {isString(item) ? item : item.alias || Trans(item.title)}
        </div>
      </Label>

      {wrapMode && item.raw === activeKey && (
        <ActiveLineWrapper>
          <ActiveLine />
        </ActiveLineWrapper>
      )}
    </Wrapper>
  )
}

export default memo(TabItem)
