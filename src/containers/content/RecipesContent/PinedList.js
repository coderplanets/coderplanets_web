import React from 'react'

import { ICON_BASE } from '@/config'
import { uid } from '@/utils'

import NaviMenu from '@/components/NaviMenu'

import { Wrapper } from './styles/pined_list'

const menu = [
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/javascript.png`,
    title: 'Java',
    pinNumber: Math.floor(Math.random() * 100) + 1,
  },
  {
    // 非 IT，设计类的网站
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/ruby.png`,
    title: 'Ruby',
    pinNumber: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: uid.gen(),
    fixedIcon: `${ICON_BASE}/pl/clojure.png`,
    title: 'Clojure',
    pinNumber: Math.floor(Math.random() * 100) + 1,
  },
]

const PinedList = () => {
  return (
    <Wrapper>
      <NaviMenu
        items={menu}
        // onSelect={(id, type) => menuOnSelect(id, type)}
        // initActiveMenuId={initActiveMenuId}
        withDivider={false}
        pinNumberHoverType="unpin"
        testId="filter-pined-navi-menu"
      />
    </Wrapper>
  )
}

export default React.memo(PinedList)
