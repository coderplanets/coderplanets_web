import React from 'react'

import { ICON_CMD } from '@config'
import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/perv/bottom'

const Bottom = ({ disabled, pageNumber, onChange }) => {
  return (
    <React.Fragment>
      {disabled ? (
        <Wrapper disabled>
          <ArrowWrapper>
            <Icon src={`${ICON_CMD}/footer-navi-arrow-bottom.svg`} />
          </ArrowWrapper>
          <NaviInfo disabled>
            <Hint>第 1 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber - 1)}>
          <ArrowWrapper>
            <Icon src={`${ICON_CMD}/footer-navi-arrow-bottom.svg`} />
          </ArrowWrapper>
          <NaviInfo>
            <Hint>第 {pageNumber - 1} 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      )}
    </React.Fragment>
  )
}

export default React.memo(Bottom)
