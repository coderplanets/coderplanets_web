import styled from 'styled-components'
import { lighten } from 'polished'

import { css, theme } from '@/utils'

export const Wrapper = styled.button`
  ${css.flex('align-center')};
  -webkit-appearance: button;
  outline: none;

  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: ${({ size }) => (size === 'default' ? '4px 15px' : '0 7px')};
  font-size: 14px;
  border-radius: 4px;
  height: ${({ size }) => (size === 'default' ? '32px' : '24px')};
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
    /* color: ${theme('button.fg')}; */
    color: ${({ ghost }) =>
      !ghost ? theme('button.fg') : theme('button.primary')};

    border-color: ${theme('button.hoverBg')};
    background-color: ${({ ghost }) =>
      !ghost ? theme('button.hoverBg') : 'transparent'};
  }

  &:focus {
    color: ${({ ghost }) =>
      !ghost ? theme('button.fg') : theme('button.primary')};
    border-color: ${theme('button.hoverBg')};
    background-color: ${({ ghost }) =>
      !ghost ? theme('button.hoverBg') : 'transparent'};
  }

  &:active {
    color: ${({ ghost }) =>
      !ghost ? theme('button.fg') : theme('button.primary')};
    background-color: ${({ ghost }) =>
      !ghost ? theme('button.hoverBg') : 'transparent'};
  }
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
