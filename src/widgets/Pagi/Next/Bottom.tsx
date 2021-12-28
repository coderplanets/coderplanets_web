import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import { ICON } from '@/config'

import type { TProps as TIndex } from '../Perv'
import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/next/bottom'

type TProps = Omit<TIndex, 'type'>
const Bottom: FC<TProps> = ({ disabled, pageNumber, onChange }) => {
  const iconSrc = !isMobile
    ? `${ICON}/shape/arrow.svg`
    : `${ICON}/shape/arrow-simple.svg`

  return (
    <>
      {disabled ? (
        <Wrapper disabled>
          <NaviInfo disabled>
            <Hint>第 {pageNumber} 页</Hint>
            <Navi>下一页</Navi>
          </NaviInfo>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber + 1)}>
          <NaviInfo>
            <Hint>第 {pageNumber + 1} 页</Hint>
            <Navi>下一页</Navi>
          </NaviInfo>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default memo(Bottom)
