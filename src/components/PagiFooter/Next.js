import React from 'react'

import { ICON_CMD } from '@config'

import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from './styles/next'

const Next = ({ pageNumber, disabled }) => {
  return (
    <Wrapper disabled={disabled}>
      <NaviInfo>
        <Hint>第 {disabled ? pageNumber : pageNumber + 1} 页</Hint>
        <Navi>下一页</Navi>
      </NaviInfo>
      <ArrowWrapper>
        <Icon src={`${ICON_CMD}/footer-navi-arrow.svg`} />
      </ArrowWrapper>
    </Wrapper>
  )
}

export default React.memo(Next)
