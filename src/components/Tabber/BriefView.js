import React from 'react'

import { sortByIndex } from '@/utils'

import { Tabs } from '@/components/Switcher'
import { Wrapper } from './styles/brief_view'
// import TabIcon from './TabIcon'

const BriefView = ({ source, active, onChange }) => {
  const items = source.map(item => ({ ...item, localIcon: item.raw }))

  return (
    <Wrapper>
      <Tabs
        items={sortByIndex(items)}
        activeKey={active}
        onChange={onChange}
        size="small"
        slipHeight="1px"
      />
    </Wrapper>
  )
}

export default React.memo(BriefView)
