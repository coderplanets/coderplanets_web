import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import css, { theme } from '@/utils/css'

import {
  getActiveBackground,
  getLabelColor,
  getLabelFontsize,
  getRadioBoxSize,
  getRadioBoxTop,
  getRadioBoxLeft,
} from './metric/radio'

type TLabel = {
  size: string
  checked: boolean
  dimOnActive: boolean
}

type TWrapper = TTestable & TSpace

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-center')}

  margin-top: ${({ top }) => `${top}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const Label = styled.label<TLabel>`
  position: relative;
  font-size: ${({ size }) => getLabelFontsize(size)};
  margin-right: ${({ checked }) => (checked ? '16px' : '8px')};
  padding-left: ${({ checked }) => (checked ? '14px' : '24px')};
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};

  padding-right: 14px;
  padding-top: 1px;
  padding-bottom: 1px;
  cursor: pointer;

  background: ${({ checked, dimOnActive }) =>
    checked ? getActiveBackground(dimOnActive) : 'transparent'};
  color: ${({ checked, dimOnActive }) => getLabelColor(checked, dimOnActive)};
  border-radius: 15px;

  &:before {
    display: ${({ checked }) => (checked ? 'none' : 'block')};
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: ${({ size }) => getRadioBoxTop(size)};
    left: ${({ size }) => getRadioBoxLeft(size)};

    width: ${({ size }) => getRadioBoxSize(size)};
    height: ${({ size }) => getRadioBoxSize(size)};
    border: 2px solid;
    border-color: ${({ checked }) =>
      checked ? theme('button.fg') : theme('thread.articleTitle')};
    border-radius: 50%;
  }

  transition: 0.25s all ease;
`
