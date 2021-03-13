import styled from 'styled-components'

import Img from '@/Img'
import { css } from '@/utils'

import {
  getWidth,
  getIconSize,
  getFontSize,
  getMargin,
  getSimpleMargin,
} from './metircs/arrow_button'

type TWrapper = {
  disabled: boolean
  dimWhenIdle: boolean
  size: string
  width: number
}
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-center')};
  opacity: ${({ dimWhenIdle, disabled }) =>
    dimWhenIdle || disabled ? '0.65' : 1};
  min-width: ${({ size, width }) => getWidth(size, width)};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  }
  transition: all 0.25s;
`
export const Text = styled.div<{ size: string }>`
  font-size: ${({ size }) => getFontSize(size)};
  color: #327ca1;
`
export const Icon = styled(Img)<{ size: string }>`
  fill: #327ca1;
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  display: block;
  transition: all 0.2s;
`
type TIcon = { size: string; arrowStyle: string; disabled: boolean }
export const LeftIcon = styled(Icon)<TIcon>`
  margin-right: ${({ size, arrowStyle }) =>
    arrowStyle === 'default' ? getMargin(size) : getSimpleMargin(size)};

  ${Wrapper}:hover & {
    margin-left: ${({ arrowStyle, disabled }) => {
      if (disabled) return 0
      return arrowStyle === 'default' ? '-4px' : '-2px'
    }};
    /* margin-left: ${({ size, arrowStyle, disabled }) => {
      return arrowStyle === 'default'
        ? `-${getMargin(size, !disabled)}`
        : `-${getSimpleMargin(size, !disabled)}`
    }}; */
    fill: #327ca1;
  }
`
export const RightIcon = styled(Icon)<TIcon>`
  margin-left: ${({ size, arrowStyle }) =>
    arrowStyle === 'default' ? getMargin(size) : getSimpleMargin(size)};

  ${Wrapper}:hover & {
    margin-left: ${({ size, arrowStyle, disabled }) => {
      return arrowStyle === 'default'
        ? getMargin(size, !disabled)
        : getSimpleMargin(size, !disabled)
    }};
    fill: #327ca1;
  }

  transform: rotate(180deg);
`
