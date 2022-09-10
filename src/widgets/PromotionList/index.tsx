/*
 *
 * PromotionList
 *
 */

import { FC, useState, useRef, memo, Fragment } from 'react'
import { findIndex } from 'ramda'
import useHoverDirty from 'react-use/lib/useHoverDirty'

import { buildLog } from '@/utils/logger'
import useInterval from '@/hooks/useInterval'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import type { TItem } from './spec'
import Spotlight from './Spotlight'
import WaitList from './WaitList'

import { Wrapper, Header, Title, MoreHint } from './styles'
import fakeItems from './fakeItems'

/* eslint-disable-next-line */
const log = buildLog('w:PromotionList:index')

type TProps = {
  show?: boolean
  onAbout?: () => void
  items?: TItem[]
  intervalSec?: number
}

const PromotionList: FC<TProps> = ({
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
        <Fragment>
          <Header>
            <Title>热门社区</Title>
            <MoreHint onClick={onAbout}>
              <ArrowButton size="tiny" arrowStyle="simple">
                全部
              </ArrowButton>
            </MoreHint>
          </Header>
          <Spotlight item={activeItem} />
          <WaitList
            items={items}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(PromotionList)
