import styled from 'styled-components'
import { lighten } from 'polished'

import { css, theme } from '@/utils'
import { TButtonSize, TButton } from '@/spec'

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
  font-size: 14px;
  border-radius: 4px;
  height: ${({ size }) => getHeight(size)};
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;

  color: ${({ ghost, disabled }) => getColor(ghost, disabled)};
  background-color: ${({ ghost, disabled }) =>
    getBackgroundColor(ghost, disabled)};
  border-color: ${({ noBorder, disabled }) =>
    getBorderColor(noBorder, disabled)};

  opacity: ${({ noBorder }) => (noBorder ? '0.7' : 1)};

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
export const ChildrenWrapper = styled.div<{ size: TButtonSize }>`
  ${css.flex('align-both')};
  font-size: ${({ size }) => getFontSize(size)};
  position: relative;
  z-index: 2;
`
export const RealChildren = styled.div<{ loading: boolean }>`
  ${css.flex('align-both')};
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`
export const LoadingText = styled.div<{ loading: boolean }>`
  opacity: ${({ loading }) => (!loading ? 0 : 1)};
  position: absolute;
`
export const LoadingMask = styled.div<{ width: string }>`
  position: absolute;
  width: ${({ width }) => width};
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ width }) => (width === '100%' ? 'transparent' : '#2c6b94')};
  z-index: 1;
  transition: width 0.3s;
`
export const RedWrapper = styled(Wrapper)`
  color: ${({ ghost }) => (ghost ? theme('baseColor.red') : 'white')};
  background-color: ${({ ghost }) =>
    !ghost ? theme('baseColor.red') : 'transparent'};
  border-color: ${theme('baseColor.red')};

  &:hover {
    border: 2px solid;
    background-color: ${({ ghost }) =>
      !ghost ? lighten(0.1, 'tomato') : 'transparent'};
    border-color: ${lighten(0.1, 'tomato')};
    font-weight: ${({ ghost }) => (ghost ? 'bold' : 'normal')};
  }
  &:focus {
    border: 2px solid;
    background-color: ${({ ghost }) =>
      !ghost ? lighten(0.1, 'tomato') : 'transparent'};
    border-color: ${lighten(0.1, 'tomato')};
    font-weight: ${({ ghost }) => (ghost ? 'bold' : 'normal')};
  }
  &:active {
    border: 2px solid;
    background-color: ${({ ghost }) =>
      !ghost ? lighten(0.1, 'tomato') : 'transparent'};
    border-color: ${lighten(0.1, 'tomato')};
    font-weight: ${({ ghost }) => (ghost ? 'bold' : 'normal')};
  }
  transition: all 0.25s;
`
