import React from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Item,
  Text,
  ViewdIcon,
  LikeIcon,
  ReportIcon,
  Divider,
} from '../styles/desktop_view/state_info'

const StateInfo = () => {
  return (
    <Wrapper>
      <Item>
        <ViewdIcon src={`${ICON}/viewed.svg`} />
        <Text>1148</Text>
      </Item>
      <Item>
        <LikeIcon src={`${ICON}/comment.svg`} />
        <Text>24</Text>
      </Item>
      <Divider />
      <Item>
        <ReportIcon src={`${ICON}/report-ghost.svg`} />
      </Item>
    </Wrapper>
  )
}

export default React.memo(StateInfo)
