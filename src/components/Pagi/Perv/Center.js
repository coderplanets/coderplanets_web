import React from 'react'

import { ICON_CMD } from '@/config'
import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/perv/center'

const Center = ({ disabled, pageNumber, onChange }) => {
  return (
    <>
      {disabled ? (
        <Wrapper disabled>
          <ArrowWrapper>
            <Icon src={`${ICON_CMD}/footer-navi-arrow.svg`} />
          </ArrowWrapper>
          <NaviInfo disabled>
            <Hint>第 1 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber - 1)}>
          <ArrowWrapper>
            <Icon src={`${ICON_CMD}/footer-navi-arrow.svg`} />
          </ArrowWrapper>
          <NaviInfo>
            <Hint>第 {pageNumber - 1} 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      )}
    </>
  )
}

export default React.memo(Center)
