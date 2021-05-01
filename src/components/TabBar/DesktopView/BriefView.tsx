import React, { FC } from 'react'

import type { TTabItem } from '@/spec'
import { sortByIndex } from '@/utils'
import { Tabs } from '@/components/Switcher'

import { Wrapper } from '../styles/desktop_view/brief_view'
// import TabIcon from './TabIcon'

type TProps = {
  source: TTabItem[]
  active: string
  onChange?: () => void
}

const BriefView: FC<TProps> = ({ source, active, onChange }) => {
  const items = source.map((item) => ({ ...item, localIcon: item.raw }))

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
