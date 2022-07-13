import styled from 'styled-components'
import { lighten } from 'polished'

import css, { theme } from '@/utils/css'
import type { TSize, TButton, TSpace } from '@/spec'

import {
  getColor,
  getBackgroundColor,
  getBorderColor,
  getHeight,
  getPadding,
  getFontSize,
} from './metircs/button'

type TWrapper = TButton & TSpace
export const Wrapper = styled.button<TWrapper>`
  ${css.flex('align-both')};
  -webkit-appearance: button;
  outline: none;
  // otherwise the slim effect will appear outside
  overflow: hidden;

  line-height: 1.5;
  text-align: center;
  touch-action: manipulation;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: ${({ size }) => getPadding(size)};
  ${({ space }) =>
    `${
      space !== null ? `padding-left: ${space}px;padding-right: ${space}px` : ''
    }`};

  font-size: ${({ size }) => getFontSize(size)};
  border-radius: 10px;
  height: ${({ size }) => getHeight(size)};
  user-select: none;
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;

  color: ${({ ghost, disabled }) => getColor(ghost, disabled)};
  background-color: ${({ ghost, disabled }) =>
    getBackgroundColor(ghost, disabled)};
  border-color: ${({ noBorder, disabled }) =>
    getBorderColor(noBorder, disabled)};

  opacity: ${({ noBorder }) => (noBorder ? '0.8' : 1)};

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    top: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }

  &:hover {
    color: ${({ ghost, disabled }) => getColor(ghost, disabled)};
    border-color: ${({ noBorder, disabled }) =>
      getBorderColor(noBorder, disabled, true)};
    background-color: ${({ ghost, disabled }) =>
      getBackgroundColor(ghost, disabled, true)};
    opacity: 1;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &::before,
    &::after {
      transform: translateX(300px) skewX(-15deg);
      transition: ${({ disabled }) => (disabled ? 0 : '0.8s')};
    }
  }

  &:focus {
    color: ${({ ghost, disabled }) => getColor(ghost, disabled)};
    border-color: ${({ noBorder, disabled }) =>
      getBorderColor(noBorder, disabled, true)};
    background-color: ${({ ghost, disabled }) =>
      getBackgroundColor(ghost, disabled, true)};
    opacity: 1;
  }

  &:active {
    color: ${({ ghost, disabled }) => getColor(ghost, disabled)};
    background-color: ${({ ghost, disabled }) =>
      getBackgroundColor(ghost, disabled, true)};
    opacity: 1;
  }
`
type TChildrenWrapper = { size: TSize; ghost: boolean; noBorder: boolean }
export const ChildrenWrapper = styled.div<TChildrenWrapper>`
  ${css.flex('align-both')};
  width: 100%;
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ ghost, noBorder }) => (ghost && noBorder ? 400 : 600)};
  position: relative;
  z-index: 2;
`
export const RedWrapper = styled(Wrapper)`
  color: ${({ ghost }) => (ghost ? theme('baseColor.red') : 'white')};
  background-color: ${({ ghost }) =>
    !ghost ? theme('baseColor.red') : 'transparent'};

  border-color: ${({ noBorder }) =>
    noBorder ? 'transparent' : theme('baseColor.red')};

  &:hover {
    background-color: ${({ ghost }) =>
      !ghost ? lighten(0.1, 'tomato') : 'transparent'};
  }
  &:focus {
    background-color: ${({ ghost }) =>
      !ghost ? lighten(0.1, 'tomato') : 'transparent'};
  }
  &:active {
    background-color: ${({ ghost }) =>
      !ghost ? lighten(0.1, 'tomato') : 'transparent'};
  }
  transition: all 0.1s;
`
