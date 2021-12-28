import { FC, memo, Fragment } from 'react'
import { isMobile } from 'react-device-detect'

import { report, authWarn } from '@/utils/helper'
import { useAccount } from '@/hooks'

import DotDivider from '@/widgets/DotDivider'

import { Wrapper, Item, ReferNum, Text } from '../styles/actions'
import { toggleActionPanel } from '../logic'

type TProps = {
  citingCount: number
  showReferenceList: boolean
  showOperationList: boolean
}

const Actions: FC<TProps> = ({
  citingCount,
  showReferenceList,
  showOperationList,
}) => {
  const { isValidSession } = useAccount()

  return (
    <Wrapper>
      {citingCount !== 0 && (
        <Fragment>
          <Item onClick={() => toggleActionPanel('reference-list')}>
            <Text active={showReferenceList}>
              <ReferNum>{citingCount}</ReferNum>
              {!isMobile && <span>次</span>}
              引用
            </Text>
          </Item>
          <DotDivider space={8} />
        </Fragment>
      )}

      {/* <Item onClick={() => toggleActionPanel('operation-list')}>
        <Text active={showOperationList}>日志</Text>
      </Item> */}
      {/* <DotDivider space={8} /> */}
      <Item
        onClick={() => {
          if (!isValidSession) return authWarn()

          report('ARTICLE')
        }}
      >
        <Text>举报</Text>
      </Item>
    </Wrapper>
  )
}

export default memo(Actions)
