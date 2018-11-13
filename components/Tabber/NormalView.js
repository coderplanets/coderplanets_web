import React from 'react'
import R from 'ramda'
import { Tabs } from 'antd'

import { LableWrapper } from './styles'
import TabIcon from './TabIcon'

import { Trans } from '../../utils'

const { TabPane } = Tabs

const NormalView = ({ source, active, onChange }) => {
  const sortedTabs = R.sort((a, b) => a.index - b.index, source)

  return (
    <Tabs onChange={onChange} activeKey={active}>
      {sortedTabs.map(item => (
        <TabPane
          tab={
            <LableWrapper>
              <TabIcon raw={item.raw} active={active} />
              {item.alias ? item.alias : Trans(item.title)}
            </LableWrapper>
          }
          key={item.raw}
        />
      ))}
    </Tabs>
  )
}

export default NormalView
