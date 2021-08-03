/*
 *
 * Expand Button
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  ArrowIcon,
  Text,
} from '../styles/subscribed_list/expand_button'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

type TProps = {
  isExpanded?: boolean
  onClick?: () => void
}

const ExpandButton: FC<TProps> = ({ isExpanded = false, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <ArrowIcon src={`${ICON}/shape/vote-up.svg`} reverse={isExpanded} />
      {isExpanded ? <Text>展开</Text> : <Text>收起</Text>}
    </Wrapper>
  )
}

export default memo(ExpandButton)
