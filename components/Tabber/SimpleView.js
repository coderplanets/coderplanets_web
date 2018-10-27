import React from 'react'
import R from 'ramda'

import { Wrapper, TabItem } from './styles/simple_view'
import TabIcon from './TabIcon'

import { uid, Trans } from '../../utils'

const SimpleView = ({ source, active, onChange }) => {
  const tabitems = R.values(source)

  return (
    <Wrapper>
      {tabitems.map(item => (
        <TabItem
          key={uid.gen()}
          active={item.raw === active}
          onClick={onChange.bind(this, item.raw)}
        >
          <TabIcon raw={item.raw} active={active} small />
          {Trans(item.title)}
        </TabItem>
      ))}
    </Wrapper>
  )
}

export default SimpleView
