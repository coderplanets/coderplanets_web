import styled from 'styled-components'
import { lighten } from 'polished'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import type { TSIZE, TButton } from '@/spec'

import {
  getColor,
  getBackgroundColor,
  getBorderColor,
  getHeight,
  getPadding,
  getFontSize,
} from './metircs/button'

export const Wrapper = styled.button<TButton>`
  ${css.flex('align-both')};
  -webkit-appearance: button;
  outline: none;

  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: ${({ size }) => getPadding(size)};
  font-size: ${({ size }) => getFontSize(size)};
  /* font-size: 14px; */
  border-radius: 4px;
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

  &:hover {
    color: ${({ ghost, disabled }) => getColor(ghost, disabled)};
    border-color: ${({ noBorder, disabled }) =>
      getBorderColor(noBorder, disabled, true)};
    background-color: ${({ ghost, disabled }) =>
      getBackgroundColor(ghost, disabled, true)};
    opacity: 1;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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
export const ChildrenWrapper = styled.div<{ size: TSIZE }>`
  ${css.flex('align-both')};
  font-size: ${({ size }) => getFontSize(size)};
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
