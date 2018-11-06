import React from 'react'
import R from 'ramda'
import { Tabs } from 'antd'

import { LableWrapper } from './styles'
import TabIcon from './TabIcon'

import { Trans } from '../../utils'

const { TabPane } = Tabs

const NormalView = ({ source, active, onChange }) => {
  const tabitems = R.values(source)

  return (
    <Tabs onChange={onChange} activeKey={active}>
      {tabitems.map(item => (
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
