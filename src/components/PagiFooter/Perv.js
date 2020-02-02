import React from 'react'

import { ICON_CMD } from '@config'
import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from './styles/perv'

const Perv = ({ disabled, pageNumber }) => {
  return (
    <Wrapper disabled={disabled}>
      <ArrowWrapper>
        <Icon src={`${ICON_CMD}/footer-navi-arrow.svg`} />
      </ArrowWrapper>
      <NaviInfo>
        <Hint>第 {disabled ? 1 : pageNumber - 1} 页</Hint>
        <Navi>上一页</Navi>
      </NaviInfo>
    </Wrapper>
  )
}

export default React.memo(Perv)
