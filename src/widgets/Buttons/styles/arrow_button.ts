import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import {
  getIconSize,
  getFontSize,
  getMargin,
  getSimpleMargin,
  //
  getArrowTopOffset,
  getArrowMaxWidth,
  getArrowInitWidth,
} from './metircs/arrow_button'

type TWrapper = {
  disabled: boolean
  dimWhenIdle: boolean
  direction: 'left' | 'right'
  size: string
}
export const Wrapper = styled.div<TWrapper>`
  position: relative;
  ${css.flex('align-center')};
  opacity: ${({ dimWhenIdle, disabled }) =>
    dimWhenIdle || disabled ? '0.65' : 1};
  justify-content: ${({ direction }) =>
    direction === 'left' ? 'flex-end' : 'flex-start'};
  /* margin-left: ${({ size }) => getArrowMaxWidth(size)}; */

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  }

  transition: all 0.2s;
`
export const Text = styled.div<{ size: string }>`
  font-size: ${({ size }) => getFontSize(size)};
  color: ${theme('link')};
`
export const Icon = styled(Img)<{ size: string }>`
  fill: ${theme('link')};
  width: ${({ size }) => getIconSize(size)};
  height: ${({ size }) => getIconSize(size)};
  display: block;
  transition: all 0.2s;
`
type TIcon = { size: string; arrowStyle: string }
export const LeftIcon = styled(Icon)<TIcon>`
  position: absolute;
  top: ${({ size }) => getArrowTopOffset(size)};
  left: ${({ size }) => `-${getArrowInitWidth(size)}`};

  opacity: 0.9;
  margin-right: ${({ size, arrowStyle }) =>
    arrowStyle === 'default' ? getMargin(size) : getSimpleMargin(size)};

  ${Wrapper}:hover & {
    opacity: 1;
    left: ${({ size }) => {
      return `-${getArrowMaxWidth(size)}`
    }};
  }
`
export const RightIcon = styled(Icon)<TIcon>`
  position: absolute;
  top: ${({ size }) => getArrowTopOffset(size)};
  right: ${({ size }) => `-${getArrowInitWidth(size)}`};

  opacity: 0.9;
  margin-left: ${({ size, arrowStyle }) =>
    arrowStyle === 'default' ? getMargin(size) : getSimpleMargin(size)};

  /* 多个组件同时使用的时候，这个语法有 bug, 参考 CommunityEditor 组件 */
  ${Wrapper}:hover & {
    opacity: 1;
    right: ${({ size }) => {
      return `-${getArrowMaxWidth(size)}`
    }};
  }

  transform: rotate(180deg);
`
