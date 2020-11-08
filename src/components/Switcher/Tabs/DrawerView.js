/*
 *
 * Tabs
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'

import { buildLog, isString } from '@/utils'

import { Wrapper, TabItem } from '../styles/tabs/drawer_view'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const temItems = [
  {
    title: '帖子',
    // icon: `${ICON_CMD}/navi/fire.svg`,
    localIcon: 'settings',
  },
]

const Tabs = ({ size, onChange, items, activeKey }) => {
  const handleItemClick = useCallback(
    (item) => {
      onChange(isString(item) ? item : item.raw || item.title)
    },
    [onChange],
  )

  return (
    <Wrapper testId="tabs">
      {items.map((item) => (
        <TabItem
          key={isString(item) ? item : item.raw || item.title}
          active={activeKey === item.raw}
          size={size}
          onClick={() => handleItemClick(item)}
        >
          {item.title}
        </TabItem>
      ))}
    </Wrapper>
  )
}

Tabs.propTypes = {
  items: T.oneOfType([
    T.arrayOf(T.string),
    T.arrayOf(
      T.shape({
        title: T.string,
        raw: T.string,
        alias: T.string,
        icon: T.oneOfType([T.string, T.node]),
        localIcon: T.string,
      }),
    ),
  ]),
  onChange: T.func,
  activeKey: T.string,
  size: T.oneOf(['default', 'small']),
}

Tabs.defaultProps = {
  items: temItems,
  onChange: log,
  activeKey: '',
  size: 'default',
}

export default React.memo(Tabs)
