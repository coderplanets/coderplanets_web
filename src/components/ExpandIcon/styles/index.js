import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'
import {
  getNormalColor,
  getActiveColor,
  getNormalTextSize,
  getActiveIconSize,
  getNormalIconSize,
} from './metric'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('align-center')};
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

  transition: all 0.25s;
`
export const Icon = styled(Img)`
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
    fill: ${theme('thread.articleTitle')};
    width: ${({ active, size }) =>
      active ? getActiveIconSize(size) : getNormalIconSize(size)};
    height: ${({ active, size }) =>
      active ? getActiveIconSize(size) : getNormalIconSize(size)};
  }
  transition: all 0.25s;
`
export const Text = styled.div`
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

  transition: all 0.25s;
`
