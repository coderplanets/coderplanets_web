import { memo } from 'react'

import { sortByIndex } from '@/utils'
import { Tabs } from '@/components/Switcher'

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

  console.log('tam >>> ', layout)
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
