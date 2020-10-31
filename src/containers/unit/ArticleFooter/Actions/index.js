import React from 'react'

import { ICON } from '@/config'
import { useDevice } from '@/hooks'

import { Space } from '@/components/Common'

import {
  Wrapper,
  Item,
  ReferIcon,
  RecordIcon,
  ReferNum,
  Text,
} from '../styles/actions'
import { toggleActionPanel } from '../logic'

const Actions = ({ showReferenceList, showOperationList }) => {
  const { isMobile } = useDevice()

  return (
    <Wrapper>
      <Item onClick={() => toggleActionPanel('reference-list')}>
        <ReferIcon src={`${ICON}/article/reference.svg`} />
        <Text active={showReferenceList}>
          <ReferNum>6</ReferNum>
          {!isMobile && <span>次</span>}
          引用
        </Text>
      </Item>
      <Space left="14px" />
      <Item onClick={() => toggleActionPanel('operation-list')}>
        <RecordIcon src={`${ICON}/article/action-record.svg`} />
        <Text active={showOperationList}>
          操作
          {!isMobile && <span>记录</span>}
        </Text>
      </Item>
    </Wrapper>
  )
}

export default React.memo(Actions)
