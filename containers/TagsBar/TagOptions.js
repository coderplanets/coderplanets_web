import React from 'react'

import Popover from '@components/Popover'
import DiscussLinker from '@components/DiscussLinker'
import { ICON_CMD, ISSUE_ADDR } from '@config'

import {
  Wrapper,
  MoreIcon,
  IncludeOption,
  ExcludeOption,
} from './styles/tag_options'

const TagOptions = ({ onInclude }) => (
  <Wrapper>
    <IncludeOption onClick={onInclude}>只看</IncludeOption>
    <MoreIcon src={`${ICON_CMD}/more.svg`} />
    <Popover
      placement="bottom"
      trigger="click"
      content={<DiscussLinker title="不看" addr={`${ISSUE_ADDR}/322`} />}
    >
      <ExcludeOption>不看</ExcludeOption>
    </Popover>
  </Wrapper>
)
// <div>只看/不看</div>

export default TagOptions
