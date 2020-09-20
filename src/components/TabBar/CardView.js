import React from 'react'

import { sortByIndex } from '@/utils'
import { Tabs } from '@/components/Switcher'

// priority: icon > localIcon || raw
const getLocalIcon = (item) => {
  if (item.icon) return ''

  return item.localIcon ? item.localIcon : item.raw
}

const CardView = ({ source, active, onChange, view }) => {
  const items = source.map((item) => ({
    ...item,
    localIcon: getLocalIcon(item),
  }))

  return (
    <Tabs
      items={sortByIndex(items)}
      activeKey={active}
      onChange={onChange}
      view={view}
    />
  )
}

export default React.memo(CardView)
