import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import { ICON } from '@/config'

import type { TProps as TIndex } from './index'
import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/perv/bottom'

type TProps = Omit<TIndex, 'type'>

const Bottom: FC<TProps> = ({ disabled, pageNumber, onChange }) => {
  const iconSrc = !isMobile
    ? `${ICON}/shape/arrow.svg`
    : `${ICON}/shape/arrow-simple.svg`

  return (
    <>
      {disabled ? (
        <Wrapper disabled>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
          <NaviInfo disabled>
            <Hint>第 1 页</Hint>
            <Navi>上一页</Navi>
          </NaviInfo>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber - 1)}>
          <ArrowWrapper>
            <Icon src={iconSrc} />
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

export default memo(Bottom)
