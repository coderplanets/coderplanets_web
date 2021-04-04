/*
 *
 * PromotionList
 *
 */

import React, { useState } from 'react'
import { findIndex } from 'ramda'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

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
}

const PromotionList: React.FC<TProps> = ({
  show = true,
  onAbout = log,
  items = fakeItems,
}) => {
  const [activeId, setActiveId] = useState(items[0].id)
  const activeItemIndex = findIndex((item) => item.id === activeId, items)
  const activeItem = items[activeItemIndex]

  return (
    <Wrapper>
      {show && (
        <>
          <Header>
            <Title>产品推广</Title>
            <div onClick={onAbout}>
              <AboutIcon src={`${ICON_CMD}/sidebar_ads_about.svg`} />
            </div>
          </Header>
          <Spotlight item={activeItem} />
          <WaitList items={items} activeId={activeId} />
        </>
      )}
    </Wrapper>
  )
}

export default React.memo(PromotionList)
