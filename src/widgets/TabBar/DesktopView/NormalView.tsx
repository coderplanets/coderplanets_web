import { memo } from 'react'

import { sortByIndex } from '@/utils/helper'
import { Tabs } from '@/widgets/Switcher'

// priority: icon > localIcon || raw
const getLocalIcon = (item) => {
  if (item.icon) return ''

  return item.localIcon ? item.localIcon : item.raw
}

const NormalView = ({ layout, source, active, onChange, size }) => {
  const items = source.map((item) => ({
    ...item,
    localIcon: getLocalIcon(item),
  }))

  return (
    <Tabs
      layout={layout}
      items={sortByIndex(items)}
      activeKey={active}
      onChange={onChange}
      size={size}
    />
  )
}

export default memo(NormalView)
