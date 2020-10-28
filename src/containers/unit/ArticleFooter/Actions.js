import React from 'react'

import { ICON } from '@/config'
import { Space } from '@/components/Common'
import {
  Wrapper,
  Item,
  ReferIcon,
  RecordIcon,
  ReferNum,
  Text,
} from './styles/actions'

const Actions = () => {
  return (
    <Wrapper>
      <Item>
        <ReferIcon src={`${ICON}/article/reference.svg`} />
        <Text>
          <ReferNum>6</ReferNum>次引用
        </Text>
      </Item>
      <Space left="14px" />
      <Item>
        <RecordIcon src={`${ICON}/article/action-record.svg`} />
        <Text>操作记录</Text>
      </Item>
    </Wrapper>
  )
}

export default React.memo(Actions)
