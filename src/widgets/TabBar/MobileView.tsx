import { memo } from 'react'

import { sortByIndex } from '@/utils/helper'
import Tabs from '@/widgets/Switcher/Tabs'

// priority: icon > localIcon || raw
const getLocalIcon = (item) => {
  if (item.icon) return ''

  return item.localIcon ? item.localIcon : item.raw
}

const MobileView = ({ source, active, onChange, view }) => {
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

export default memo(MobileView)
