/*
 *
 * PromotionList
 *
 */

import React, { useState, useRef } from 'react'
import { findIndex } from 'ramda'

import { ICON } from '@/config'
import { buildLog } from '@/utils'
import { useInterval } from '@/hooks'

import useHoverDirty from 'react-use/lib/useHoverDirty'

import type { TItem } from './spec'
import Spotlight from './Spotlight'
import WaitList from './WaitList'

import { Wrapper, Header, Title, AboutIcon } from './styles'
import fakeItems from './fakeItems'

/* eslint-disable-next-line */
const log = buildLog('c:PromotionList:index')

type TProps = {
  show?: boolean
  onAbout?: () => void
  items: TItem[]
  intervalSec?: number
}

const PromotionList: React.FC<TProps> = ({
  show = true,
  onAbout = log,
  items = fakeItems,
  intervalSec = 5000,
}) => {
  const [activeId, setActiveId] = useState<string>(items[0].id)
  const activeItemIndex = findIndex((item) => item.id === activeId, items)
  const activeItem = items[activeItemIndex]

  const ref = useRef(null)

  const isHovering = useHoverDirty(ref)

  useInterval(() => {
    if (isHovering) return
    const nextIndex =
      activeItemIndex < items.length - 1 ? activeItemIndex + 1 : 0
    setActiveId(items[nextIndex].id)
  }, intervalSec)

  return (
    <Wrapper ref={ref}>
      {show && (
        <>
          <Header>
            <Title>产品推广</Title>
            <div onClick={onAbout}>
              <AboutIcon src={`${ICON}/shape/question.svg`} />
            </div>
          </Header>
          <Spotlight item={activeItem} />
          <WaitList
            items={items}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </>
      )}
    </Wrapper>
  )
}

export default React.memo(PromotionList)
