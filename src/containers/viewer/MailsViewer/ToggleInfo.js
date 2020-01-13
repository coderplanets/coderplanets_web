import React from 'react'

// import { ICON_CMD } from '@config'
import ToggleReadButton from './ToggleReadButton'
import { Wrapper, Info, Number } from './styles/toggle_info'

const ToggleInfo = ({ readState, totalCount }) => (
  <Wrapper>
    <Info>
      {readState ? <span>未读消息共</span> : <span>已读消息共</span>}
      <Number>{totalCount}</Number>条
    </Info>
    <ToggleReadButton readState={readState} />
  </Wrapper>
)

export default ToggleInfo
