import React from 'react'

import { Wrapper, TabItem } from './styles/brief_view'
import TabIcon from './TabIcon'

import { Trans, sortByIndex } from '../../utils'

const BriefView = ({ source, active, onChange }) => (
  <Wrapper>
    {sortByIndex(source).map(item => (
      <TabItem
        key={item.raw}
        active={item.raw === active}
        onClick={onChange.bind(this, item.raw)}
      >
        <TabIcon raw={item.raw} active={active} small="true" />
        {item.alias ? item.alias : Trans(item.title)}
      </TabItem>
    ))}
  </Wrapper>
)

export default BriefView
