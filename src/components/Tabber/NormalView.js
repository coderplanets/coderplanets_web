import React from 'react'

import { sortByIndex } from '@utils'
import Tabs from '@components/Tabs'

// import TabIcon from './TabIcon'

const NormalView = ({ source, active, onChange }) => {
  const items = source.map(item => ({ ...item, localIcon: item.raw }))

  return (
    <Tabs items={sortByIndex(items)} activeKey={active} onChange={onChange} />
  )
}

export default NormalView
