/*
 *
 * Tabs
 *
 */

import { FC, useCallback, memo } from 'react'

import type { TTabItem } from '@/spec'
import { isString } from '@/utils/validator'
import { buildLog } from '@/utils/logger'

import { Wrapper, TabItem } from '../styles/tabs/drawer_view'

/* eslint-disable-next-line */
const log = buildLog('w:Tabs:index')

const temItems = [
  {
    title: '帖子',
    // icon: `${ICON_CMD}/navi/fire.svg`,
    localIcon: 'settings',
  },
]

type TProps = {
  items?: TTabItem[]
  onChange: () => void
  activeKey?: string
  // slipHeight: '1px' | '2px'
}

const Tabs: FC<TProps> = ({
  onChange = log,
  items = temItems,
  activeKey = '',
}) => {
  const handleItemClick = useCallback(
    (item) => {
      onChange(isString(item) ? item : item.raw || item.title)
    },
    [onChange],
  )

  return (
    <Wrapper testid="tabs">
      {items.map((item) => (
        <TabItem
          key={isString(item) ? item : item.raw || item.title}
          $active={activeKey === item.raw}
          onClick={() => handleItemClick(item)}
        >
          {item.title}
        </TabItem>
      ))}
    </Wrapper>
  )
}

export default memo(Tabs)
