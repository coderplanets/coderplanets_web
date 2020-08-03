import React from 'react'

import { ICON_CMD } from '@/config'
import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/next/bottom'

const Bottom = ({ disabled, pageNumber, onChange }) => {
  return (
    <>
      {disabled ? (
        <Wrapper disabled>
          <NaviInfo disabled>
            <Hint>第 {pageNumber} 页</Hint>
            <Navi>下一页</Navi>
          </NaviInfo>
          <ArrowWrapper>
            <Icon src={`${ICON_CMD}/footer-navi-arrow-bottom.svg`} />
          </ArrowWrapper>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber + 1)}>
          <NaviInfo>
            <Hint>第 {pageNumber + 1} 页</Hint>
            <Navi>下一页</Navi>
          </NaviInfo>
          <ArrowWrapper>
            <Icon src={`${ICON_CMD}/footer-navi-arrow-bottom.svg`} />
          </ArrowWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default React.memo(Bottom)
