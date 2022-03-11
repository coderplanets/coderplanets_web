import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

import {
  getNormalColor,
  getActiveColor,
  getNormalTextSize,
  getActiveIconSize,
  getNormalIconSize,
} from './metric'

type TIcon = {
  active: boolean
  type: string
  size: string
}

type TText = {
  active: boolean
  type?: string
  size?: string
  hideTextOnInit: boolean
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TText>`
  ${css.flex('align-center')};
  /* margin-left: 12px; */
  cursor: pointer;
  background: ${({ hideTextOnInit, active }) =>
    !hideTextOnInit || active ? '#0f3f4e' : 'transparent'};
  padding: ${({ hideTextOnInit, active }) =>
    !hideTextOnInit || active ? '0 5px' : '0'};
  border-radius: ${({ active }) => (active ? '5px' : '0')};

  &:hover {
    background: #044050;
    padding: 0 5px;
    border-radius: 5px;
  }

  transition: all 0.2s;
`
export const Icon = styled(Img)<TIcon>`
  fill: ${({ active, type }) =>
    active ? getActiveColor(type) : getNormalColor(type)};
  display: block;
  padding: 0;
  margin-right: 4px;
  width: ${({ active, size }) =>
    active ? getActiveIconSize(size) : getNormalIconSize(size)};
  height: ${({ active, size }) =>
    active ? getActiveIconSize(size) : getNormalIconSize(size)};

  ${Wrapper}:hover & {
    /* fill: ${theme('thread.articleTitle')}; */
    width: ${({ active, size }) =>
      active ? getActiveIconSize(size) : getNormalIconSize(size)};
    height: ${({ active, size }) =>
      active ? getActiveIconSize(size) : getNormalIconSize(size)};
  }
  transition: all 0.2s;
`

export const Text = styled.div<TText>`
  color: ${({ active, type }) =>
    active ? getActiveColor(type) : getNormalColor(type)};
  font-size: ${({ size }) => getNormalTextSize(size)};
  /* opacity: ${({ active }) => (active ? 1 : 0)}; */
  display: ${({ active, hideTextOnInit }) =>
    !hideTextOnInit || active ? 'block' : 'none'};
  outline: none;

  ${Wrapper}:hover & {
    color: ${({ type }) => getActiveColor(type)};
    display: block;
    /* opacity: 1; */
  }

  transition: all 0.2s;
`
