import styled from 'styled-components'
import { lighten } from 'polished'

import { theme } from '@utils'

export const Wrapper = styled.button`
  -webkit-appearance: button;
  outline: none;

  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
  border-color: #d9d9d9;

  color: ${({ ghost }) =>
    !ghost ? theme('button.fg') : theme('button.primary')};

  background-color: ${({ ghost }) =>
    !ghost ? theme('button.primary') : 'transparent'};
  border-color: ${theme('button.primary')};

  &:hover {
    color: ${theme('button.fg')};
    border-color: ${theme('button.hoverBg')};
    background-color: ${({ ghost }) =>
      !ghost ? theme('button.hoverBg') : 'transparent'};
  }

  &:focus {
    color: ${theme('button.fg')};
    border-color: ${theme('button.hoverBg')};
    background-color: ${({ ghost }) =>
      !ghost ? theme('button.hoverBg') : 'transparent'};
  }

  &:active {
    color: ${theme('button.fg')} !important;
    background-color: ${({ ghost }) =>
      !ghost ? theme('button.hoverBg') : 'transparent'};
  }
`
export const RedWrapper = styled(Wrapper)`
  color: white;
  background-color: ${theme('baseColor.error')};
  border-color: ${theme('baseColor.error')};

  &:hover {
    background-color: ${lighten(0.1, 'tomato')};
    border-color: ${lighten(0.1, 'tomato')};
    color: white;
  }
  &:focus {
    background-color: ${lighten(0.1, 'tomato')};
    border-color: ${lighten(0.1, 'tomato')};
    color: white;
  }
  &:active {
    background-color: ${lighten(0.1, 'tomato')};
    border-color: ${lighten(0.1, 'tomato')};
    color: white;
  }
`
