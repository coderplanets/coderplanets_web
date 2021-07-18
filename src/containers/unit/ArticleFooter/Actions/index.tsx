import { FC, memo } from 'react'

import { useDevice } from '@/hooks'

import DotDivider from '@/components/DotDivider'

import { Wrapper, Item, ReferNum, Text } from '../styles/actions'
import { toggleActionPanel } from '../logic'

type TProps = {
  showReferenceList: boolean
  showOperationList: boolean
}

const Actions: FC<TProps> = ({ showReferenceList, showOperationList }) => {
  const { isMobile } = useDevice()

  return (
    <Wrapper>
      <Item onClick={() => toggleActionPanel('reference-list')}>
        <Text active={showReferenceList}>
          <ReferNum>6</ReferNum>
          {!isMobile && <span>次</span>}
          引用
        </Text>
      </Item>
      <DotDivider space={8} />
      <Item onClick={() => toggleActionPanel('operation-list')}>
        <Text active={showOperationList}>日志</Text>
      </Item>
      <DotDivider space={8} />
      <Item>
        <Text>举报</Text>
      </Item>
    </Wrapper>
  )
}

export default memo(Actions)
