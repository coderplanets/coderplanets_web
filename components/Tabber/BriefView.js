import React from 'react'

import { Wrapper, TabItem } from './styles/brief_view'
import TabIcon from './TabIcon'

import { uid, Trans, sortByIndex } from '../../utils'

const BriefView = ({ source, active, onChange }) => (
  <Wrapper>
    {sortByIndex(source).map(item => (
      <TabItem
        key={uid.gen()}
        active={item.raw === active}
        onClick={onChange.bind(this, item.raw)}
      >
        <TabIcon raw={item.raw} active={active} small />
        {item.alias ? item.alias : Trans(item.title)}
      </TabItem>
    ))}
  </Wrapper>
)

export default BriefView
